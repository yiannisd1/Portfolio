<template>
  <div>
    <!-- Include NavBar component for the hamburger menu -->
    <NavBar />
    
    <!-- Sections of your page -->
    <section id="home" class="p-20 bg-gray-100 text-black">
      <h2>Home</h2>
      <p>Welcome to my portfolio!</p>
    </section>

    <section id="about" class="p-20 bg-white text-black">
      <h2>About</h2>
      <p>Learn more about me!</p>
    </section>

    <section id="projects" class="p-20 bg-gray-100 text-black">
      <h2>Projects</h2>
      <p>Check out my amazing projects!</p>
    </section>

    <section id="contact" class="p-20 bg-white text-black">
      <h2>Contact</h2>
      <p>Get in touch with me!</p>
    </section>
  </div>
</template>

<script>
// Import the NavBar component
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,  // Register NavBar to be used in the template
  },
};
</script>

<style scoped>
/* Add your global styles here */
</style>
