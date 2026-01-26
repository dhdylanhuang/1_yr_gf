// Memory data powering the camera LCD and side panel.
export type Memory = {
  id: string;
  src: string;
  takenAtISO: string;
  place: string;
  caption: string;
  mapSrc?: string;
};

export const memories: Memory[] = [
  {
    id: 'memory-1',
    src: '/images/memories/1.jpg',
    takenAtISO: '2025-02-18T09:20:00Z',
    place: 'Glasgow, UK',
    caption: 'First light over the tiled rooftops and a slow espresso to match.',
    mapSrc: '/images/locations/glasgow.jpeg'
  },
  {
    id: 'memory-2',
    src: '/images/memories/2.jpg',
    takenAtISO: '2024-03-05T16:45:00Z',
    place: 'Kyoto, JP',
    caption: 'Quiet lanes, soft rain, and a pocketful of temple stamps.'
  },
  {
    id: 'memory-3',
    src: '/images/memories/3.jpg',
    takenAtISO: '2024-06-22T11:05:00Z',
    place: 'Marrakesh, MA',
    caption: 'Spice stalls and sun-faded maps tucked in a leather notebook.',
    mapSrc: '/images/memories/3.jpg'
  },
  {
    id: 'memory-4',
    src: '/images/memories/4.jpg',
    takenAtISO: '2024-09-14T19:10:00Z',
    place: 'Reykjavik, IS',
    caption: 'Blue hour stretched forever while the harbor lights blinked on.'
  },
  {
    id: 'memory-5',
    src: '/images/memories/5.jpg',
    takenAtISO: '2024-12-03T08:15:00Z',
    place: 'Oaxaca, MX',
    caption: 'Warm bread, marigolds, and a sleepy plaza waking up.'
  }
];
