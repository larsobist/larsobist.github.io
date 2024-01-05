<script setup lang="ts">
import {selectedProject} from '@/stores/store';
import {setSelectedProject} from '@/stores/store';
import CONTENT from "@/locales/content.json";
import {apppearance} from "@/stores/store";

const onClick = (project: string) => {
  setSelectedProject(project);
};
</script>

<template>
    <div class="border" v-if="selectedProject == null">
      <h2>{{ $t('PROJECTS.TITLE') }}</h2>
      <div class="grid">
        <div v-for="(project, index) in CONTENT.PROJECTS" :key="index"
             :class="[apppearance === 'Dark' ? 'content-dark' : 'content-light', 'hover-container', project.EXTRACLASS]"
             @click="onClick(project.KEY)">
          <div class="overlay" :class="[apppearance === 'Dark' ? 'overlay-dark' : 'overlay-light']">
            <img class="skills-img" :src="project.LOGO" alt="Logo"/>
          </div>
          <img class="skills-img" :src="project.LOGO" alt="Logo"/>
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

.hover-container {
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: none;
}

.overlay-light {
  background-color: rgba(255, 255, 255, 0.5);
}

.overlay-dark {
  background-color: rgba(0, 0, 0, 0.5);
}

.hover-container:hover .overlay, .hover-container:active .overlay {
  display: flex;
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
