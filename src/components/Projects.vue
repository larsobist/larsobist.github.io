<template>
  <div>
    <div v-if="selectedProject == null">
      <h2>{{$t('Projects')}}</h2>
      <div class="grid">
        <div class="rectangle-up" @click="onClick('zphere')">{{$t('zphere')}}</div>
        <div class="rectangle" @click="onClick('Circle of Life')">{{$t('Circle-of-Life')}}</div>
        <div class="" @click="onClick('Mobile Apps')">{{$t('Mobile Apps')}}</div>
        <div class="big-rectangle" @click="onClick('Bachelorarbeit')">{{$t('Bachelorarbeit')}}</div>
        <div class="" @click="onClick('Culino')">{{$t('Culino')}}</div>
        <div class="rectangle-up" @click="onClick('Usability')">{{$t('Usability')}}</div>
        <div class="" @click="onClick('Lagom')">{{$t('Lagom')}}</div>
        <div class="" @click="onClick('buildAR')">{{$t('BuildAR')}}</div>
        <div class="" @click="onClick('Runners High')">{{$t('Runners-High')}}</div>
        <div class="square" @click="onClick('Timeless Treasures')">{{$t('Timeless-Treasures')}}</div>
        <div class="" @click="onClick('Web Games')">{{$t('Web-Games')}}</div>
        <div class="" @click="onClick('Save a Turtle')">{{$t('Save-a-Turtle')}}</div>
        <div class="" @click="onClick('eatabroad')">{{$t('eatabroad')}}</div>
        <div class="" @click="onClick('e-shop')">{{$t('e-shop')}}</div>
        <div class="" @click="onClick('Portfolio')">{{$t('Portfolio')}}</div>
        <div class="rectangle" @click="onClick('Upcoming')">{{$t('Upcoming')}}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {selectedProject} from '@/stores/store';
import {setSelectedProject} from '@/stores/store';

const onClick = (project: string) => {
  setSelectedProject(project);
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 0;
  aspect-ratio: 7 / 4;
  max-height: 57.14vw;
}

.grid div {
  background: green;
  height: 100%;
  border-style: solid;
  border-width: 1px;
  padding: 5px;
}

.grid .rectangle-up {
  grid-row: span 2;
  background-color: red;
}

.grid .rectangle {
  grid-column: span 2;
  background-color: aqua;
}

.grid .big-rectangle {
  grid-column: span 3;
  grid-row: span 2;
  background-color: orange;
}

.grid .square {
  grid-row: span 2;
  grid-column: span 2;
  background-color: purple;

}

@media screen and (max-width: 800px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(7, 1fr);
    aspect-ratio: 4 / 7;
    max-height: calc(100vw * 7 / 4);
    background-color: #333333;
  }
}

</style>
