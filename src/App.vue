<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import About from './components/About.vue'
import Header from './components/Header.vue'
import ProjectDetail from './components/ProjectDetail.vue'
import Projects from './components/Projects.vue'
import Skills from "@/components/Skills.vue";
</script>

<template>

  <div class="container">
    <Header/>
    <About/>
    <Skills/>
    <Projects/>
    <ProjectDetail/>
  </div>

  <RouterView />
</template>

<style scoped>

</style>
