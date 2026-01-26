// Main page that wires the camera scene, swipe handling, and side panel.
'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useGesture } from '@use-gesture/react';
import { memories } from './memories/data';
import { CameraScene } from '../components/CameraScene';
import { SidePanel } from '../components/SidePanel';
import { useGallery } from '../store/useGallery';

const SWIPE_THRESHOLD = 80;
const SWIPE_COOLDOWN_MS = 350;
const INTRO_LINES = [
  "Happy Valentine’s Day, my love.",
  'One year of memories, captured forever.',
  'Swipe through our moments — there’s more to come.'
];
const TYPE_SPEED_MS = 200;

function preloadImage(src: string) {
  const img = new Image();
  img.src = src;
}

export default function HomePage() {
  const { index, next, prev, total } = useGallery();
  const memory = memories[index];
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lastNavRef = useRef(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [flash, setFlash] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typedLine, setTypedLine] = useState('');
  const [lineDone, setLineDone] = useState(false);

  const navigateNext = useCallback(() => {
    const now = Date.now();
    if (now - lastNavRef.current < SWIPE_COOLDOWN_MS) return;
    lastNavRef.current = now;
    next();
  }, [next]);

  const navigatePrev = useCallback(() => {
    const now = Date.now();
    if (now - lastNavRef.current < SWIPE_COOLDOWN_MS) return;
    lastNavRef.current = now;
    prev();
  }, [prev]);

  useEffect(() => {
    audioRef.current = new Audio('/audio/shutter.mp3');
    audioRef.current.preload = 'auto';
  }, []);

  const handleShutter = useCallback(() => {
    setFlash(true);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  }, []);

  useEffect(() => {
    if (!flash) return;
    const timer = window.setTimeout(() => setFlash(false), 200);
    return () => window.clearTimeout(timer);
  }, [flash]);

  useEffect(() => {
    if (!showIntro) return;
    const currentLine = INTRO_LINES[lineIndex] ?? '';
    if (charIndex < currentLine.length) {
      const timer = window.setTimeout(() => {
        const nextIndex = charIndex + 1;
        setCharIndex(nextIndex);
        setTypedLine(currentLine.slice(0, nextIndex));
      }, TYPE_SPEED_MS);
      return () => window.clearTimeout(timer);
    }
    setLineDone(true);
  }, [showIntro, lineIndex, charIndex]);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        navigateNext();
      }
      if (event.key === 'ArrowLeft') {
        navigatePrev();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [navigateNext, navigatePrev]);

  useGesture(
    {
      onDragStart: () => {
        const nextIndex = (index + 1) % total;
        const prevIndex = (index - 1 + total) % total;
        preloadImage(memories[nextIndex].src);
        preloadImage(memories[prevIndex].src);
      },
      onDragEnd: ({ movement: [mx], velocity: [vx], direction: [dx] }) => {
        const shouldNavigate = Math.abs(mx) > SWIPE_THRESHOLD || Math.abs(vx) > 0.45;
        if (!shouldNavigate) return;
        if (dx < 0 || mx < 0) {
          navigateNext();
        } else {
          navigatePrev();
        }
      }
    },
    {
      target: containerRef,
      drag: {
        axis: 'x',
        threshold: 20,
        rubberband: true,
        filterTaps: true
      }
    }
  );

  return (
    <main className="px-4 py-6 lg:px-10 lg:py-8">
      {showIntro ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/40 backdrop-blur-sm px-4">
          <div className="w-full max-w-xl rounded-3xl bg-parchment shadow-soft border border-charcoal/10 p-6 lg:p-8">
            <div className="text-sm uppercase tracking-[0.2em] text-charcoal/60 mb-4">
              A note before we begin
            </div>
            <div className="min-h-[120px] text-2xl lg:text-3xl font-display text-charcoal leading-snug">
              {typedLine}
              <span className="inline-block w-2 animate-pulse align-baseline">▍</span>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="text-xs text-charcoal/50">
                {lineDone
                  ? lineIndex === INTRO_LINES.length - 1
                    ? 'Tap continue to start'
                    : 'Tap next to continue'
                  : 'Typing...'}
              </div>
              <button
                type="button"
                onClick={() => {
                  if (!lineDone) return;
                  const isLast = lineIndex === INTRO_LINES.length - 1;
                  if (isLast) {
                    setShowIntro(false);
                    return;
                  }
                  setLineIndex(lineIndex + 1);
                  setCharIndex(0);
                  setTypedLine('');
                  setLineDone(false);
                }}
                disabled={!lineDone}
                className={`px-4 py-2 rounded-full text-sm tracking-wide transition ${
                  lineDone
                    ? 'bg-charcoal text-cream hover:bg-charcoal/90'
                    : 'bg-charcoal/30 text-charcoal/60 cursor-not-allowed'
                }`}
              >
                {lineDone
                  ? lineIndex === INTRO_LINES.length - 1
                    ? 'Continue'
                    : 'Next'
                  : 'Next'}
              </button>
            </div>
          </div>
        </div>
      ) : null}
      <div className="mb-6 text-center lg:text-left">
        <h1 className="text-3xl lg:text-4xl font-display text-charcoal">
          Happy Valentine&apos;s Day and One Year ! 🌹
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        <div
          ref={containerRef}
          className="relative w-full lg:w-3/5 h-[62vh] lg:h-[calc(100vh-4rem)] rounded-3xl overflow-hidden border border-charcoal/10 shadow-soft bg-parchment"
          style={{ touchAction: 'pan-y' }}
        >
          <CameraScene onShutter={handleShutter} />
          <div
            className={`pointer-events-none absolute inset-0 bg-white transition-opacity duration-200 ${
              flash ? 'opacity-90' : 'opacity-0'
            }`}
          />
          <div className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.2em] text-charcoal/60">
            Swipe or use arrow keys
          </div>
        </div>
        <SidePanel memory={memory} index={index} total={total} />
      </div>
    </main>
  );
}
