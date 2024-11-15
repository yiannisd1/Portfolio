<template>
  <div>
    <!-- Components -->
    <NavBar />
    
    <!-- Sections -->
    <AboutSection />
    <ExpertiseSection />
    <ProjectsSection />
    <ExperienceResumeSection />
    <ContactSection />
    
  </div>
</template>

<script>
// Import necessary components
import NavBar from './components/NavBar.vue';
import AboutSection from './sections/AboutSection.vue';
import ContactSection from './sections/ContactSection.vue';
import ExpertiseSection from './sections/ExpertiseSection.vue';
import ProjectsSection from './sections/ProjectsSection.vue';
import ExperienceResumeSection from './sections/ExperienceResumeSection.vue';

export default {
  name: 'App',
  components: { // Registration
    NavBar,
    AboutSection,
    ContactSection,
    ExpertiseSection,
    ProjectsSection,
    ExperienceResumeSection,


  },
};
</script>

<style scoped>
/* Global styles */
html {
  scroll-behavior: smooth;
}


</style>


