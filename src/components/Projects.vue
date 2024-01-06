<script lang="ts" setup>
import {apppearance, selectedProject, setSelectedProject} from '@/stores/store';
import CONTENT from "@/locales/content.json";

const onClick = (project: string) => {
  setSelectedProject(project);
};
</script>

<template>
  <div v-if="selectedProject == null" >
    <h2>{{ $t('PROJECTS.TITLE') }}</h2>
    <div class="grid">
      <div v-for="(project, index) in CONTENT.PROJECTS" :key="index"
           :class="[apppearance === 'Dark' ? 'project-content-dark' : 'project-content-light', 'project-content', project.EXTRACLASS]"
           @click="onClick(project.KEY)">
        <img :src="project.LOGO" alt="Logo" class="project-img"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 0;
  aspect-ratio: 7 / 4;
  max-height: 57.14vw;
}

.rectangle-up {
  grid-row: span 2;
}

.rectangle {
  grid-column: span 2;
}

.big-rectangle {
  grid-column: span 3;
  grid-row: span 2;
}

.square {
  grid-row: span 2;
  grid-column: span 2;
}

.project-content-light {
  background-color: rgba(255, 255, 255, 0.5);
}

.project-content-dark {
  background-color: rgba(0, 0, 0, 0.5);
}

.project-content-light:hover {
  background-color: rgba(255, 255, 255, 0.7);
}

.project-content-dark:hover {
  background-color: rgba(0, 0, 0, 0.7);
}

.project-content:hover {
  transform: scale(1.02);
  transition: transform 0.3s ease;
}

.project-img {
  width: 100%;
  height: 100%;
  cursor: pointer;
}

@media screen and (max-width: 800px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(7, 1fr);
    aspect-ratio: 4 / 7;
    max-height: calc(100vw * 7 / 4);
  }
}

</style>
