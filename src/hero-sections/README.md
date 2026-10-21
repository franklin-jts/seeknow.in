# Cerebral AI Hero Section

A modern, dark-themed hero section with an animated purple glowing orb built for Vite.

## Files Structure

```
src/hero-sections/
├── cerebral-hero.js   # Main JS with GlowingOrb class and createCerebralHero()
├── cerebral-hero.css  # All styles for the hero section
├── demo.js            # Demo integration example
└── README.md          # This file
```

## Usage in Vite

### Option 1: As a separate page (demo included)

Run the demo:
```bash
npm run dev
```

Then open: `http://localhost:5173/hero-demo.html`

### Option 2: Import into your existing main.js

```javascript
import './hero-sections/cerebral-hero.css'
import { createCerebralHero } from './hero-sections/cerebral-hero.js'

// Initialize the hero
const orb = createCerebralHero()

// Optionally destroy it later
// orb.destroy()
```

### Option 3: Use in a specific route/page

```javascript
// In your page/route file
import '../hero-sections/cerebral-hero.css'
import { createCerebralHero, GlowingOrb } from '../hero-sections/cerebral-hero.js'

// Create the full hero section
createCerebralHero()

// OR use just the orb animation with your own HTML
const canvas = document.getElementById('myCanvas')
const orb = new GlowingOrb(canvas)
```

## Features

- ✨ Animated purple glowing orb with canvas
- 🎨 Interactive mouse tracking
- 🌊 Flowing energy rings
- ⭐ Swirling particles
- 📱 Fully responsive design
- 🎯 Smooth animations and transitions
- 🌙 Dark theme with gradient background
- ⚡ Built as ES6 modules for Vite

## Exports

- `createCerebralHero()` - Creates the entire hero section HTML and initializes the orb
- `GlowingOrb` - Class for the orb animation (if you want to use it standalone)

## Browser Support

Modern browsers with Canvas API support (Chrome, Firefox, Safari, Edge)
