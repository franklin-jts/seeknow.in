# Seeknow Animation Flow

## 🎬 Complete User Experience Flow

### With Intro (`?intro` in URL)
```
1. [0s] Intro animation starts (macro close-up scene)
2. [0.5s] "Skip Intro" button appears
3. [7.2s] Intro ends, main logo reveal starts
4. [7.2s] Skip button auto-hides
5. [18s] Full animation completes
6. [18s] Fade out canvas → Fade in Hero Section
```

### Without Intro (default)
```
1. [0s] Main logo reveal starts directly
2. [10s] Logo reveal completes
3. [10s] Fade out canvas → Fade in Hero Section
```

### When Skip Button is Clicked
```
1. User clicks "Skip Intro"
2. Animation jumps to main logo reveal (7.2s mark)
3. Skip button hides
4. [+2s] Brief logo display
5. Fade out canvas → Fade in Hero Section
```

## 🚀 Usage

### Run with Intro + Skip Button
```bash
npm run dev
```
Open: `http://localhost:5173?intro`

### Run without Intro (Direct to Logo)
```bash
npm run dev
```
Open: `http://localhost:5173`

### View Hero Section Directly
```bash
npm run dev:hero
```

## 📁 Key Files

- **src/main.js** - Main entry, handles timing and transitions
- **src/reveal.js** - Logo animation logic
- **src/hero-sections/cerebral-hero.js** - Hero section component
- **src/style.css** - Base styles and transitions

## ⏱️ Timing Breakdown

| Event | With Intro | Without Intro |
|-------|-----------|---------------|
| Intro Scene | 0-7.2s | N/A |
| Main Logo Reveal | 7.2-18s | 0-10s |
| Hero Section Appears | 18s | 10s |
| Skip → Hero | 2s after skip | N/A |

## 🎨 Transition Effects

- Canvas fade out: 1s
- Hero fade in: 1s
- Skip button fade: 0.3s
- Total transition: 2s smooth crossfade
