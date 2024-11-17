import { createApp } from 'vue'
import App from './App.vue'

import './assets/tailwind.css';
import router from './router';
import VueScrollTo from 'vue-scrollto';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS styles
import { VueScrollProgress } from 'vue-scroll-progress';  // For scroll progress indicator
import gsap from 'gsap';  // For GSAP animations
import ScrollMagic from 'scrollmagic';  // For ScrollMagic

import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'animate.css'; // Import Animate.css styles

// Create the app instance
const app = createApp(App)

// Use Vue plugins
app
  .use(router)
  .use(VueScrollTo, { duration: 500, easing: 'ease-in-out' }) // Global configuration for scroll behavior
  .use(VueScrollProgress) // Use vue-scroll-progress
  .mount('#app');

// Initialize AOS (Animate On Scroll) on mount
AOS.init({
  duration: 1000, // Duration of animations
  once: true, // Trigger animation only once
  mirror: false, // Don't trigger animations when scrolling back up
});

// Example of initializing ScrollMagic for more complex scroll-based animations
const controller = new ScrollMagic.Controller();

// For example, add a scroll scene
new ScrollMagic.Scene({
  triggerElement: '#section-id', // Change to your actual section id
  triggerHook: 0.8, // When the section is 80% visible
})
  .setClassToggle('#section-id', 'visible') // Add class to the section when triggered
  .addTo(controller);

// Example GSAP usage for animations
gsap.from('.animate-on-scroll', { opacity: 0, y: 50, duration: 1 }); // Example of animating an element when it comes into view
