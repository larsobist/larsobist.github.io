<script setup lang="ts">
import { selectedProject, setSelectedProject } from '@/stores/store';

const clearSelection = () => {
  setSelectedProject(null);
};
</script>

<template>
  <div class="displayProject border" v-if="selectedProject">
    <h2>{{$t('DETAIL.TITLE')}}</h2>
    <h2>{{ $t('PROJECTS.'+selectedProject+'.TITLE') }}</h2>
    {{$t('PROJECTS.'+selectedProject+'.CATEGORY')}} <br>
    {{$t('PROJECTS.'+selectedProject+'.DESCRIPTION')}}<br>
    {{$t('PROJECTS.'+selectedProject+'.TECH')}}<br>
    {{$t('PROJECTS.'+selectedProject+'.VIDEOLINK')}}<br>
    {{$t('PROJECTS.'+selectedProject+'.IMG')}}<br>
    <button class="btn" v-if="$t('PROJECTS.'+selectedProject+'.DOCULINK')!=''">
      <a :href="$t('PROJECTS.'+selectedProject+'.DOCULINK')" target="_blank">{{ $t('DOCU') }}</a>
    </button>
    <button class="btn" v-if="$t('PROJECTS.'+selectedProject+'.GITHUBLINK')!=''">
      <a :href="$t('PROJECTS.'+selectedProject+'.GITHUBLINK')" target="_blank">{{ $t('GITHUB') }}</a>
    </button>
    <button class="btn" v-if="$t('PROJECTS.'+selectedProject+'.LIVELINK')!=''">
      <a :href="$t('PROJECTS.'+selectedProject+'.LIVELINK')" target="_blank">{{ $t('LIVEDEMO') }}</a>
    </button>
    <button class="btn" @click="clearSelection">{{$t('CLOSE')}}</button>
  </div>


</template>

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