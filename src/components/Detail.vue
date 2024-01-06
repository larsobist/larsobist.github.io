<script lang="ts" setup>
import {selectedProject, setSelectedProject} from '@/stores/store';
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Navigation, Pagination, Slide} from 'vue3-carousel'
import CONTENT from '../locales/content.json';

const clearSelection = () => {
  setSelectedProject(null);
};

export type ProjectKey =
    "ZPHERE"
    | "CIRCLEOFLIFE"
    | "TRAVELBUCKET"
    | "BACHELORTHESIS"
    | "CULINO"
    | "USABILITY"
    | "LAGOM"
    | "BUILDAR"
    | "RUNNERSHIGH"
    | "TIMELESSTREASURES"
    | "WEBGAMES"
    | "SAVEATURTLE"
    | "EATABROAD"
    | "ESHOP"
    | "PORTFOLIO"
    | "UPCOMING";

</script>

<template>
  <div v-if="selectedProject" class="displayProject">
    <h2>{{ $t('DETAIL.TITLE') }}</h2>
    <h2>{{ CONTENT.PROJECTS[selectedProject as ProjectKey].TITLE }}</h2>
    {{ $t('PROJECTS.' + selectedProject + '.CATEGORY') }} <br>
    {{ $t('PROJECTS.' + selectedProject + '.DESCRIPTION') }}<br>
    <div class="responsive-row">
      <img v-for="(image, index) in CONTENT.PROJECTS[selectedProject as ProjectKey].TECH" :key="index" :src="image"
           alt="Logo" class="img"/>
    </div>
    {{ CONTENT.PROJECTS[selectedProject as ProjectKey].VIDEOLINK }}<br>
    <div v-if="CONTENT.PROJECTS[selectedProject as ProjectKey].DOCULINK!=''" class="btn">
      <a :href="CONTENT.PROJECTS[selectedProject as ProjectKey].DOCULINK" target="_blank">{{ $t('DETAIL.DOCU') }}</a>
    </div>
    <div v-if="CONTENT.PROJECTS[selectedProject as ProjectKey].GITHUBLINK!=''" class="btn">
      <a :href="CONTENT.PROJECTS[selectedProject as ProjectKey].GITHUBLINK" target="_blank">{{
          $t('DETAIL.GITHUB')
        }}</a>
    </div>
    <div v-if="CONTENT.PROJECTS[selectedProject as ProjectKey].LIVELINK!=''" class="btn">
      <a :href="CONTENT.PROJECTS[selectedProject as ProjectKey].LIVELINK" target="_blank">{{
          $t('DETAIL.LIVEDEMO')
        }}</a>
    </div>
    <div class="btn" @click="clearSelection">{{ $t('DETAIL.CLOSE') }}</div>
    <carousel id="gallery" :autoplay="5000" :items-to-show="1" :wrap-around="true">
      <slide v-for="(image, index) in CONTENT.PROJECTS[selectedProject as ProjectKey].IMG" :key="index" class="slider">
        <img :src="image" alt=" Logo"/>
      </slide>

      <template #addons>
        <navigation/>
        <pagination/>
      </template>
    </carousel>

  </div>
</template>

<style scoped>
.displayProject {
  aspect-ratio: 7 / 4;
  max-height: 57.14vw;
}

.slider {
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