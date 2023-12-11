<script setup lang="ts">
import {apppearance, setVisualAppearance} from "@/stores/store";

const toggleAppearance = (appearance: string) => {
  setVisualAppearance(appearance);
};

</script>

<template>
  <div class="border">
    <h2>{{ $t('SKILLS.TITLE') }}</h2>
    <div>
      <button v-if="$i18n.locale !== 'en'" class="btn" @click="$i18n.locale = 'en'"
              :class="{ active: $i18n.locale === 'en' }">{{ $t('ENGLISH') }}
      </button>
      <button v-else class="btn" @click="$i18n.locale = 'de'" :class="{ active: $i18n.locale === 'de' }">
        {{ $t('GERMAN') }}
      </button>
    </div>

    <div>
      <button v-if="apppearance === 'Light'" class="btn" @click="toggleAppearance('Dark')">{{ $t('DARKMODE') }}</button>
      <button v-else class="btn" @click="toggleAppearance('Light')">{{ $t('LIGHTMODE') }}</button>
    </div>

    <h2>{{ $t('SKILLS.LANGUAGES.TITLE') }}</h2>
    <div class="grid">
      <div class="border ">{{ $t('SKILLS.LANGUAGES.JAVA.TITLE') }}</div>
      <div class="border ">{{ $t('SKILLS.LANGUAGES.HTML.TITLE') }}</div>
      <div class="border ">{{ $t('SKILLS.LANGUAGES.JAVASCRIPT.TITLE') }}</div>
      <div class="border ">{{ $t('SKILLS.LANGUAGES.TYPESCRIPT.TITLE') }}</div>
      <div class="border ">{{ $t('SKILLS.LANGUAGES.SCSS.TITLE') }}</div>
      <div class="border ">{{ $t('SKILLS.LANGUAGES.PYTHON.TITLE') }}</div>
      <div class="border ">{{ $t('SKILLS.LANGUAGES.SWIFT.TITLE') }}</div>
      <div class="border ">{{ $t('SKILLS.LANGUAGES.KOTLIN.TITLE') }}</div>
    </div>
    <h2>{{ $t('SKILLS.FRAMEWORKS.TITLE') }}</h2>
    <div class="grid">
      <div class="border ">{{ $t('SKILLS.FRAMEWORKS.ANGULAR.TITLE') }}</div>
      <div class="border ">{{ $t('SKILLS.FRAMEWORKS.VUE.TITLE') }}</div>
      <div class="border ">{{ $t('SKILLS.FRAMEWORKS.REACT.TITLE') }}</div>
      <div class="border ">{{ $t('SKILLS.FRAMEWORKS.NODEJS.TITLE') }}</div>
      <div class="border ">{{ $t('SKILLS.FRAMEWORKS.SPRINGBOOT.TITLE') }}</div>
      <div class="border ">{{ $t('SKILLS.FRAMEWORKS.BOOTSTRAP.TITLE') }}</div>
      <div class="border ">{{ $t('SKILLS.FRAMEWORKS.DOCKER.TITLE') }}</div>
    </div>
    <h2>{{ $t('SKILLS.SOFTWARE.TITLE') }}</h2>
    <div class="grid">
      <div class="border ">{{ $t('SKILLS.SOFTWARE.INTELLIJ.TITLE') }}</div>
      <div class="border ">{{ $t('SKILLS.SOFTWARE.VISUALSTUDIOCODE.TITLE') }}</div>
      <div class="border ">{{ $t('SKILLS.SOFTWARE.XCODE.TITLE') }}</div>
      <div class="border ">{{ $t('SKILLS.SOFTWARE.ANDROIDSTUDIO.TITLE') }}</div>
      <div class="border ">{{ $t('SKILLS.SOFTWARE.VERSIONCONTROLLSYSTEMS.TITLE') }}</div>
      <div class="border ">{{ $t('SKILLS.SOFTWARE.DATABASE.TITLE') }}</div>
      <div class="border ">{{ $t('SKILLS.SOFTWARE.POSTMAN.TITLE') }}</div>
      <div class="border ">{{ $t('SKILLS.SOFTWARE.DESIGN.TITLE') }}</div>
      <div class="border ">{{ $t('SKILLS.SOFTWARE.WORDPRESS.TITLE') }}</div>
      <div class="border ">{{ $t('SKILLS.SOFTWARE.MSOFFICE.TITLE') }}</div>
    </div>
    <h2>{{ $t('SKILLS.METHODS.TITLE') }}</h2>
    <div class="grid">
      <div class="border ">{{ $t('SKILLS.METHODS.SCRUM.TITLE') }}</div>
      <div class="border ">{{ $t('SKILLS.METHODS.CLEANCODE.TITLE') }}</div>
      <div class="border ">{{ $t('SKILLS.METHODS.DESIGNTHINKING.TITLE') }}</div>
      <div class="border ">{{ $t('SKILLS.METHODS.UXDESIGN.TITLE') }}</div>
      <div class="border ">{{ $t('SKILLS.METHODS.BRANDING.TITLE') }}</div>
    </div>
  </div>
</template>


<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 0;
  aspect-ratio: 7 / 3;
  max-height: 57.14vw;
}

.grid div {
  height: 100%;
  padding: 5px;
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

@media screen and (max-width: 800px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(7, 1fr);
    aspect-ratio: 4 / 7;
    max-height: calc(100vw * 7 / 4);
  }
}

</style>
