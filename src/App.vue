<script lang="ts" setup>
import About from '@/components/About.vue'
import Header from '@/components/Header.vue'
import ProjectDetail from '@/components/Detail.vue'
import Projects from '@/components/Projects.vue'
import Skills from "@/components/Skills.vue";
import Footer from "@/components/Footer.vue";
import Menu from "@/components/Menu.vue";

import {apppearance} from "@/stores/store";
</script>

<template>
  <div :class="apppearance === 'Dark' ? 'dark' : 'light'" class="main">
    <div class="container">
      <Menu/>
      <Header id="home"/>
      <About id="about"/>
      <Skills id="skills"/>
      <Projects id="projects"/>
      <ProjectDetail id="projects"/>
      <Footer/>
    </div>
  </div>
</template>

<style src="./assets/style.css">

</style>
