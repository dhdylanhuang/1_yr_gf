// Camera model loader with a safe placeholder and LCD texture binding.
'use client';

import React, { Suspense, useEffect, useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

type CameraModelProps = {
  screenTexture: THREE.Texture | null;
  onShutter?: () => void;
};

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const MODEL_PATH = `${BASE_PATH}/models/camera.glb`;

class ModelErrorBoundary extends React.Component<
  { fallback: React.ReactNode; children?: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

function findMeshByName(root: THREE.Object3D, pattern: RegExp): THREE.Mesh | null {
  let found: THREE.Mesh | null = null;
  root.traverse((obj) => {
    if (!found && (obj as THREE.Mesh).isMesh && pattern.test(obj.name)) {
      found = obj as THREE.Mesh;
    }
  });
  return found;
}

function findLikelyScreen(root: THREE.Object3D): THREE.Mesh | null {
  let bestMesh: THREE.Mesh | null = null;
  let bestScore = Number.POSITIVE_INFINITY;
  const targetAspect = 4 / 3;

  root.traverse((obj) => {
    if (!(obj as THREE.Mesh).isMesh) return;
    const mesh = obj as THREE.Mesh;
    const box = new THREE.Box3().setFromObject(mesh);
    const size = new THREE.Vector3();
    box.getSize(size);
    const area = size.x * size.y;
    const maxSide = Math.max(size.x, size.y);
    const minSide = Math.min(size.x, size.y);
    const depth = Math.min(size.z, minSide);

    if (!isFinite(area) || area === 0) return;
    // Prefer thin, rectangular surfaces with ~4:3 or 3:4 ratio.
    const aspect = maxSide / (minSide || 1e-6);
    const aspectScore = Math.min(
      Math.abs(aspect - targetAspect),
      Math.abs(aspect - 1 / targetAspect)
    );
    const thinness = depth / maxSide;
    if (thinness > 0.15) return; // skip chunky parts of the model

    const score = aspectScore + thinness * 0.5 - Math.log(area + 1e-6) * 0.001;
    if (score < bestScore) {
      bestScore = score;
      bestMesh = mesh;
    }
  });

  return bestMesh;
}

function applyScreenTexture(mesh: THREE.Mesh, texture: THREE.Texture) {
  // Flip texture vertically only to match GLB UV orientation
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.repeat.set(1, -1);
  texture.offset.set(0, 1);
  texture.center.set(0, 0);
  texture.rotation = 0;
  texture.flipY = false;
  texture.needsUpdate = true;

  const basicMat = new THREE.MeshBasicMaterial({
    map: texture,
    toneMapped: false,
    side: THREE.DoubleSide
  });

  const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
  if (materials.length === 0 || !materials[0]) {
    mesh.material = basicMat;
    return;
  }

  // Replace every sub-material with the basic material so all faces of the screen share it.
  mesh.material = materials.length === 1 ? basicMat : materials.map(() => basicMat.clone());
}

function PlaceholderCamera({ screenTexture, onShutter }: CameraModelProps) {
  return (
    <group>
      <mesh castShadow position={[0, 0, 0]}>
        <boxGeometry args={[2.2, 1.4, 0.8]} />
        <meshStandardMaterial color="#d1b49a" roughness={0.35} metalness={0.1} />
      </mesh>
      <mesh name="Screen" position={[0.2, 0.1, 0.41]}>
        <planeGeometry args={[1.2, 0.8]} />
        <meshStandardMaterial
          color="#111"
          map={screenTexture ?? undefined}
          emissive="#ffffff"
          emissiveIntensity={0.5}
          emissiveMap={screenTexture ?? undefined}
          toneMapped={false}
        />
      </mesh>
      <mesh castShadow position={[0.6, 0.82, 0.1]} onPointerDown={onShutter}>
        <cylinderGeometry args={[0.16, 0.16, 0.1, 32]} />
        <meshStandardMaterial color="#3d3a36" roughness={0.3} />
      </mesh>
      <mesh position={[-0.6, 0.1, 0.41]}>
        <circleGeometry args={[0.28, 32]} />
        <meshStandardMaterial color="#2c2c2c" roughness={0.2} metalness={0.4} />
      </mesh>
    </group>
  );
}

function GLBCamera({ screenTexture, onShutter }: CameraModelProps) {
  const gltf = useGLTF(MODEL_PATH);
  const modelRotation = useMemo(
    () => [0, Math.PI, 0] as [number, number, number],
    []
  );

  const screenMesh = useMemo(() => {
    const byName = findMeshByName(gltf.scene, /screen|lcd|display|panel|object_12/i);
    if (byName) return byName;
    const byShape = findLikelyScreen(gltf.scene);
    if (!byShape) {
      console.warn('[CameraModel] Screen mesh not found in GLB');
    } else {
      console.warn('[CameraModel] Screen mesh found heuristically:', byShape.name);
    }
    return byShape;
  }, [gltf]);

  const shutterProxy = useMemo(() => {
    const box = new THREE.Box3().setFromObject(gltf.scene);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);

    return {
      position: [center.x + size.x * 0.25, center.y + size.y * 0.45, center.z] as [
        number,
        number,
        number
      ],
      radius: Math.max(0.08, size.x * 0.06),
      height: Math.max(0.04, size.y * 0.05)
    };
  }, [gltf]);

  useEffect(() => {
    if (!screenMesh || !screenTexture) return;
    applyScreenTexture(screenMesh, screenTexture);
  }, [screenMesh, screenTexture]);

  useEffect(() => {
    // Soften specular highlights on the button meshes only.
    gltf.scene.traverse((obj) => {
      if (!(obj as THREE.Mesh).isMesh) return;
      const mesh = obj as THREE.Mesh;
      if (!/object_16|object_17/i.test(mesh.name)) return;
      const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
      const nextMaterials = materials.map((material) => {
        if (!material || !('roughness' in material)) return material;
        const baseMat = material as THREE.MeshStandardMaterial;
        const nextMat = baseMat.clone();
        nextMat.roughness = 1;
        nextMat.metalness = 0;
        nextMat.emissive = new THREE.Color('#000000');
        nextMat.emissiveIntensity = 0;
        if ('envMapIntensity' in nextMat) {
          nextMat.envMapIntensity = 0;
        }
        nextMat.needsUpdate = true;
        return nextMat;
      });
      mesh.material = nextMaterials.length > 1 ? nextMaterials : nextMaterials[0];
    });
  }, [gltf]);

  return (
    <group rotation={modelRotation}>
      <primitive object={gltf.scene} />
      <mesh position={shutterProxy.position} onPointerDown={onShutter}>
        <cylinderGeometry args={[shutterProxy.radius, shutterProxy.radius, shutterProxy.height, 24]} />
        <meshStandardMaterial color="#3d3a36" roughness={0.3} />
      </mesh>
    </group>
  );
}

export function CameraModel({ screenTexture, onShutter }: CameraModelProps) {
  return (
    <ModelErrorBoundary
      fallback={<PlaceholderCamera screenTexture={screenTexture} onShutter={onShutter} />}
    >
      <Suspense fallback={<PlaceholderCamera screenTexture={screenTexture} onShutter={onShutter} />}>
        <GLBCamera screenTexture={screenTexture} onShutter={onShutter} />
      </Suspense>
    </ModelErrorBoundary>
  );
}

useGLTF.preload(MODEL_PATH);
