<script setup lang="ts">
import {selectedProject} from '@/stores/store';
import {setSelectedProject} from '@/stores/store';
import CONTENT from "@/locales/content.json";

const onClick = (project: string) => {
  setSelectedProject(project);
};
</script>

<template>
    <div class="border" v-if="selectedProject == null">
      <h2>{{ $t('PROJECTS.TITLE') }}</h2>
      <div class="grid">
        <div class="element rectangle-up" @click="onClick('ZPHERE')"><img class="img" :src="CONTENT.PROJECTS.ZPHERE.LOGO" alt=" Logo"/></div>
        <div class="element rectangle" @click="onClick('CIRCLEOFLIFE')"><img class="img" :src="CONTENT.PROJECTS.CIRCLEOFLIFE.LOGO" alt=" Logo"/></div>
        <div class="element " @click="onClick('TRAVELBUCKET')"><img class="img" :src="CONTENT.PROJECTS.TRAVELBUCKET.LOGO" alt= " Logo"/></div>
        <div class="element big-rectangle" @click="onClick('BACHELORTHESIS')"><img class="img" :src="CONTENT.PROJECTS.BACHELORTHESIS.LOGO" alt= " Logo"/></div>
        <div class="element " @click="onClick('CULINO')"><img class="img" :src="CONTENT.PROJECTS.CULINO.LOGO" alt= " Logo"/></div>
        <div class="element rectangle-up" @click="onClick('USABILITY')"> <img class="img" :src="CONTENT.PROJECTS.USABILITY.LOGO" alt= " Logo"/></div>
        <div class="element " @click="onClick('LAGOM')"> <img class="img" :src="CONTENT.PROJECTS.LAGOM.LOGO" alt= " Logo"/></div>
        <div class="element " @click="onClick('BUILDAR')"> <img class="img" :src="CONTENT.PROJECTS.BUILDAR.LOGO" alt= " Logo"/></div>
        <div class="element " @click="onClick('RUNNERSHIGH')"><img class="img" :src="CONTENT.PROJECTS.RUNNERSHIGH.LOGO" alt= " Logo"/></div>
        <div class="element square" @click="onClick('TIMELESSTREASURES')"><img class="img" :src="CONTENT.PROJECTS.TIMELESSTREASURES.LOGO" alt= " Logo"/></div>
        <div class="element " @click="onClick('WEBGAMES')"><img class="img" :src="CONTENT.PROJECTS.WEBGAMES.LOGO" alt= " Logo"/></div>
        <div class="element " @click="onClick('SAVEATURTLE')"> <img class="img" :src="CONTENT.PROJECTS.SAVEATURTLE.LOGO" alt= " Logo"/></div>
        <div class="element " @click="onClick('EATABROAD')"> <img class="img" :src="CONTENT.PROJECTS.EATABROAD.LOGO" alt= " Logo"/></div>
        <div class="element " @click="onClick('ESHOP')"> <img class="img" :src="CONTENT.PROJECTS.ESHOP.LOGO" alt= " Logo"/></div>
        <div class="element " @click="onClick('PORTFOLIO')"> <img class="img" :src="CONTENT.PROJECTS.PORTFOLIO.LOGO" alt= " Logo"/></div>
        <div class="element rectangle" @click="onClick('UPCOMING')"><img class="img" :src="CONTENT.PROJECTS.UPCOMING.LOGO" alt= " Logo"/></div>
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
