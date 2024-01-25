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
    | "MOBILEAPPS"
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
    | "SYNCSPORTS"
    | "MASTERTHESIS";
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
        <div class="button-content">
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
        <img v-for="(image, index) in CONTENT.PROJECTS[selectedProject as ProjectKey].TECH" :key="index"
             :class="[getAppearanceClass(), 'tools-img']" :src="image" alt="Logo"/>
      </div>
      <div class="buttons">
        <a :href="CONTENT.PROJECTS[selectedProject as ProjectKey].VIDEOLINK" target="_blank"
           v-if="CONTENT.PROJECTS[selectedProject as ProjectKey].VIDEOLINK!=''"
           :class="[appearance === 'Dark' ? 'button-dark' : 'button-light', 'button']">
          <div class="button-content">
            <img :src="appearance === 'Dark' ? CONTENT.DETAIL.VIDEOLIGHT : CONTENT.DETAIL.VIDEODARK" alt=""
                 class="links-img"/>
            <span>{{ $t('DETAIL.VIDEO') }}</span>
          </div>
        </a>
        <a :href="CONTENT.PROJECTS[selectedProject as ProjectKey].DOCULINK" target="_blank"
           v-if="CONTENT.PROJECTS[selectedProject as ProjectKey].DOCULINK!=''"
           :class="[appearance === 'Dark' ? 'button-dark' : 'button-light', 'button']">
          <div class="button-content">
            <img :src="appearance === 'Dark' ? CONTENT.DETAIL.DOCULIGHT : CONTENT.DETAIL.DOCUDARK" alt=""
                 class="links-img"/>
            <span> {{
                (selectedProject === 'BACHELORTHESIS' ? ($t('DETAIL.THESIS')) : ($t('DETAIL.DOCU')))
              }}</span>
          </div>
        </a>
        <a :href="CONTENT.PROJECTS[selectedProject as ProjectKey].PRESENTATION" target="_blank"
           v-if="CONTENT.PROJECTS[selectedProject as ProjectKey].PRESENTATION!=''"
           :class="[appearance === 'Dark' ? 'button-dark' : 'button-light', 'button']">
          <div class="button-content">
            <img :src="appearance === 'Dark' ? CONTENT.DETAIL.PRESENTATIONLIGHT : CONTENT.DETAIL.PRESENTATIONDARK" alt="Lightode"
                 class="links-img"/>
            <span> {{
                (selectedProject === 'BACHELORTHESIS' ? ($t('DETAIL.COLLOQUIUM')) : ($t('DETAIL.PRESENTATION')))
              }}</span>
          </div>
        </a>
        <a :href="CONTENT.PROJECTS[selectedProject as ProjectKey].XDLINK" target="_blank"
           v-if="CONTENT.PROJECTS[selectedProject as ProjectKey].XDLINK!=''"
           :class="[appearance === 'Dark' ? 'button-dark' : 'button-light', 'button']">
          <div class="button-content">
            <img :src="appearance === 'Dark' ? CONTENT.DETAIL.VIEWLIGHT : CONTENT.DETAIL.VIEWDARK" alt=""
                 class="links-img"/>
            <span> {{
                $t('DETAIL.XD')
              }}</span>
          </div>
        </a>
        <a :href="CONTENT.PROJECTS[selectedProject as ProjectKey].GITHUBLINK1" target="_blank"
           v-if="CONTENT.PROJECTS[selectedProject as ProjectKey].GITHUBLINK1!=''"
           :class="[appearance === 'Dark' ? 'button-dark' : 'button-light', 'button']">
          <div class="button-content">
            <img :src="appearance === 'Dark' ? CONTENT.DETAIL.CODELIGHT : CONTENT.DETAIL.CODEDARK" alt=""
                 class="links-img"/>
            <span> {{
                (selectedProject === 'WEBGAMES' ? ($t('DETAIL.LASTMINUTEGITHUB')) : ($t('DETAIL.GITHUB')))
              }}</span>
          </div>
        </a>
        <a :href="CONTENT.PROJECTS[selectedProject as ProjectKey].LIVELINK1" target="_blank"
           v-if="CONTENT.PROJECTS[selectedProject as ProjectKey].LIVELINK1!=''"
           :class="[appearance === 'Dark' ? 'button-dark' : 'button-light', 'button']">
          <div class="button-content">
            <img :src="appearance === 'Dark' ? CONTENT.DETAIL.VIEWLIGHT : CONTENT.DETAIL.VIEWDARK" alt=""
                 class="links-img"/>
            <span> {{
                (selectedProject === 'WEBGAMES' ? ($t('DETAIL.LASTMINUTELIVEDEMO')) : ($t('DETAIL.LIVEDEMO')))
              }}</span>
          </div>
        </a>
        <a :href="CONTENT.PROJECTS[selectedProject as ProjectKey].GITHUBLINK2" target="_blank"
           v-if="CONTENT.PROJECTS[selectedProject as ProjectKey].GITHUBLINK2!=''"
           :class="[appearance === 'Dark' ? 'button-dark' : 'button-light', 'button']">
          <div class="button-content">
            <img :src="appearance === 'Dark' ? CONTENT.DETAIL.CODELIGHT : CONTENT.DETAIL.CODEDARK" alt=""
                 class="links-img"/>
            <span> {{
                (selectedProject === 'WEBGAMES' ? ($t('DETAIL.THROWBACKGITHUB')) : ($t('DETAIL.GITHUB')))
              }}</span>
          </div>
        </a>
        <a :href="CONTENT.PROJECTS[selectedProject as ProjectKey].LIVELINK2" target="_blank"
           v-if="CONTENT.PROJECTS[selectedProject as ProjectKey].LIVELINK2!=''"
           :class="[appearance === 'Dark' ? 'button-dark' : 'button-light', 'button']">
          <div class="button-content">
            <img :src="appearance === 'Dark' ? CONTENT.DETAIL.VIEWLIGHT : CONTENT.DETAIL.VIEWDARK" alt=""
                 class="links-img"/>
            <span> {{
                (selectedProject === 'WEBGAMES' ? ($t('DETAIL.THROWBACKLIVEDEMO')) : ($t('DETAIL.LIVEDEMO')))
              }}</span>
          </div>
        </a>
      </div>

    </div>

  </div>
</template>

<style scoped>

.displayProject {
  overflow-x: hidden;
}

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
  width: 200px;
  display: flex;
  cursor: pointer;
}

.button-content {
  display: flex;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
}

.close-button-light, .button-light {
  background-color: rgba(255, 255, 255, 0.5);
}

.close-button-dark, .button-dark {
  background-color: rgba(0, 0, 0, 0.5);
}

.close-button-light:hover, .button-light:hover {
  background-color: rgba(255, 255, 255, 0.7);
}

.close-button-dark:hover, .button-dark:hover {
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

.links-img {
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
  min-width: 170px;
}

@media (max-width: 1050px) {
  .used-tools {
    max-width: 170px;
    flex-wrap: wrap; 
  }
}

.tools-img {
  margin-right: 10px;
  margin-bottom: 10px;
  height: 75px;
}

.buttons {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-right: -10px;
  margin-bottom: 10px;
}

.button {
  margin-right: 10px;
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 5px;
  padding-right: 10px;
}

.button:hover {
  transform: scale(1.02);
  transition: transform 0.3s ease;
}

a {
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