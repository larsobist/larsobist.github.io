<script setup lang="ts">

import CONTENT from "@/locales/content.json";
</script>

<template>
  <div class="border">
    <h2>{{ $t('SKILLS.TITLE') }}</h2>
    <h2>{{ $t('SKILLS.LANGUAGES.TITLE') }}</h2>
    <div class="grid">
      <div class="element "><img class="img" :src="CONTENT.SKILLS.LANGUAGES.JAVA.IMG"/></div>
      <div class="element "><img class="img" :src="CONTENT.SKILLS.LANGUAGES.HTML.IMG" alt=" Logo"/></div>
      <div class="element "> <img class="img" :src="CONTENT.SKILLS.LANGUAGES.JAVASCRIPT.IMG" alt=" Logo"/></div>
      <div class="element "><img class="img" :src="CONTENT.SKILLS.LANGUAGES.TYPESCRIPT.IMG" alt=" Logo"/></div>
      <div class="element "><img class="img" :src="CONTENT.SKILLS.LANGUAGES.CSS.IMG" alt=" Logo"/></div>
      <div class="element "><img class="img" :src="CONTENT.SKILLS.LANGUAGES.PYTHON.IMG" alt=" Logo"/></div>
      <div class="element "> <img class="img" :src="CONTENT.SKILLS.LANGUAGES.SWIFT.IMG" alt=" Logo"/></div>
      <div class="element "><img class="img" :src="CONTENT.SKILLS.LANGUAGES.KOTLIN.IMG" alt=" Logo"/></div>
    </div>
    <h2>{{ $t('SKILLS.FRAMEWORKS.TITLE') }}</h2>
    <div class="grid">
      <div class="element "><img class="img" :src="CONTENT.SKILLS.FRAMEWORKS.ANGULAR.IMG" alt="  Logo"/></div>
      <div class="element "><img class="img" :src="CONTENT.SKILLS.FRAMEWORKS.VUE.IMG" alt="  Logo"/></div>
      <div class="element "><img class="img" :src="CONTENT.SKILLS.FRAMEWORKS.REACT.IMG" alt="  Logo"/></div>
      <div class="element "><img class="img" :src="CONTENT.SKILLS.FRAMEWORKS.NODEJS.IMG" alt="  Logo"/></div>
      <div class="element "><img class="img" :src="CONTENT.SKILLS.FRAMEWORKS.SPRINGBOOT.IMG" alt="  Logo"/></div>
      <div class="element "><img class="img" :src="CONTENT.SKILLS.FRAMEWORKS.BOOTSTRAP.IMG" alt="  Logo"/></div>
      <div class="element "><img class="img" :src="CONTENT.SKILLS.FRAMEWORKS.DOCKER.IMG" alt="  Logo"/></div>
      <div class="element "><img class="img" :src="CONTENT.SKILLS.FRAMEWORKS.I18N.IMG" alt="  Logo"/></div>
    </div>
    <h2>{{ $t('SKILLS.SOFTWARE.TITLE') }}</h2>
    <div class="grid">
      <div class="element "><img class="img" :src="CONTENT.SKILLS.SOFTWARE.INTELLIJ.IMG" alt="  Logo"/></div>
      <div class="element "><img class="img" :src="CONTENT.SKILLS.SOFTWARE.VISUALSTUDIOCODE.IMG" alt="  Logo"/></div>
      <div class="element "><img class="img" :src="CONTENT.SKILLS.SOFTWARE.XCODE.IMG" alt="  Logo"/></div>
      <div class="element "><img class="img" :src="CONTENT.SKILLS.SOFTWARE.ANDROIDSTUDIO.IMG" alt="  Logo"/></div>
      <div class="element "><img class="img" :src="CONTENT.SKILLS.SOFTWARE.GIT.IMG" alt="  Logo"/></div>
      <div class="element "><img class="img" :src="CONTENT.SKILLS.SOFTWARE.MONGODB.IMG" alt="  Logo"/></div>
      <div class="element "><img class="img" :src="CONTENT.SKILLS.SOFTWARE.MYSQL.IMG" alt="  Logo"/></div>
      <div class="element "><img class="img" :src="CONTENT.SKILLS.SOFTWARE.POSTMAN.IMG" alt="  Logo"/></div>
      <div class="element "><img class="img" :src="CONTENT.SKILLS.SOFTWARE.FIGMA.IMG" alt="  Logo"/></div>
      <div class="element "><img class="img" :src="CONTENT.SKILLS.SOFTWARE.CREATIVECLOUD.IMG" alt="  Logo"/></div>
      <div class="element "><img class="img" :src="CONTENT.SKILLS.SOFTWARE.WORDPRESS.IMG" alt="  Logo"/></div>
      <div class="element "><img class="img" :src="CONTENT.SKILLS.SOFTWARE.MSOFFICE.IMG" alt="  Logo"/></div>
    </div>
    <h2>{{ $t('SKILLS.METHODS.TITLE') }}</h2>
    <div class="grid">
      <div class="element "><img class="img" :src="CONTENT.SKILLS.METHODS.SCRUM.IMG" alt="  Logo"/></div>
      <div class="element "><img class="img" :src="CONTENT.SKILLS.METHODS.CLEANCODE.IMG" alt="  Logo"/></div>
      <div class="element "><img class="img" :src="CONTENT.SKILLS.METHODS.DESIGNTHINKING.IMG" alt="  Logo"/></div>
      <div class="element "><img class="img" :src="CONTENT.SKILLS.METHODS.UXDESIGN.IMG" alt="  Logo"/></div>
      <div class="element "><img class="img" :src="CONTENT.SKILLS.METHODS.BRANDING.IMG" alt="  Logo"/></div>
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

@media screen and (max-width: 800px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    aspect-ratio: 4 / 3;
    max-height: calc(100vw * 3 / 4);
  }
}

</style>
