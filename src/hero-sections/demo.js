// Demo file showing how to use the Cerebral Hero in Vite
import './cerebral-hero.css'
import { createCerebralHero } from './cerebral-hero.js'

// Initialize the hero section when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const orb = createCerebralHero()
    console.log('Cerebral Hero initialized', orb)
})
