<template>
    <aside 
      @mouseenter="expandSidebar" 
      @mouseleave="collapseSidebar" 
      @mousemove="handleMouseMove" 
      :class="{'expanded': isExpanded}">
      <div class="logo">
        <router-link to="/" class="logo-link" @click="scrollToFirstSection">
          <img :src="logoURL" alt="Vue" />
        </router-link>
      </div>
  
      <div class="spacer">
        <div class="menu">
          <a href="#about" class="button">
            <span class="material-icons">info</span>
            <span class="text">About</span>
          </a>
          <a href="#expertise" class="button">
            <span class="material-icons">business_center</span>
            <span class="text">Expertise</span>
          </a>
          <a href="#experience-resume" class="button">
            <span class="material-icons">work</span>
            <span class="text">Experience-Resume</span>
          </a>
          <a href="#projects" class="button">
            <span class="material-icons">folder_open</span>
            <span class="text">Projects</span>
          </a>
          <a href="#contact" class="button">
            <span class="material-icons">email</span>
            <span class="text">Contact</span>
          </a>
        </div>
      </div>
  
      <div class="menu">
        <router-link to="/settings" class="button">
          <span class="material-icons">settings</span>
          <span class="text">Settings</span>
        </router-link>
      </div>
    </aside>
  </template>
  
  <script setup>
  import { ref, nextTick } from 'vue';
  import logoURL from '../assets/logo.png';
  
  const isExpanded = ref(false);
  
  // Function to handle sidebar expand
  const expandSidebar = () => {
    isExpanded.value = true;
  };
  
  // Function to handle sidebar collapse
  const collapseSidebar = () => {
    isExpanded.value = false;
  };
  
  // Handle mouse move to detect when the mouse is outside the 16rem mark
  const handleMouseMove = (event) => {
    const sidebarWidth = 200; // The expanded width of the sidebar in rem
    const mouseX = event.clientX; // Mouse's X position
  
    if (mouseX < sidebarWidth) {
      isExpanded.value = true; // Expand sidebar if mouse is within the 16rem width
    } else {
      isExpanded.value = false; // Collapse sidebar if mouse is outside the 16rem width
    }
  };
  
  // Handle the scroll to the first section (AboutSection)
  const scrollToFirstSection = () => {
    nextTick(() => {
      const firstSection = document.querySelector('#about'); // Adjust to your section's id
      if (firstSection) {
        firstSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  };
  </script>
  
  <style lang="scss" scoped>
  aside {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    background-color: var(--dark);
    color: var(--light);
    width: 5rem; /* Initial collapsed width */
    padding: 1rem;
    overflow: hidden;
    transition: width 0.3s ease-in-out;
    z-index: 10;
  
    /* Expanded state - controls when mouse is inside first 16rem */
    &.expanded {
      width: 16rem;
      background: linear-gradient(to right, var(--dark) 16rem, rgba(0, 0, 0, 0.6) 100%);
    }
  
    .logo {
      margin-bottom: 1rem;
  
      img {
        width: 2.5rem;
      }
    }
  
    .spacer {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: flex-start;
    }
  
    .menu {
      padding: 0;
      margin: 0;
  
      .button {
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: 1rem 0;
        transition: background-color 0.2s ease-in-out;
  
        .material-icons {
          font-size: 2rem;
          color: var(--light);
          transition: color 0.3s ease-in-out;
        }
  
        .text {
          color: var(--light);
          opacity: 0;
          margin-left: 1rem;
          white-space: nowrap;
          transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
          transform: translateX(-10px);
        }
  
        &:hover {
          background-color: var(--dark-alt);
  
          .material-icons {
            color: var(--primary);
          }
  
          .text {
            color: var(--primary);
            opacity: 1;
            transform: translateX(0);
          }
        }
      }
    }
  }
  
  /* For the hover effect when expanding */
  aside.expanded {
    width: 16rem;
    &:hover {
      width: 100vw; /* Expands to full screen width */
    }
  }
  </style>
  












