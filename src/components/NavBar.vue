<template>
  <!-- Hamburger Button -->
  <button 
    class="text-3xl absolute top-4 left-4 z-50"
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
    <div 
      class="bg-white w-3/4 max-w-md p-6 rounded-lg"
    >
      <!-- Menu Items -->
      <ul class="space-y-6">
        <li><a href="#home" class="block text-xl text-gray-900 hover:text-gray-600">Home</a></li>
        <li><a href="#about" class="block text-xl text-gray-900 hover:text-gray-600">About</a></li>
        <li><a href="#projects" class="block text-xl text-gray-900 hover:text-gray-600">Projects</a></li>
        <li><a href="#contact" class="block text-xl text-gray-900 hover:text-gray-600">Contact</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      menuOpen: false,  // Tracks if the menu is open or closed
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;  // Toggle menu visibility
    },
  },
};
</script>

<style scoped>
/* Curtain backdrop styling */
.bg-opacity-50 {
  opacity: 0.5;
}
</style>
