// R3F canvas with lighting, camera rig motion, and model rendering.
'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { Suspense, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { memories } from '../app/memories/data';
import { useGallery } from '../store/useGallery';
import { CameraModel } from './CameraModel';
import { useScreenTexture } from './ScreenTexture';

type CameraSceneProps = {
  onShutter: () => void;
};

function CameraRig({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group | null>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const { x, y } = state.pointer;
    const idle = Math.sin(state.clock.elapsedTime * 0.6) * 0.02;
    const targetX = y * 0.15 + idle;
    const targetY = x * 0.2;

    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetX,
      0.08
    );
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetY,
      0.08
    );
  });

  return (
    <group ref={groupRef} position={[0, -0.1, 0]}>
      {children}
    </group>
  );
}

export function CameraScene({ onShutter }: CameraSceneProps) {
  const { index } = useGallery();
  const memory = memories[index];
  const { texture } = useScreenTexture(memory);

  const cameraSettings = useMemo(
    () => ({
      position: [0, 0.2, 4.2] as [number, number, number],
      fov: 42
    }),
    []
  );

  return (
    <Canvas camera={cameraSettings} dpr={[1, 1.6]}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[3, 4, 5]} intensity={0.9} />
      <CameraRig>
        <group scale={1.2}>
          <CameraModel screenTexture={texture} onShutter={onShutter} />
        </group>
      </CameraRig>
      <Suspense fallback={null}>
        <Environment preset="studio" />
      </Suspense>
    </Canvas>
  );
}
