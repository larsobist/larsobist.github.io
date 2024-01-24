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

    <div class="full-width">

      <div :class="[getAppearanceClass(), 'detail-title']">
        <h3>{{ CONTENT.PROJECTS[selectedProject as ProjectKey].TITLE }}</h3>
        {{ $t('PROJECTS.' + selectedProject + '.CATEGORY') }}
      </div>


      <div :class="[appearance === 'Dark' ? 'button-dark' : 'button-light', 'close-button']" @click="clearSelection">
        {{ $t('DETAIL.CLOSE') }}
        <img :src="appearance === 'Dark' ? CONTENT.CLOSELIGHT : CONTENT.CLOSEDARK" alt="Lightode" class="close-img"/>
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
        <img v-for="(image, index) in CONTENT.PROJECTS[selectedProject as ProjectKey].TECH" :key="index"
             :class="[getAppearanceClass(), 'tools-img']" :src="image" alt="Logo"/>
      </div>
      <div class="buttons">
        <div v-if="CONTENT.PROJECTS[selectedProject as ProjectKey].VIDEOLINK!=''"
             :class="[appearance === 'Dark' ? 'button-dark' : 'button-light', 'button']">
          <a :href="CONTENT.PROJECTS[selectedProject as ProjectKey].VIDEOLINK" target="_blank">{{
              $t('DETAIL.VIDEO')
            }}</a>
        </div>
        <div v-if="CONTENT.PROJECTS[selectedProject as ProjectKey].DOCULINK!=''"
             :class="[appearance === 'Dark' ? 'button-dark' : 'button-light', 'button']">
          <a :href="CONTENT.PROJECTS[selectedProject as ProjectKey].DOCULINK" target="_blank">{{
              $t('DETAIL.DOCU')
            }}</a>
        </div>
        <div v-if="CONTENT.PROJECTS[selectedProject as ProjectKey].GITHUBLINK!=''"
             :class="[appearance === 'Dark' ? 'button-dark' : 'button-light', 'button']">
          <a :href="CONTENT.PROJECTS[selectedProject as ProjectKey].GITHUBLINK" target="_blank">{{
              $t('DETAIL.GITHUB')
            }}</a>
        </div>
        <div v-if="CONTENT.PROJECTS[selectedProject as ProjectKey].LIVELINK!=''"
             :class="[appearance === 'Dark' ? 'button-dark' : 'button-light', 'button']">
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
  display: flex;
  padding: 5px;
}

.detail-title {
  margin-right: 10px;
  width: 100%;
  padding-left: 5px;
}

.close-button {
  width: 150px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px;
}

.close-button-light {
  background-color: rgba(255, 255, 255, 0.4);
}

.close-button-dark {
  background-color: rgba(0, 0, 0, 0.4);
}

.close-button-light:hover {
  background-color: rgba(255, 255, 255, 0.7);
}

.close-button-dark:hover {
  background-color: rgba(0, 0, 0, 0.7);
}

.close-button:hover {
  transform: scale(1.02);
  transition: transform 0.3s ease;
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

.tools-img {
  margin-right: 10px;
  height: 75px;
}

.buttons {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-right: -10px;
}

.button {
  margin-right: 10px;
  width: 100%;
  cursor: pointer;
}

.button-light {
  background-color: rgba(255, 255, 255, 0.4);
}

.button-dark {
  background-color: rgba(0, 0, 0, 0.4);
}

.button-light:hover {
  background-color: rgba(255, 255, 255, 0.7);
}

.button-dark:hover {
  background-color: rgba(0, 0, 0, 0.7);
}

.button:hover {
  transform: scale(1.02);
  transition: transform 0.3s ease;
}

.button a {
  color: unset;
  text-decoration: none;
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