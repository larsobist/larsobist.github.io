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

    <div class="detail-content flex-container">
      <div :class="[getAppearanceClass(), 'smaller']">
        <div class="text">
          {{ $t('PROJECTS.' + selectedProject + '.DESCRIPTION') }}<br>
        </div>
      </div>
      <div :class="[getAppearanceClass(), 'bigger']">
        <Carousel :autoplay="5000" :items-to-show="1" :wrap-around="true">
          <Slide v-for="(image, index) in CONTENT.PROJECTS[selectedProject as ProjectKey].IMG" :key="index">
            <img :src="image" alt=" Logo" class="carousel__item"/>
          </Slide>
          <template #addons>
            <navigation/>
            <Pagination/>
          </template>
        </Carousel>
      </div>
    </div>

    <div class="full-width">
      <div class="used-tools">
        <img v-for="(image, index) in CONTENT.PROJECTS[selectedProject as ProjectKey].TECH" :key="index"
             :class="[getAppearanceClass(), 'tools-img']" :src="image" alt="Project Image"/>
      </div>
      <div class="buttons">
        <a v-if="CONTENT.PROJECTS[selectedProject as ProjectKey].VIDEOLINK!=''" :class="[appearance === 'Dark' ? 'button-dark' : 'button-light', 'button']"
           :href="CONTENT.PROJECTS[selectedProject as ProjectKey].VIDEOLINK"
           target="_blank">
          <div class="button-content">
            <img :src="appearance === 'Dark' ? CONTENT.DETAIL.VIDEOLIGHT : CONTENT.DETAIL.VIDEODARK" alt=""
                 class="links-img"/>
            <span>{{ $t('DETAIL.VIDEO') }}</span>
          </div>
        </a>
        <a v-if="CONTENT.PROJECTS[selectedProject as ProjectKey].DOCULINK!=''" :class="[appearance === 'Dark' ? 'button-dark' : 'button-light', 'button']"
           :href="CONTENT.PROJECTS[selectedProject as ProjectKey].DOCULINK"
           target="_blank">
          <div class="button-content">
            <img :src="appearance === 'Dark' ? CONTENT.DETAIL.DOCULIGHT : CONTENT.DETAIL.DOCUDARK" alt=""
                 class="links-img"/>
            <span> {{
                (selectedProject === 'BACHELORTHESIS' ? ($t('DETAIL.THESIS')) : ($t('DETAIL.DOCU')))
              }}</span>
          </div>
        </a>
        <a v-if="CONTENT.PROJECTS[selectedProject as ProjectKey].PRESENTATION!=''" :class="[appearance === 'Dark' ? 'button-dark' : 'button-light', 'button']"
           :href="CONTENT.PROJECTS[selectedProject as ProjectKey].PRESENTATION"
           target="_blank">
          <div class="button-content">
            <img :src="appearance === 'Dark' ? CONTENT.DETAIL.PRESENTATIONLIGHT : CONTENT.DETAIL.PRESENTATIONDARK"
                 alt="Lightode"
                 class="links-img"/>
            <span> {{
                (selectedProject === 'BACHELORTHESIS' ? ($t('DETAIL.COLLOQUIUM')) : ($t('DETAIL.PRESENTATION')))
              }}</span>
          </div>
        </a>
        <a v-if="CONTENT.PROJECTS[selectedProject as ProjectKey].XDLINK!=''" :class="[appearance === 'Dark' ? 'button-dark' : 'button-light', 'button']"
           :href="CONTENT.PROJECTS[selectedProject as ProjectKey].XDLINK"
           target="_blank">
          <div class="button-content">
            <img :src="appearance === 'Dark' ? CONTENT.DETAIL.VIEWLIGHT : CONTENT.DETAIL.VIEWDARK" alt=""
                 class="links-img"/>
            <span> {{
                $t('DETAIL.XD')
              }}</span>
          </div>
        </a>
        <a v-if="CONTENT.PROJECTS[selectedProject as ProjectKey].GITHUBLINK1!=''" :class="[appearance === 'Dark' ? 'button-dark' : 'button-light', 'button']"
           :href="CONTENT.PROJECTS[selectedProject as ProjectKey].GITHUBLINK1"
           target="_blank">
          <div class="button-content">
            <img :src="appearance === 'Dark' ? CONTENT.DETAIL.CODELIGHT : CONTENT.DETAIL.CODEDARK" alt=""
                 class="links-img"/>
            <span> {{
                (selectedProject === 'WEBGAMES' ? ($t('DETAIL.LASTMINUTEGITHUB')) : ($t('DETAIL.GITHUB')))
              }}</span>
          </div>
        </a>
        <a v-if="CONTENT.PROJECTS[selectedProject as ProjectKey].LIVELINK1!=''" :class="[appearance === 'Dark' ? 'button-dark' : 'button-light', 'button']"
           :href="CONTENT.PROJECTS[selectedProject as ProjectKey].LIVELINK1"
           target="_blank">
          <div class="button-content">
            <img :src="appearance === 'Dark' ? CONTENT.DETAIL.VIEWLIGHT : CONTENT.DETAIL.VIEWDARK" alt=""
                 class="links-img"/>
            <span> {{
                (selectedProject === 'WEBGAMES' ? ($t('DETAIL.LASTMINUTELIVEDEMO')) : ($t('DETAIL.LIVEDEMO')))
              }}</span>
          </div>
        </a>
        <a v-if="CONTENT.PROJECTS[selectedProject as ProjectKey].GITHUBLINK2!=''" :class="[appearance === 'Dark' ? 'button-dark' : 'button-light', 'button']"
           :href="CONTENT.PROJECTS[selectedProject as ProjectKey].GITHUBLINK2"
           target="_blank">
          <div class="button-content">
            <img :src="appearance === 'Dark' ? CONTENT.DETAIL.CODELIGHT : CONTENT.DETAIL.CODEDARK" alt=""
                 class="links-img"/>
            <span> {{
                (selectedProject === 'WEBGAMES' ? ($t('DETAIL.THROWBACKGITHUB')) : ($t('DETAIL.GITHUB')))
              }}</span>
          </div>
        </a>
        <a v-if="CONTENT.PROJECTS[selectedProject as ProjectKey].LIVELINK2!=''" :class="[appearance === 'Dark' ? 'button-dark' : 'button-light', 'button']"
           :href="CONTENT.PROJECTS[selectedProject as ProjectKey].LIVELINK2"
           target="_blank">
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

.flex-container {
  display: flex;
  flex-wrap: wrap;
}

.carousel__item {
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

.displayProject {
  overflow-x: hidden;
}

.detail-content{
  padding: 5px
}

.smaller {
  width: calc(43% - 10px);
}

.bigger {
  width: 57%;
  margin-left: 10px;
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
  width: 30px;
  cursor: pointer;
}

.used-tools {
  display: flex;
  flex-direction: row;

}

@media (max-width: 1050px) {
  .used-tools {
    min-width: 170px;
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

@media (max-width: 1050px) {
  .buttons {
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 0;
  }

  .button {
    min-width: 160px;
    max-width: 100%;
    margin-bottom: 10px;
    padding: 0;
  }
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

  .smaller, .bigger {
    width: 100%;
  }

  .smaller{
    margin-bottom: 10px;
  }

  .bigger{
    margin-left: 0;
  }
}
</style>