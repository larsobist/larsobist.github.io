<script setup lang="ts">
import {selectedProject} from '@/stores/store';
import {setSelectedProject} from '@/stores/store';

const onClick = (project: string) => {
  setSelectedProject(project);
};
</script>

<template>
    <div class="border" v-if="selectedProject == null">
      <h2>{{ $t('PROJECTS.TITLE') }}</h2>
      <div class="grid">
        <div class="border rectangle-up" @click="onClick('ZPHERE')">{{ $t('PROJECTS.ZPHERE.TITLE') }}</div>
        <div class="border rectangle" @click="onClick('CIRCLEOFLIFE')">{{ $t('PROJECTS.CIRCLEOFLIFE.TITLE') }}</div>
        <div class="border " @click="onClick('MOBILEAPPS')">{{ $t('PROJECTS.MOBILEAPPS.TITLE') }}</div>
        <div class="border big-rectangle" @click="onClick('BACHELORTHESIS')">{{ $t('PROJECTS.BACHELORTHESIS.TITLE') }}</div>
        <div class="border " @click="onClick('CULINO')">{{ $t('PROJECTS.CULINO.TITLE') }}</div>
        <div class="border rectangle-up" @click="onClick('USABILITY')">{{ $t('PROJECTS.USABILITY.TITLE') }}</div>
        <div class="border " @click="onClick('LAGOM')">{{ $t('PROJECTS.LAGOM.TITLE') }}</div>
        <div class="border " @click="onClick('BUILDAR')">{{ $t('PROJECTS.BUILDAR.TITLE') }}</div>
        <div class="border " @click="onClick('RUNNERSHIGH')">{{ $t('PROJECTS.RUNNERSHIGH.TITLE') }}</div>
        <div class="border square" @click="onClick('TIMELESSTREASURES')">{{ $t('PROJECTS.TIMELESSTREASURES.TITLE') }}</div>
        <div class="border " @click="onClick('WEBGAMES')">{{ $t('PROJECTS.WEBGAMES.TITLE') }}</div>
        <div class="border " @click="onClick('SAVEATURTLE')">{{ $t('PROJECTS.SAVEATURTLE.TITLE') }}</div>
        <div class="border " @click="onClick('EATABROAD')">{{ $t('PROJECTS.EATABROAD.TITLE') }}</div>
        <div class="border " @click="onClick('ESHOP')">{{ $t('PROJECTS.ESHOP.TITLE') }}</div>
        <div class="border " @click="onClick('PORTFOLIO')">{{ $t('PROJECTS.PORTFOLIO.TITLE') }}</div>
        <div class="border rectangle" @click="onClick('UPCOMING')">{{ $t('PROJECTS.UPCOMING.TITLE') }}</div>
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
