// Memory data powering the camera LCD and side panel.
export type Memory = {
  id: string;
  src: string;
  takenAtISO: string;
  place: string;
  caption: string;
  mapSrc?: string;
  songSrc?: string;
};

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const withBasePath = (assetPath: string) => `${BASE_PATH}${assetPath}`;


export const memories: Memory[] = [
  {
    id: 'memory-1',
    src: withBasePath('/images/memories/1.jpg'),
    takenAtISO: '2025-02-18T09:20:00Z',
    place: 'Glasgow, UK',
    caption: 'First light over the tiled rooftops and a slow espresso to match.',
    mapSrc: withBasePath('/images/locations/1.jpeg')
  },
  {
    id: 'memory-2',
    src: withBasePath('/images/memories/2.jpg'),
    takenAtISO: '2025-02-05T16:45:00Z',
    place: 'Glasgow, UK',
    caption: 'Quiet lanes, soft rain, and a pocketful of temple stamps.',
    mapSrc: withBasePath('/images/locations/2.jpg')
  },
  {
    id: 'memory-3',
    src: withBasePath('/images/memories/3.jpeg'),
    takenAtISO: '2025-03-18T11:05:00Z',
    place: 'Glasgow, UK',
    caption: 'Spice stalls and sun-faded maps tucked in a leather notebook.',
    mapSrc: withBasePath('/images/locations/3.jpg')
  },
  {
    id: 'memory-4',
    src: withBasePath('/images/memories/4.jpg'),
    takenAtISO: '2025-03-23T19:10:00Z',
    place: 'Ben Arthur, Arrochar',
    caption: 'Blue hour stretched forever while the harbor lights blinked on.',
    mapSrc: withBasePath('/images/locations/4.jpg')
  },
  {
    id: 'memory-5',
    src: withBasePath('/images/memories/5.jpg'),
    takenAtISO: '2025-04-05T08:15:00Z',
    place: 'Glasgow, UK',
    caption: 'Warm bread, marigolds, and a sleepy plaza waking up.',
    mapSrc: withBasePath('/images/locations/5.jpg')
  },
  {
    id: 'memory-6',
    src: withBasePath('/images/memories/6.jpg'),
    takenAtISO: '2025-04-11T08:15:00Z',
    place: 'Glasgow, UK',
    caption: 'Warm bread, marigolds, and a sleepy plaza waking up.',
    mapSrc: withBasePath('/images/locations/6.jpg')
  },
  {
    id: 'memory-7',
    src: withBasePath('/images/memories/7.jpg'),
    takenAtISO: '2025-05-24T08:15:00Z',
    place: 'Glasgow, UK',
    caption: 'Warm bread, marigolds, and a sleepy plaza waking up.',
    mapSrc: withBasePath('/images/locations/7.jpg')
  },
  {
    id: 'memory-8',
    src: withBasePath('/images/memories/8.jpg'),
    takenAtISO: '2025-07-09T08:15:00Z',
    place: 'Glasgow, UK',
    caption: 'Warm bread, marigolds, and a sleepy plaza waking up.',
    mapSrc: withBasePath('/images/locations/8.jpg')
  },
  {
    id: 'memory-9',
    src: withBasePath('/images/memories/9.png'),
    takenAtISO: '2025-07-17T08:15:00Z',
    place: 'Olympia, WA',
    caption: 'Warm bread, marigolds, and a sleepy plaza waking up.',
    mapSrc: withBasePath('/images/locations/9.jpg')
  },
  {
    id: 'memory-10',
    src: withBasePath('/images/memories/10.jpg'),
    takenAtISO: '2025-09-04T08:15:00Z',
    place: 'Trogir, HR',
    caption: 'Warm bread, marigolds, and a sleepy plaza waking up.',
    mapSrc: withBasePath('/images/locations/10.jpg')
  },
  {
    id: 'memory-11',
    src: withBasePath('/images/memories/11.jpg'),
    takenAtISO: '2025-09-04T08:15:00Z',
    place: 'Split, HR',
    caption: 'Warm bread, marigolds, and a sleepy plaza waking up.',
    mapSrc: withBasePath('/images/locations/11.jpg')
  },
  {
    id: 'memory-12',
    src: withBasePath('/images/memories/12.jpg'),
    takenAtISO: '2025-09-05T08:15:00Z',
    place: 'Klis, HR',
    caption: 'Warm bread, marigolds, and a sleepy plaza waking up.',
    mapSrc: withBasePath('/images/locations/12.jpg')
  },
  {
    id: 'memory-13',
    src: withBasePath('/images/memories/13.jpg'),
    takenAtISO: '2025-09-07T08:15:00Z',
    place: 'Split, HR',
    caption: 'Warm bread, marigolds, and a sleepy plaza waking up.',
    mapSrc: withBasePath('/images/locations/13.jpg')
  },
  {
    id: 'memory-14',
    src: withBasePath('/images/memories/14.jpg'),
    takenAtISO: '2025-09-27T08:15:00Z',
    place: 'The Snub, Glen Cova',
    caption: 'Warm bread, marigolds, and a sleepy plaza waking up.',
    mapSrc: withBasePath('/images/locations/14.jpg')
  },
  {
    id: 'memory-15',
    src: withBasePath('/images/memories/15.jpg'),
    takenAtISO: '2025-10-11T08:15:00Z',
    place: 'Glasgow, UK',
    caption: 'Warm bread, marigolds, and a sleepy plaza waking up.',
    mapSrc: withBasePath('/images/locations/15.jpg')
  },
  {
    id: 'memory-16',
    src: withBasePath('/images/memories/161.jpg'),
    takenAtISO: '2025-11-16T08:15:00Z',
    place: 'Ben Vorlich, Arrochar',
    caption: 'Warm bread, marigolds, and a sleepy plaza waking up.',
    mapSrc: withBasePath('/images/locations/16.jpg')
  },
  {
    id: 'memory-17',
    src: withBasePath('/images/memories/17.jpg'),
    takenAtISO: '2025-11-22T08:15:00Z',
    place: 'Glasgow, UK',
    caption: 'Warm bread, marigolds, and a sleepy plaza waking up.',
    mapSrc: withBasePath('/images/locations/17.jpg')
  },
  {
    id: 'memory-18',
    src: withBasePath('/images/memories/18.jpg'),
    takenAtISO: '2026-01-02T08:15:00Z',
    place: 'Glasgow, UK',
    caption: 'Warm bread, marigolds, and a sleepy plaza waking up.',
    mapSrc: withBasePath('/images/locations/18.jpg')
  },
  {
    id: 'memory-19',
    src: withBasePath('/images/memories/19.jpg'),
    takenAtISO: '2026-01-15T08:15:00Z',
    place: 'Glasgow, UK',
    caption: 'Warm bread, marigolds, and a sleepy plaza waking up.',
    mapSrc: withBasePath('/images/locations/19.jpg')
  },
  {
    id: 'memory-20',
    src: withBasePath('/images/memories/20.jpg'),
    takenAtISO: '2026-02-06T08:15:00Z',
    place: 'Glasgow, UK',
    caption: 'Warm bread, marigolds, and a sleepy plaza waking up.',
    mapSrc: withBasePath('/images/locations/20.jpg')
  },
  {
    id: 'memory-21',
    src: withBasePath('/images/memories/21.jpg'),
    takenAtISO: '2026-02-06T08:15:00Z',
    place: 'Glasgow, UK',
    caption: 'Warm bread, marigolds, and a sleepy plaza waking up.',
    mapSrc: withBasePath('/images/locations/21.jpg')
  },  

];
