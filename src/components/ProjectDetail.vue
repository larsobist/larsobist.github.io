<template>

  <div class="displayProject" v-if="selectedProject">
    <h2>{{$t('Project-Detail')}}</h2>
    <h2>{{ selectedProject }}</h2>
    <button class="btn" @click="clearSelection">{{$t('Close')}}</button>
  </div>
</template>

<script setup lang="ts">
import { selectedProject, setSelectedProject } from '@/stores/store';

const clearSelection = () => {
  setSelectedProject(null);
};
</script>

<style scoped>
  .displayProject {
    aspect-ratio: 7 / 4;
    max-height: 57.14vw;
    background-color: yellow;
  }

  @media screen and (max-width: 800px) {
    .displayProject {
      height: 100vh;
      aspect-ratio: initial;
      max-height: initial;
      background-color: #333333;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 999; /* Adjust the z-index as needed */
    }
  }
</style>