<template>
  <div class="displayProject border" v-if="selectedProject">
    <h2>{{$t('DETAIL.TITLE')}}</h2>
    <h2>{{ $t('PROJECTS.'+selectedProject+'.TITLE') }}</h2>
    {{$t('PROJECTS.'+selectedProject+'.CATEGORY')}} <br>
    {{$t('PROJECTS.'+selectedProject+'.DESCRIPTION')}}<br>
    {{$t('PROJECTS.'+selectedProject+'.TECH')}}<br>
    {{$t('PROJECTS.'+selectedProject+'.VIDEO')}}<br>
    {{$t('PROJECTS.'+selectedProject+'.IMG')}}<br>
    {{$t('PROJECTS.'+selectedProject+'.DOCU')}}<br>
    {{$t('PROJECTS.'+selectedProject+'.GITHUB')}}<br>
    {{$t('PROJECTS.'+selectedProject+'.LIVE')}}<br>
    {{$t('PROJECTS.'+selectedProject+'.FIGMA')}}<br>
    <button class="btn" @click="clearSelection">{{$t('CLOSE')}}</button>
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