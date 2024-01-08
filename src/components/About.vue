<script lang="ts" setup>
import CONTENT from "@/locales/content.json";
import {apppearance} from "@/stores/store";

const getAppearanceClass = () => (apppearance.value === 'Dark' ? 'content-dark' : 'content-light');
</script>

<template>
  <div>
    <h2>{{ $t('ABOUT.TITLE') }}</h2>
    <div class="grid">
      <div :class="[getAppearanceClass(),'left']">
        {{ $t('ABOUT.TEXT') }}
      </div>
      <div :class="[getAppearanceClass(), 'right']">
        <img :src="CONTENT.ABOUT.IMG" alt=" Logo" class="img"/>
      </div>
    </div>

    <div class="grid">
      <div class="left">
        <div :class="[getAppearanceClass(), 'title']">
          <h2>{{ $t('ABOUT.EDUCATION.TITLE') }}</h2>
        </div>
        <div :class="[getAppearanceClass()]">
          {{ $t('ABOUT.EDUCATION.MASTER.TITLE') }}<br>
          {{ $t('ABOUT.EDUCATION.MASTER.UNI') }}<br>
          {{ $t('ABOUT.EDUCATION.MASTER.TIME') }}<br>
          <img :src="CONTENT.EDUCATION.MASTER.IMG" alt=" Logo" class="img"/>
        </div>
      </div>
      <div :class="[getAppearanceClass(), 'right']">
        {{ $t('ABOUT.EDUCATION.BACHELOR.TITLE') }}<br>
        {{ $t('ABOUT.EDUCATION.BACHELOR.UNI') }}<br>
        {{ $t('ABOUT.EDUCATION.BACHELOR.TIME') }}<br>
        <img :src="CONTENT.EDUCATION.BACHELOR.IMG" alt=" Logo" class="img"/>
      </div>
    </div>

    <div class="grid">
      <div class="left">
        <div :class="[getAppearanceClass(), 'title']">
          <h2>{{ $t('ABOUT.EXPERIENCES.TITLE') }}</h2>
        </div>
        <div :class="[getAppearanceClass()]">
          {{ $t('ABOUT.EXPERIENCES.BOSCH.EMPLOYER') }}<br>
          {{ $t('ABOUT.EXPERIENCES.BOSCH.JOB') }}<br>
          {{ $t('ABOUT.EXPERIENCES.BOSCH.TASKS') }}<br>
          {{ $t('ABOUT.EXPERIENCES.BOSCH.CITY') }}<br>
          {{ $t('ABOUT.EXPERIENCES.BOSCH.TIME') }}<br>
          <img :src="CONTENT.EXPERIENCES.BOSCH.IMG" alt=" Logo" class="img"/>
        </div>
      </div>
      <div :class="[getAppearanceClass(), 'right']">
        {{ $t('ABOUT.EXPERIENCES.PLANETMUTLU.EMPLOYER') }}<br>
        {{ $t('ABOUT.EXPERIENCES.PLANETMUTLU.JOB') }}<br>
        {{ $t('ABOUT.EXPERIENCES.PLANETMUTLU.TASKS') }}<br>
        {{ $t('ABOUT.EXPERIENCES.PLANETMUTLU.CITY') }}<br>
        {{ $t('ABOUT.EXPERIENCES.PLANETMUTLU.TIME') }}<br>
        <img :src="CONTENT.EXPERIENCES.PLANETMUTLU.IMG" alt=" Logo" class="img"/>
      </div>
    </div>

    <div class="grid">
      <div class="left">
        <div :class="[getAppearanceClass(), 'title']">
          <h2>{{ $t('ABOUT.ABROAD.TITLE') }}</h2>
        </div>
        <div :class="[getAppearanceClass()]">
          {{ $t('ABOUT.ABROAD.STUDY.TITLE') }}<br>
          {{ $t('ABOUT.ABROAD.STUDY.PLACE') }}<br>
          {{ $t('ABOUT.ABROAD.STUDY.TIME') }}
        </div>
      </div>

      <div :class="[getAppearanceClass(), 'right']">
        {{ $t('ABOUT.ABROAD.WORKANDTRAVEL.TITLE') }}<br>
        {{ $t('ABOUT.ABROAD.WORKANDTRAVEL.PLACE') }}<br>
        {{ $t('ABOUT.ABROAD.WORKANDTRAVEL.TIME') }}
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

.left {
  grid-column: span 4;
}

.right {
  grid-column: span 3;
}

.title {
  margin-bottom: 10px;
}

.grid > div {
  height: 100%;
}

.left > div {
  /* Exclude inner-grid divs from the padding */
  padding: 0;
}

@media screen and (max-width: 800px) {

  .grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .left {
    grid-column: span 2;
  }

  .right {
    grid-column: span 2;
  }
}

</style>