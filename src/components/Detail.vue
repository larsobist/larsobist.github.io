<script setup lang="ts">
import { selectedProject, setSelectedProject } from '@/stores/store';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import CONTENT from '../locales/content.json';

const clearSelection = () => {
  setSelectedProject(null);
};

export type ProjectKey = "ZPHERE" | "CIRCLEOFLIFE" | "TRAVELBUCKET" | "BACHELORTHESIS" | "CULINO" | "USABILITY" | "LAGOM" | "BUILDAR" | "RUNNERSHIGH" | "TIMELESSTREASURES" | "WEBGAMES" | "SAVEATURTLE" | "EATABROAD" | "ESHOP" | "PORTFOLIO" | "UPCOMING";

</script>

<template>
  <div class="displayProject" v-if="selectedProject">
    <h2>{{$t('DETAIL.TITLE')}}</h2>
    <h2>{{ CONTENT.PROJECTS[selectedProject as ProjectKey].TITLE}}</h2>
    {{$t('PROJECTS.'+selectedProject+'.CATEGORY')}} <br>
    {{$t('PROJECTS.'+selectedProject+'.DESCRIPTION')}}<br>
    <div class="responsive-row">
      <img v-for="(image, index) in CONTENT.PROJECTS[selectedProject as ProjectKey].TECH" :key="index" class="img" :src="image" alt="Logo"/>
    </div>
    {{CONTENT.PROJECTS[selectedProject as ProjectKey].VIDEOLINK}}<br>
    <div class="btn" v-if="CONTENT.PROJECTS[selectedProject as ProjectKey].DOCULINK!=''">
      <a :href="CONTENT.PROJECTS[selectedProject as ProjectKey].DOCULINK" target="_blank">{{ $t('DETAIL.DOCU') }}</a>
    </div>
    <div class="btn" v-if="CONTENT.PROJECTS[selectedProject as ProjectKey].GITHUBLINK!=''">
      <a :href="CONTENT.PROJECTS[selectedProject as ProjectKey].GITHUBLINK" target="_blank">{{ $t('DETAIL.GITHUB') }}</a>
    </div>
    <div class="btn" v-if="CONTENT.PROJECTS[selectedProject as ProjectKey].LIVELINK!=''">
      <a :href="CONTENT.PROJECTS[selectedProject as ProjectKey].LIVELINK" target="_blank">{{ $t('DETAIL.LIVEDEMO') }}</a>
    </div>
    <div class="btn" @click="clearSelection">{{$t('DETAIL.CLOSE')}}</div>
    <carousel :items-to-show="1" :wrap-around="true" :autoplay="5000" id="gallery">
      <slide class="slider" v-for="(image, index) in CONTENT.PROJECTS[selectedProject as ProjectKey].IMG" :key="index" >
        <img :src="image" alt=" Logo"/>
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
    height: 300px;
  }

  .responsive-row {
    display: flex;
    flex-direction: row;
  }

  @media screen and (max-width: 800px) {
    .displayProject {
      height: 100vh;
      aspect-ratio: initial;
      max-height: initial;
    }
  }
</style>