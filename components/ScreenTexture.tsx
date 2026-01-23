// Hook for drawing the current memory into a hidden canvas and exposing a CanvasTexture.
'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import type { Memory } from '../app/memories/data';
import { formatMemoryStamp } from '../lib/format';

const CANVAS_WIDTH = 1024;
const CANVAS_HEIGHT = 768;

function drawImageCover(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  width: number,
  height: number
) {
  const scale = Math.max(width / img.width, height / img.height);
  const drawWidth = img.width * scale;
  const drawHeight = img.height * scale;
  const dx = (width - drawWidth) / 2;
  const dy = (height - drawHeight) / 2;
  ctx.drawImage(img, dx, dy, drawWidth, drawHeight);
}

function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
}

export function useScreenTexture(memory: Memory) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [texture, setTexture] = useState<THREE.CanvasTexture | null>(null);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
    canvas.style.display = 'none';
    canvas.setAttribute('data-purpose', 'screen-texture');
    document.body.appendChild(canvas);
    canvasRef.current = canvas;

    const nextTexture = new THREE.CanvasTexture(canvas);
    nextTexture.colorSpace = THREE.SRGBColorSpace;
    nextTexture.needsUpdate = true;
    setTexture(nextTexture);

    return () => {
      nextTexture.dispose();
      canvas.remove();
    };
  }, []);

  useEffect(() => {
    if (!canvasRef.current || !texture) return;

    let cancelled = false;
    const img = new Image();
    img.src = memory.src;

    const draw = (loadedImage: HTMLImageElement | null) => {
      if (!canvasRef.current || cancelled) return;
      const ctx = canvasRef.current.getContext('2d');
      if (!ctx) return;

      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      if (loadedImage) {
        drawImageCover(ctx, loadedImage, CANVAS_WIDTH, CANVAS_HEIGHT);
      } else {
        ctx.fillStyle = '#1f1a15';
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      }

      const stamp = formatMemoryStamp(memory.takenAtISO, memory.place);
      ctx.font = '20px "Sora", sans-serif';
      const paddingX = 16;
      const textWidth = ctx.measureText(stamp).width;
      const boxWidth = textWidth + paddingX * 2;
      const boxHeight = 36;
      const x = CANVAS_WIDTH - boxWidth - 28;
      const y = CANVAS_HEIGHT - boxHeight - 28;

      ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
      drawRoundedRect(ctx, x, y, boxWidth, boxHeight, 12);
      ctx.fill();

      ctx.fillStyle = '#fdf7ef';
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'left';
      ctx.fillText(stamp, x + paddingX, y + boxHeight / 2 + 1);

      texture.needsUpdate = true;
    };

    img.onload = () => draw(img);
    img.onerror = () => draw(null);

    return () => {
      cancelled = true;
    };
  }, [memory, texture]);

  return { texture };
}
