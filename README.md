# Seeknow Logo Reveal (Vite)

Cinematic canvas logo reveal: black screen → dark silhouette + spark → slow light sweep →
fully lit logo → "India's First Workforce Operating System" tagline → hold.

## Run

```bash
npm install
npm run dev       # dev server (http://localhost:5173)
npm run build     # production build -> dist/
npm run preview   # serve the production build
```

## Structure

```
index.html                  page shell (one <canvas id="c">)
src/main.js                 entry: creates and plays the reveal
src/reveal.js               the animation (createReveal) - timings are in scene2()
src/style.css               black page, full-screen canvas
src/assets/seeknow-logo.png your original logo (unchanged, never redrawn)
src/data/outfit-glyphs.json Outfit letter outlines for the tagline (no font download)
src/utils/                  math helpers + vector text drawing
```

## Notes

- Click anywhere to replay. Add `#intro` to the URL to see the optional macro close-up scene.
- `createReveal(canvas)` returns `{ play, replay, destroy }`, so it can be mounted inside
  any page (e.g. as a hero intro) and cleaned up with `destroy()`.
- To change the tagline, edit the `txt` string in `scene2()` in `src/reveal.js`
  (the glyph file only contains the letters of the current tagline; regenerate it for new characters).
