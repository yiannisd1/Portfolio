<template>
  <aside>
    <div class="logo">
      <img :src="logoURL" alt="Vue" />
    </div>

    <div class="spacer">
      <div class="menu">
        <router-link to="/about" class="button">
          <span class="material-icons">info</span>
          <span class="text">About</span>
        </router-link>
        <router-link to="/expertise" class="button">
          <span class="material-icons">business_center</span>
          <span class="text">Expertise</span>
        </router-link>
        <router-link to="/experience" class="button">
          <span class="material-icons">work</span>
          <span class="text">Experience</span>
        </router-link>
        <router-link to="/projects" class="button">
          <span class="material-icons">folder_open</span>
          <span class="text">Projects</span>
        </router-link>
        <router-link to="/contact" class="button">
          <span class="material-icons">email</span>
          <span class="text">Contact</span>
        </router-link>
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
import logoURL from '../assets/logo.png';
</script>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;
  background-color: var(--dark);
  color: var(--light);
  width: 4rem;
  min-height: 100vh;
  padding: 1rem;
  overflow: hidden;
  transition: width 0.3s ease-in-out;

  &:hover {
    width: 12rem;
  }

  .logo {
    margin-bottom: 1rem;

    img {
      width: 2rem;
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
  /* Ensure the menu itself is aligned left */
  padding: 0; /* Remove padding from the menu container if any */
  margin: 0; /* Remove margin from the menu container if any */

  .button {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 2rem 0 2rem 0; /* Remove padding from the left side */
    transition: background-color 0.2s ease-in-out;

    .material-icons {
      font-size: 2rem;
      color: var(--light);
      transition: color 0.3s ease-in-out;
    }

    .text {
      color: var(--light);
      opacity: 0;
      margin-left: 1rem; /* Keep spacing between the icon and text */
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

      &.router-link-exact-active {
        background-color: var(--dark-alt);
        border-right: 5px solid var(--primary);

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
</style>
