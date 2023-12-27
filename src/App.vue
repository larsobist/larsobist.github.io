<script lang="ts" setup>
import About from '@/components/About.vue'
import Header from '@/components/Header.vue'
import ProjectDetail from '@/components/Detail.vue'
import Projects from '@/components/Projects.vue'
import Skills from "@/components/Skills.vue";
import Menu from "@/components/Menu.vue";

import {apppearance} from "@/stores/store";
</script>

<template>
  <div :class="apppearance === 'Dark' ? 'dark' : 'light'" class="main">

    <Menu/>
    <div class="container">
      <Header id="home"/>
      <About id="about"/>
      <Skills id="skills"/>
      <Projects id="projects"/>
      <ProjectDetail id="projects"/>
    </div>
  </div>

</template>


<style src="./assets/style.css">

</style>
