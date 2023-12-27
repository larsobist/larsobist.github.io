<script setup lang="ts">

</script>

<template>
  <div class="border">
    <h2>{{ $t('SKILLS.TITLE') }}</h2>
    <h2>{{ $t('SKILLS.LANGUAGES.TITLE') }}</h2>
    <div class="grid">
      <div class="border ">{{ $t('SKILLS.LANGUAGES.JAVA.TITLE') }} <img class="img" :src="$t('SKILLS.LANGUAGES.JAVA.IMG')" alt="Logo"/></div>
      <div class="border ">{{ $t('SKILLS.LANGUAGES.HTML.TITLE')}} <img class="img" :src="$t('SKILLS.LANGUAGES.HTML.IMG')" alt="Logo"/></div>
      <div class="border ">{{ $t('SKILLS.LANGUAGES.JAVASCRIPT.TITLE') }} <img class="img" :src="$t('SKILLS.LANGUAGES.JAVASCRIPT.IMG')" alt="Logo"/></div>
      <div class="border ">{{ $t('SKILLS.LANGUAGES.TYPESCRIPT.TITLE') }} <img class="img" :src="$t('SKILLS.LANGUAGES.TYPESCRIPT.IMG')" alt="Logo"/></div>
      <div class="border ">{{ $t('SKILLS.LANGUAGES.CSS.TITLE') }} <img class="img" :src="$t('SKILLS.LANGUAGES.CSS.IMG')" alt="Logo"/></div>
      <div class="border ">{{ $t('SKILLS.LANGUAGES.PYTHON.TITLE') }} <img class="img" :src="$t('SKILLS.LANGUAGES.PYTHON.IMG')" alt="Logo"/></div>
      <div class="border ">{{ $t('SKILLS.LANGUAGES.SWIFT.TITLE') }} <img class="img" :src="$t('SKILLS.LANGUAGES.SWIFT.IMG')" alt="Logo"/></div>
      <div class="border ">{{ $t('SKILLS.LANGUAGES.KOTLIN.TITLE') }} <img class="img" :src="$t('SKILLS.LANGUAGES.KOTLIN.IMG')" alt="Logo"/></div>
    </div>
    <h2>{{ $t('SKILLS.FRAMEWORKS.TITLE') }}</h2>
    <div class="grid">
      <div class="border ">{{ $t('SKILLS.FRAMEWORKS.ANGULAR.TITLE') }}<img class="img" :src="$t('SKILLS.FRAMEWORKS.ANGULAR.IMG')" alt="Logo"/></div>
      <div class="border ">{{ $t('SKILLS.FRAMEWORKS.VUE.TITLE') }}<img class="img" :src="$t('SKILLS.FRAMEWORKS.VUE.IMG')" alt="Logo"/></div>
      <div class="border ">{{ $t('SKILLS.FRAMEWORKS.REACT.TITLE') }}<img class="img" :src="$t('SKILLS.FRAMEWORKS.REACT.IMG')" alt="Logo"/></div>
      <div class="border ">{{ $t('SKILLS.FRAMEWORKS.NODEJS.TITLE') }}<img class="img" :src="$t('SKILLS.FRAMEWORKS.NODEJS.IMG')" alt="Logo"/></div>
      <div class="border ">{{ $t('SKILLS.FRAMEWORKS.SPRINGBOOT.TITLE') }}<img class="img" :src="$t('SKILLS.FRAMEWORKS.SPRINGBOOT.IMG')" alt="Logo"/></div>
      <div class="border ">{{ $t('SKILLS.FRAMEWORKS.BOOTSTRAP.TITLE') }}<img class="img" :src="$t('SKILLS.FRAMEWORKS.BOOTSTRAP.IMG')" alt="Logo"/></div>
      <div class="border ">{{ $t('SKILLS.FRAMEWORKS.DOCKER.TITLE') }}<img class="img" :src="$t('SKILLS.FRAMEWORKS.DOCKER.IMG')" alt="Logo"/></div>
      <div class="border ">{{ $t('SKILLS.FRAMEWORKS.I18N.TITLE') }}<img class="img" :src="$t('SKILLS.FRAMEWORKS.I18N.IMG')" alt="Logo"/></div>
    </div>
    <h2>{{ $t('SKILLS.SOFTWARE.TITLE') }}</h2>
    <div class="grid">
      <div class="border ">{{ $t('SKILLS.SOFTWARE.INTELLIJ.TITLE') }}<img class="img" :src="$t('SKILLS.SOFTWARE.INTELLIJ.IMG')" alt="Logo"/></div>
      <div class="border ">{{ $t('SKILLS.SOFTWARE.VISUALSTUDIOCODE.TITLE') }}<img class="img" :src="$t('SKILLS.SOFTWARE.VISUALSTUDIOCODE.IMG')" alt="Logo"/></div>
      <div class="border ">{{ $t('SKILLS.SOFTWARE.XCODE.TITLE') }}<img class="img" :src="$t('SKILLS.SOFTWARE.XCODE.IMG')" alt="Logo"/></div>
      <div class="border ">{{ $t('SKILLS.SOFTWARE.ANDROIDSTUDIO.TITLE') }}<img class="img" :src="$t('SKILLS.SOFTWARE.ANDROIDSTUDIO.IMG')" alt="Logo"/></div>
      <div class="border ">{{ $t('SKILLS.SOFTWARE.VERSIONCONTROLLSYSTEMS.TITLE') }}<img class="img" :src="$t('SKILLS.SOFTWARE.VERSIONCONTROLLSYSTEMS.IMG')" alt="Logo"/></div>
      <div class="border ">{{ $t('SKILLS.SOFTWARE.DATABASE.TITLE') }}<img class="img" :src="$t('SKILLS.SOFTWARE.DATABASE.IMG')" alt="Logo"/></div>
      <div class="border ">{{ $t('SKILLS.SOFTWARE.POSTMAN.TITLE') }}<img class="img" :src="$t('SKILLS.SOFTWARE.POSTMAN.IMG')" alt="Logo"/></div>
      <div class="border ">{{ $t('SKILLS.SOFTWARE.DESIGN.TITLE') }}<img class="img" :src="$t('SKILLS.SOFTWARE.DESIGN.IMG')" alt="Logo"/></div>
      <div class="border ">{{ $t('SKILLS.SOFTWARE.WORDPRESS.TITLE') }}<img class="img" :src="$t('SKILLS.SOFTWARE.WORDPRESS.IMG')" alt="Logo"/></div>
      <div class="border ">{{ $t('SKILLS.SOFTWARE.MSOFFICE.TITLE') }}<img class="img" :src="$t('SKILLS.SOFTWARE.MSOFFICE.IMG')" alt="Logo"/></div>
    </div>
    <h2>{{ $t('SKILLS.METHODS.TITLE') }}</h2>
    <div class="grid">
      <div class="border ">{{ $t('SKILLS.METHODS.SCRUM.TITLE') }}<img class="img" :src="$t('SKILLS.METHODS.SCRUM.IMG')" alt="Logo"/></div>
      <div class="border ">{{ $t('SKILLS.METHODS.CLEANCODE.TITLE') }}<img class="img" :src="$t('SKILLS.METHODS.CLEANCODE.IMG')" alt="Logo"/></div>
      <div class="border ">{{ $t('SKILLS.METHODS.DESIGNTHINKING.TITLE') }}<img class="img" :src="$t('SKILLS.METHODS.DESIGNTHINKING.IMG')" alt="Logo"/></div>
      <div class="border ">{{ $t('SKILLS.METHODS.UXDESIGN.TITLE') }}<img class="img" :src="$t('SKILLS.METHODS.UXDESIGN.IMG')" alt="Logo"/></div>
      <div class="border ">{{ $t('SKILLS.METHODS.BRANDING.TITLE') }}<img class="img" :src="$t('SKILLS.METHODS.BRANDING.IMG')" alt="Logo"/></div>
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
    grid-template-rows: repeat(3, 1fr);
    aspect-ratio: 4 / 3;
    max-height: calc(100vw * 3 / 4);
  }
}

</style>
