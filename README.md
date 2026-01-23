<!-- README: Setup notes for the memory camera app. -->
# Memory Camera

A minimal Next.js + R3F gallery that renders a 3D camera and swaps a screen texture as you swipe through memories.

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Replace assets

- Camera model: drop a GLB at `public/models/camera.glb`.
  - Ensure the LCD mesh is named with `Screen` or `LCD` so it auto-binds the screen texture.
  - TODOs in `components/CameraModel.tsx` show where to map a different mesh name.
- Memory images: replace files in `public/images/memories/` (1.jpg - 5.jpg).
- Shutter sound: add an MP3 at `public/audio/shutter.mp3` (optional).

## Notes

- Swipe left/right (or use arrow keys) to switch memories.
- The LCD texture is drawn on a hidden canvas and mapped onto the screen mesh.
