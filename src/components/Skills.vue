<script lang="ts" setup>

import CONTENT from "@/locales/content.json";
import {apppearance} from "@/stores/store";
const getAppearanceClass = () => (apppearance.value === 'Dark' ? 'content-dark' : 'content-light');

</script>

<template>
  <div>
    <h2>{{ $t('SKILLS.TITLE') }}</h2>
    <div class="grid grid-languages">
      <div :class="[getAppearanceClass(), 'languages']">
        <h2>{{ $t('SKILLS.LANGUAGES.TITLE') }}</h2>
      </div>
      <div v-for="(language, index) in CONTENT.SKILLS.LANGUAGES" :key="index"
           :class="[getAppearanceClass(), 'hover-container']">
        <img :src="language.IMG" alt="Logo" class="skills-img"/>
        <div :class="[getAppearanceClass(), 'overlay']">
          {{language['TITLE']}}
        </div>
      </div>
    </div>
    <div class="grid grid-frameworks">
      <div :class="[getAppearanceClass(), 'frameworks']">
        <h2>{{ $t('SKILLS.FRAMEWORKS.TITLE') }}</h2>
      </div>
      <div v-for="(language, index) in CONTENT.SKILLS.FRAMEWORKS" :key="index"
           :class="[getAppearanceClass(), 'hover-container']">
        <img :src="language.IMG" alt="Logo" class="skills-img"/>
        <div :class="[getAppearanceClass(), 'overlay']">
          {{language['TITLE'] }}
        </div>
      </div>
    </div>
    <div class="grid grid-software">
      <div :class="[getAppearanceClass(), 'software']">
        <h2>{{ $t('SKILLS.SOFTWARE.TITLE') }}</h2>
      </div>
      <div v-for="(language, index) in CONTENT.SKILLS.SOFTWARE" :key="index"
           :class="[getAppearanceClass(), 'hover-container']">
        <img :src="language.IMG" alt="Logo" class="skills-img"/>
        <div :class="[getAppearanceClass(), 'overlay']">
          {{language['TITLE'] }}
        </div>
      </div>
    </div>
    <div class="grid grid-methods">
      <div :class="[getAppearanceClass(), 'methods']">
        <h2>{{ $t('SKILLS.METHODS.TITLE') }}</h2>
      </div>
      <div v-for="(language, index) in CONTENT.SKILLS.METHODS" :key="index"
           :class="[getAppearanceClass(), 'hover-container']">
        <img :src="language.IMG" alt="Logo" class="skills-img"/>
        <div :class="[getAppearanceClass(), 'overlay']">
          {{language['TITLE']}}
        </div>
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

.grid .software {
  grid-row: span 2;
}

.grid .methods {
  grid-column: span 2;
}

.grid .languages {
  grid-column: span 3;
  grid-row: span 2;
}

.grid .frameworks {
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

.hover-container:hover .overlay, .hover-container:active .overlay {
  display: flex;
}

.skills-img {
  width: 100%;
  height: 100%;
}

.grid-methods {
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(1, 1fr);
  aspect-ratio: 7 / 1;
  max-height: calc(100vw * 7 / 1);
}

@media screen and (max-width: 800px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    aspect-ratio: 4 / 4;
  }

  .grid .languages {
    grid-row: span 2;
    grid-column: span 2;
  }

  .grid .software {
    grid-row: span 2;
    grid-column: span 2;
  }

  .grid .frameworks {
    grid-row: span 1;
    grid-column: span 2;
  }

  .grid .methods {
    grid-column: span 3;
  }

  .grid-languages, .grid-frameworks{
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    aspect-ratio: 4 / 3;
    max-height: calc(100vw * 4 / 3);
  }

  .grid-methods{
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    aspect-ratio: 4 / 2;
    max-height: calc(100vw * 4 / 2);
  }
}

</style>
