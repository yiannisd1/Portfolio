<template>
  <!-- Hamburger Button -->
  <button
    class="text-3xl"
    @click="toggleMenu"
    aria-label="Toggle menu"
  >
    &#9776;
  </button>

  <!-- Curtain Menu -->
  <div
    v-if="menuOpen"
    @click.self="toggleMenu"
    class="fixed inset-0 bg-gray-900 bg-opacity-50 z-40 flex justify-center items-center"
  >
    <div class="bg-white w-3/4 max-w-md p-6 rounded-lg">
      <!-- Menu Items -->
      <ul class="space-y-6">
        <li>
          <a 
            href="#about" 
            @click.prevent="scrollToSection('#about')" 
            class="block text-xl text-gray-900 hover:text-gray-600">
            About
          </a>
        </li>
        <li>
          <a 
            href="#expertise" 
            @click.prevent="scrollToSection('#expertise')" 
            class="block text-xl text-gray-900 hover:text-gray-600">
            Expertise
          </a>
        </li>
        <li>
          <a 
            href="#projects" 
            @click.prevent="scrollToSection('#projects')" 
            class="block text-xl text-gray-900 hover:text-gray-600">
            Projects
          </a>
        </li>
        <!-- New Experience-Resume Link -->
        <li>
          <a 
            href="#experience-resume" 
            @click.prevent="scrollToSection('#experience-resume')" 
            class="block text-xl text-gray-900 hover:text-gray-600">
            Experience-Resume
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            @click.prevent="scrollToSection('#contact')" 
            class="block text-xl text-gray-900 hover:text-gray-600">
            Contact
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      menuOpen: false, // Tracks if the menu is open or closed
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen; // Toggle menu visibility
    },
    scrollToSection(section) {
      // Use the vue-scrollto plugin to scroll to the section
      this.$scrollTo(section, 500, {
        easing: 'ease-in-out'
      });
      this.menuOpen = false; // Close the menu after clicking
    },
  },
};
</script>

<style scoped>
/* Hamburger Button Styling */
button {
  position: fixed;   /* Keep the button fixed in the viewport */
  top: 20px;         /* Distance from the top of the page */
  left: 20px;        /* Distance from the left of the page */
  z-index: 50;       /* Ensure it's always on top of other content */
  background-color: #f6d4b1; /* Background color */
  border: none;      /* Removes any default button border */
  color: #000;       /* Set color of the hamburger icon */
  font-size: 2rem;   /* Adjust size */
  padding: 8px 20px;     /* Adds padding around the button */
  border-radius: 20px; /* Rounded corners */
  box-shadow: 0 20px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow */
  transition: transform 0.3s ease, box-shadow 0.8s ease; /* Smooth transition */
}

/* Hover effect */
button:hover {
  transform: translateY(-5px); /* Moves the button slightly up */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Stronger shadow on hover */
}

button:focus {
  outline: none; /* Optional: Removes default focus outline */
}

/* Curtain backdrop styling */
.bg-opacity-50 {
  opacity: 0.5;
}

.menu-body {
  background-color: #525252;
  color: #f6d4b1;
  font-size: 2em;
  font-family: "public-pixel", monospace;
  text-decoration: none !important;
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: -100px;
  right: 100vw;
  z-index: 0;
  transition: all 0.7s;
  display: inline-flex;
  gap: 16px;
  flex-direction: column;
  padding-top: 70px;
  padding-left: 20px;
  overflow: hidden;
  box-sizing: border-box;
  opacity: 0;
}

.menu-body a {
  text-decoration: none !important;
}

.menu-body a:hover {
  transform: none;
}

.active .menu-body {
  left: 0px;
  right: 0px;
  opacity: 1;
}

@media (min-width: 540px) {
  .menu-btn {
    justify-content: left;
  }

  .active .menu-btn {
    translate: 28px;
  }

  .menu-body {
    padding-left: 50px;
  }
}
</style>
