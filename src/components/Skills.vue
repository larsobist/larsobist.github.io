<script setup lang="ts">

import CONTENT from "@/locales/content.json";
import {apppearance} from "@/stores/store";

</script>

<template>
  <div class="border">
    <h2>{{ $t('SKILLS.TITLE') }}</h2>
    <h2>{{ $t('SKILLS.LANGUAGES.TITLE') }}</h2>
    <div class="grid">
      <div v-for="(language, index) in CONTENT.SKILLS.LANGUAGES" :key="index"
           :class="[apppearance === 'Dark' ? 'content-dark' : 'content-light', 'hover-container']">
        <img class="skills-img" :src="language.IMG" alt="Logo"/>
        <div :class="[apppearance === 'Dark' ? 'overlay-dark' : 'overlay-light', 'overlay']">{{ language['TITLE'] }}</div>
      </div>
    </div>
    <h2>{{ $t('SKILLS.FRAMEWORKS.TITLE') }}</h2>
    <div class="grid">
      <div v-for="(language, index) in CONTENT.SKILLS.FRAMEWORKS" :key="index"
           :class="[apppearance === 'Dark' ? 'content-dark' : 'content-light', 'hover-container']">
        <img class="skills-img" :src="language.IMG" alt="Logo"/>
        <div :class="[apppearance === 'Dark' ? 'overlay-dark' : 'overlay-light', 'overlay']">{{ language['TITLE'] }}</div>
      </div>
    </div>
    <h2>{{ $t('SKILLS.SOFTWARE.TITLE') }}</h2>
    <div class="grid">
      <div v-for="(language, index) in CONTENT.SKILLS.SOFTWARE" :key="index"
           :class="[apppearance === 'Dark' ? 'content-dark' : 'content-light', 'hover-container']">
        <img class="skills-img" :src="language.IMG" alt="Logo"/>
        <div :class="[apppearance === 'Dark' ? 'overlay-dark' : 'overlay-light', 'overlay']">{{ language['TITLE'] }}</div>
      </div>
    </div>
    <h2>{{ $t('SKILLS.METHODS.TITLE') }}</h2>
    <div class="grid">
      <div v-for="(language, index) in CONTENT.SKILLS.METHODS" :key="index"
           :class="[apppearance === 'Dark' ? 'content-dark' : 'content-light', 'hover-container']">
        <img class="skills-img" :src="language.IMG" alt="Logo"/>
        <div :class="[apppearance === 'Dark' ? 'overlay-dark' : 'overlay-light', 'overlay']">{{ language['TITLE'] }}</div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 0;
  aspect-ratio: 7 / 2;
}

.grid .rectangle-up {
  grid-row: span 2;
}

.grid .rectangle {
  grid-column: span 2;
}

.grid .big-rectangle {
  grid-column: span 3;
  grid-row: span 2;
}

.grid .square {
  grid-row: span 2;
  grid-column: span 2;
}

.hover-container {
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: none;
}

.overlay-light {
  background-color: rgba(255, 255, 255, 0.5);
}

.overlay-dark {
  background-color: rgba(0, 0, 0, 0.5);
}

.hover-container:hover .overlay, .hover-container:active .overlay {
  display: flex;
}

.skills-img{
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 800px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    aspect-ratio: 4 / 4;
    max-height: calc(100vw * 4 / 4);
  }
}

</style>
