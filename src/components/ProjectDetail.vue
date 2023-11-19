<template>

  <div class="displayProject border" v-if="selectedProject">
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
  }

  @media screen and (max-width: 800px) {
    .displayProject {
      height: 100vh;
      aspect-ratio: initial;
      max-height: initial;
    }
  }
</style>