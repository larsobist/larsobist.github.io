<script setup lang="ts">
import {selectedProject} from '@/stores/store';
import {setSelectedProject} from '@/stores/store';

const onClick = (project: string) => {
  setSelectedProject(project);
};
</script>

<template>
  <div>
    <div class="border" v-if="selectedProject == null">
      <h2>{{ $t('Projects') }}</h2>
      <div class="grid">
        <div class="border rectangle-up" @click="onClick('zphere')">{{ $t('zphere') }}</div>
        <div class="border rectangle" @click="onClick('Circle of Life')">{{ $t('Circle-of-Life') }}</div>
        <div class="border " @click="onClick('Mobile Apps')">{{ $t('Mobile-Apps') }}</div>
        <div class="border big-rectangle" @click="onClick('Bachelorarbeit')">{{ $t('Bachelorarbeit') }}</div>
        <div class="border " @click="onClick('Culino')">{{ $t('Culino') }}</div>
        <div class="border rectangle-up" @click="onClick('Usability')">{{ $t('Usability') }}</div>
        <div class="border " @click="onClick('Lagom')">{{ $t('Lagom') }}</div>
        <div class="border " @click="onClick('buildAR')">{{ $t('BuildAR') }}</div>
        <div class="border " @click="onClick('Runners High')">{{ $t('Runners-High') }}</div>
        <div class="border square" @click="onClick('Timeless Treasures')">{{ $t('Timeless-Treasures') }}</div>
        <div class="border " @click="onClick('Web Games')">{{ $t('Web-Games') }}</div>
        <div class="border " @click="onClick('Save a Turtle')">{{ $t('Save-a-Turtle') }}</div>
        <div class="border " @click="onClick('eatabroad')">{{ $t('eatabroad') }}</div>
        <div class="border " @click="onClick('e-shop')">{{ $t('e-shop') }}</div>
        <div class="border " @click="onClick('Portfolio')">{{ $t('Portfolio') }}</div>
        <div class="border rectangle" @click="onClick('Upcoming')">{{ $t('Upcoming') }}</div>
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

.grid div {
  height: 100%;
  padding: 5px;
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
