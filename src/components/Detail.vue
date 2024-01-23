<script lang="ts" setup>
import {appearance, selectedProject, setSelectedProject} from '@/stores/store';
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Navigation, Pagination, Slide} from 'vue3-carousel'
import CONTENT from '../locales/content.json';

const clearSelection = () => {
  setSelectedProject(null);
};

const getAppearanceClass = () => (appearance.value === 'Dark' ? 'content-dark' : 'content-light');

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
    <div class="grid">
      <div :class="[getAppearanceClass(), 'full-width']">
        <div>
          <h3>{{ CONTENT.PROJECTS[selectedProject as ProjectKey].TITLE }}</h3>
          {{ $t('PROJECTS.' + selectedProject + '.CATEGORY') }}
        </div>
        <div class="close-button" @click="clearSelection">
          {{ $t('DETAIL.CLOSE') }}
          <img :src="appearance === 'Dark' ? CONTENT.CLOSELIGHT : CONTENT.CLOSEDARK" alt="Lightode" class="close-img"/>
        </div>
      </div>
    </div>

    <div class="grid">
      <div :class="[getAppearanceClass(), 'smaller']">
        <div class="text">
          {{ $t('PROJECTS.' + selectedProject + '.DESCRIPTION') }}<br>
        </div>
      </div>
      <div :class="[getAppearanceClass(), 'bigger']">
        <carousel id="gallery" :autoplay="5000" :items-to-show="1" :wrap-around="true">
          <slide v-for="(image, index) in CONTENT.PROJECTS[selectedProject as ProjectKey].IMG" :key="index"
                 class="slider">
            <img :src="image" alt=" Logo" class="slider-img"/>
          </slide>
          <template #addons>
            <navigation/>
            <pagination/>
          </template>
        </carousel>
      </div>
    </div>

    <div class="full-width">
        <div class="used-tools">

          <img v-for="(image, index) in CONTENT.PROJECTS[selectedProject as ProjectKey].TECH" :key="index" :src="image"
               alt="Logo" :class="[getAppearanceClass(), 'tools-img']"/>
        </div>

      <div class="buttons">
      <div v-if="CONTENT.PROJECTS[selectedProject as ProjectKey].VIDEOLINK!=''" :class="[getAppearanceClass()]">
        <a :href="CONTENT.PROJECTS[selectedProject as ProjectKey].VIDEOLINK" target="_blank">{{
            $t('DETAIL.VIDEO')
          }}</a>
      </div>
      <div v-if="CONTENT.PROJECTS[selectedProject as ProjectKey].DOCULINK!=''" :class="[getAppearanceClass()]">
        <a :href="CONTENT.PROJECTS[selectedProject as ProjectKey].DOCULINK" target="_blank">{{
            $t('DETAIL.DOCU')
          }}</a>
      </div>
      <div v-if="CONTENT.PROJECTS[selectedProject as ProjectKey].GITHUBLINK!=''" :class="[getAppearanceClass()]">
        <a :href="CONTENT.PROJECTS[selectedProject as ProjectKey].GITHUBLINK" target="_blank">{{
            $t('DETAIL.GITHUB')
          }}</a>
      </div>
      <div v-if="CONTENT.PROJECTS[selectedProject as ProjectKey].LIVELINK!=''" :class="[getAppearanceClass()]">
        <a :href="CONTENT.PROJECTS[selectedProject as ProjectKey].LIVELINK" target="_blank">{{
            $t('DETAIL.LIVEDEMO')
          }}</a>
      </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(1, 1fr);
}

.smaller {
  grid-column: span 3;
}

.bigger {
  grid-column: span 4;
}

.full-width {
  grid-column: span 7;
  display: flex;
  justify-content: space-between;
  padding: 5px;
}

.close-button {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.close-img {
  height: 40px;
  cursor: pointer;
}

.slider {
  width: 100%;
}

.slider-img {
  width: 100%;
}

.used-tools {
  display: flex;
  flex-direction: row;
}

.tools-img{
  margin-right: 10px;
  height: 75px;
}

@media screen and (max-width: 800px) {
  .displayProject {
    aspect-ratio: initial;
    max-height: initial;
  }

  .grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .smaller, .bigger {
    grid-column: span 2;
  }
}

@media screen and (max-width: 800px) {
  .grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>