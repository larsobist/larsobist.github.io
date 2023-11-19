<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import About from './components/About.vue'
import Header from './components/Header.vue'
import ProjectDetail from './components/ProjectDetail.vue'
import Projects from './components/Projects.vue'
import Skills from "@/components/Skills.vue";

import { apppearance } from "@/stores/store";
</script>

<template>
  <div class="main" :class="apppearance === 'Dark' ? 'dark' : 'light'">
      <div class="container">
        <Header />
        <About />
        <Skills />
        <Projects />
        <ProjectDetail />
      </div>
      <RouterView />
    </div>
</template>


<style src="./assets/style.css">

</style>
