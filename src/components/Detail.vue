<script setup lang="ts">
import { selectedProject, setSelectedProject } from '@/stores/store';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import CONTENT from '../locales/content.json';

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
    <p v-for="(image, index) in CONTENT.PROJECTS[selectedProject].TECH" :key="index">
      <img class="img" :src="image" alt="Logo"/>
    </p>

    {{CONTENT.PROJECTS[selectedProject].VIDEOLINK}}<br>
    <div class="btn" v-if="CONTENT.PROJECTS[selectedProject].DOCULINK!=''">
      <a :href="CONTENT.PROJECTS[selectedProject].DOCULINK" target="_blank">{{ $t('DETAIL.DOCU') }}</a>
    </div>
    <div class="btn" v-if="CONTENT.PROJECTS[selectedProject].GITHUBLINK!=''">
      <a :href="CONTENT.PROJECTS[selectedProject].GITHUBLINK" target="_blank">{{ $t('DETAIL.GITHUB') }}</a>
    </div>
    <div class="btn" v-if="CONTENT.PROJECTS[selectedProject].LIVELINK!=''">
      <a :href="CONTENT.PROJECTS[selectedProject].LIVELINK" target="_blank">{{ $t('DETAIL.LIVEDEMO') }}</a>
    </div>
    <div class="btn" @click="clearSelection">{{$t('DETAIL.CLOSE')}}</div>
    <carousel :items-to-show="1">
      <slide class="slider" v-for="(image, index) in CONTENT.PROJECTS[selectedProject].IMG" :key="index">
        {{ image }}
        <img class="img" :src="image" alt="Logo"/>
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<style scoped>
  .displayProject {
    aspect-ratio: 7 / 4;
    max-height: 57.14vw;
  }

  .slider{
    background-color: gray;
    height: 100px;
  }

  @media screen and (max-width: 800px) {
    .displayProject {
      height: 100vh;
      aspect-ratio: initial;
      max-height: initial;
    }
  }
</style>