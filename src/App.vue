<template>
  <div class="app">
    <SideBar />
    <div class="content">
      <router-view /> <!-- This will render the active section based on the route -->
    </div>
  </div>
</template>

<script setup>
import SideBar from './components/SideBar.vue';

import { nextTick } from 'vue';

// Check and apply the theme from localStorage on load
nextTick(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
  }
});
</script>

<style lang="scss">
:root {
  --primary: #4ade80;
  --primary-alt: #22c55e;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --sidebar-width: 300px;

  /* Light mode variables */
  --bg-color-light: var(--light);
  --text-color-light: var(--dark);

  /* Dark mode variables */
  --bg-color-dark: var(--dark);
  --text-color-dark: var(--light);
}

html {
  --bg-color: var(--bg-color-light);
  --text-color: var(--text-color-light);
}

html.dark {
  --bg-color: var(--bg-color-dark);
  --text-color: var(--text-color-dark);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira sans', sans-serif;
  scroll-behavior: smooth;
}

body {
  background: var(--bg-color);
  color: var(--text-color);
}

.app {
  display: flex;
  min-height: 100vh;
  overflow: hidden;
}

.sidebar {
  width: var(--sidebar-width);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: var(--dark);
  color: var(--light);
  padding: 1rem;
  overflow-y: auto;
}

.content {
  margin-left: var(--sidebar-width);
  flex: 1;
  padding: 20px;
  background-color: var(--bg-color);
  color: var(--text-color);
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  height: 100vh;
}

section {
  scroll-snap-align: start;
}
</style>
