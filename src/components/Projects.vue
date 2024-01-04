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
        <div :class="apppearance === 'Dark' ? 'content-dark' : 'content-light'" class="rectangle-up" @click="onClick('ZPHERE')"><img class="skills-img" :src="CONTENT.PROJECTS.ZPHERE.LOGO" alt=" Logo"/></div>
        <div :class="apppearance === 'Dark' ? 'content-dark' : 'content-light'" class="rectangle" @click="onClick('CIRCLEOFLIFE')"><img class="skills-img" :src="CONTENT.PROJECTS.CIRCLEOFLIFE.LOGO" alt=" Logo"/></div>
        <div :class="apppearance === 'Dark' ? 'content-dark' : 'content-light'" @click="onClick('TRAVELBUCKET')"><img class="skills-img" :src="CONTENT.PROJECTS.TRAVELBUCKET.LOGO" alt= " Logo"/></div>
        <div :class="apppearance === 'Dark' ? 'content-dark' : 'content-light'" class="big-rectangle" @click="onClick('BACHELORTHESIS')"><img class="skills-img" :src="CONTENT.PROJECTS.BACHELORTHESIS.LOGO" alt= " Logo"/></div>
        <div :class="apppearance === 'Dark' ? 'content-dark' : 'content-light'" @click="onClick('CULINO')"><img class="skills-img" :src="CONTENT.PROJECTS.CULINO.LOGO" alt= " Logo"/></div>
        <div :class="apppearance === 'Dark' ? 'content-dark' : 'content-light'" class="rectangle-up" @click="onClick('USABILITY')"> <img class="skills-img" :src="CONTENT.PROJECTS.USABILITY.LOGO" alt= " Logo"/></div>
        <div :class="apppearance === 'Dark' ? 'content-dark' : 'content-light'" @click="onClick('LAGOM')"> <img class="skills-img" :src="CONTENT.PROJECTS.LAGOM.LOGO" alt= " Logo"/></div>
        <div :class="apppearance === 'Dark' ? 'content-dark' : 'content-light'" @click="onClick('BUILDAR')"> <img class="skills-img" :src="CONTENT.PROJECTS.BUILDAR.LOGO" alt= " Logo"/></div>
        <div :class="apppearance === 'Dark' ? 'content-dark' : 'content-light'" @click="onClick('RUNNERSHIGH')"><img class="skills-img" :src="CONTENT.PROJECTS.RUNNERSHIGH.LOGO" alt= " Logo"/></div>
        <div :class="apppearance === 'Dark' ? 'content-dark' : 'content-light'" class="square" @click="onClick('TIMELESSTREASURES')"><img class="skills-img" :src="CONTENT.PROJECTS.TIMELESSTREASURES.LOGO" alt= " Logo"/></div>
        <div :class="apppearance === 'Dark' ? 'content-dark' : 'content-light'" @click="onClick('WEBGAMES')"><img class="skills-img" :src="CONTENT.PROJECTS.WEBGAMES.LOGO" alt= " Logo"/></div>
        <div :class="apppearance === 'Dark' ? 'content-dark' : 'content-light'" @click="onClick('SAVEATURTLE')"> <img class="skills-img" :src="CONTENT.PROJECTS.SAVEATURTLE.LOGO" alt= " Logo"/></div>
        <div :class="apppearance === 'Dark' ? 'content-dark' : 'content-light'" @click="onClick('EATABROAD')"> <img class="skills-img" :src="CONTENT.PROJECTS.EATABROAD.LOGO" alt= " Logo"/></div>
        <div :class="apppearance === 'Dark' ? 'content-dark' : 'content-light'" @click="onClick('ESHOP')"> <img class="skills-img" :src="CONTENT.PROJECTS.ESHOP.LOGO" alt= " Logo"/></div>
        <div :class="apppearance === 'Dark' ? 'content-dark' : 'content-light'" @click="onClick('PORTFOLIO')"> <img class="skills-img" :src="CONTENT.PROJECTS.PORTFOLIO.LOGO" alt= " Logo"/></div>
        <div :class="apppearance === 'Dark' ? 'content-dark' : 'content-light'" class=" rectangle" @click="onClick('UPCOMING')"><img class="skills-img" :src="CONTENT.PROJECTS.UPCOMING.LOGO" alt= " Logo"/></div>
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

.grid .rectangle-up {
  grid-row: span 2;
}

.grid .rectangle {
  grid-column: span 2;
}

.grid .big-rectangle {
  grid-column: span 3;
  grid-row: span 2;
}

.grid .square {
  grid-row: span 2;
  grid-column: span 2;
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
