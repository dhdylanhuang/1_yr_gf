// Zustand store for gallery navigation state.
import { create } from 'zustand';
import { memories } from '../app/memories/data';

type GalleryState = {
  index: number;
  total: number;
  next: () => void;
  prev: () => void;
  setIndex: (n: number) => void;
};

export const useGallery = create<GalleryState>((set, get) => ({
  index: 0,
  total: memories.length,
  next: () => {
    const { index, total } = get();
    set({ index: (index + 1) % total });
  },
  prev: () => {
    const { index, total } = get();
    set({ index: (index - 1 + total) % total });
  },
  setIndex: (n: number) => {
    const { total } = get();
    const nextIndex = ((n % total) + total) % total;
    set({ index: nextIndex });
  }
}));
