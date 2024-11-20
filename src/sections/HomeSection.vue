<template>
    <div class="home">
      <AboutSection ref="firstSection" />
      <ExpertiseSection />
      <ExperienceResumeSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import AboutSection from '@/sections/AboutSection.vue';
  import ExpertiseSection from '@/sections/ExpertiseSection.vue';
  import ExperienceResumeSection from '@/sections/ExperienceResumeSection.vue';
  import ProjectsSection from '@/sections/ProjectsSection.vue';
  import ContactSection from '@/sections/ContactSection.vue';
  
  export default {
    name: 'HomeSection',
    components: {
      AboutSection,
      ExpertiseSection,
      ExperienceResumeSection,
      ProjectsSection,
      ContactSection,
    },
    setup() {
      const firstSection = ref(null);
  
      return { firstSection };
    }
  };
  </script>
  
  <style scoped>
  .home {
    display: flex;
    flex-direction: column;
    gap: 2rem; /* Spacing between sections */
    padding-left: 5rem; /* Ensure content is not hidden behind the sidebar */
  }
  
  .home > * {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    padding: 0;
    color: var(--text-color);
  }
  
  .home > *:not(:last-child) {
    margin-bottom: 2rem;
  }
  </style>
  