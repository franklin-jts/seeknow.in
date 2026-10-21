import './style.css'
import { createReveal } from './reveal.js'
import './hero-sections/cerebral-hero.css'
import { createCerebralHero } from './hero-sections/cerebral-hero.js'

const canvas = document.getElementById('c')

// add #intro (or ?intro) to the URL to include the optional macro close-up scene
const intro = (location.search + location.hash).includes('intro')

const reveal = createReveal(canvas, { intro })
reveal.play()

// Function to transition from intro to hero section
function showHeroSection() {
  // Fade out canvas
  canvas.style.transition = 'opacity 1s ease'
  canvas.style.opacity = '0'
  
  setTimeout(() => {
    // Hide canvas completely
    canvas.style.display = 'none'
    
    // Show hero section
    createCerebralHero()
    
    // Fade in hero section
    const heroContainer = document.querySelector('.hero-container')
    if (heroContainer) {
      heroContainer.style.opacity = '0'
      heroContainer.style.transition = 'opacity 1s ease'
      setTimeout(() => {
        heroContainer.style.opacity = '1'
      }, 50)
    }
  }, 1000)
}

// Create and show skip button only if intro is enabled
if (intro) {
  // Create skip button dynamically
  const skipButton = document.createElement('button')
  skipButton.id = 'skipIntro'
  skipButton.textContent = 'Skip Intro'
  document.body.appendChild(skipButton)

  // Show button after a short delay
  setTimeout(() => {
    skipButton.classList.add('visible')
  }, 500)

  // Hide button automatically after intro ends (at 7.2 seconds)
  setTimeout(() => {
    skipButton.classList.remove('visible')
    // Remove button from DOM after fade out
    setTimeout(() => {
      skipButton.remove()
    }, 300)
  }, 7200)

  // Show hero section after full animation completes (18 seconds)
  setTimeout(() => {
    showHeroSection()
  }, 18000)

  // Handle skip button click
  skipButton.addEventListener('click', () => {
    reveal.skipToMain()
    skipButton.classList.remove('visible')
    // Remove button from DOM after fade out
    setTimeout(() => {
      skipButton.remove()
    }, 300)
    
    // Show hero section immediately when skipped
    setTimeout(() => {
      showHeroSection()
    }, 2000) // Wait 2 seconds after skip to show the logo briefly
  })
} else {
  // No intro - show hero section after brief logo reveal (10 seconds)
  setTimeout(() => {
    showHeroSection()
  }, 10000)
}
