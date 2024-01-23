<script lang="ts" setup>
import CONTENT from "@/locales/content.json";
import {appearance} from "@/stores/store";

const getAppearanceClass = () => (appearance.value === 'Dark' ? 'content-dark' : 'content-light');
</script>

<template>
  <div>
    <h2>{{ $t('ABOUT.TITLE') }}</h2>
    <div class="grid">
      <div :class="[getAppearanceClass(),'intro-left']">
        <div class="text">
          {{ $t('ABOUT.TEXT') }}
        </div>
      </div>
      <div :class="[getAppearanceClass(), 'intro-right']">
        <img :src="CONTENT.ABOUT.IMG" alt=" Logo" class="profile-img"/>
      </div>
    </div>

    <div class="grid">
      <div class="left">
        <div :class="[getAppearanceClass(), 'title']">
          <div class="headline">
            <h3>{{ $t('ABOUT.EDUCATION.TITLE') }}</h3>
          </div>
        </div>
        <div :class="[getAppearanceClass()]">
          <div class="text">
            <b>{{ $t('ABOUT.EDUCATION.MASTER.UNI') }}<br></b>
            {{ $t('ABOUT.EDUCATION.MASTER.TITLE') }}<br>
            {{ $t('ABOUT.EDUCATION.MASTER.TIME') }}<br>
            <img :src="CONTENT.EDUCATION.MASTER.IMG" alt=" Logo" class="logo-img"/>
          </div>
        </div>
      </div>
      <div :class="[getAppearanceClass(), 'right']">
        <div class="text">
          <b>{{ $t('ABOUT.EDUCATION.BACHELOR.UNI') }}<br></b>
          {{ $t('ABOUT.EDUCATION.BACHELOR.TITLE') }}<br>
          {{ $t('ABOUT.EDUCATION.BACHELOR.TIME') }}<br>
          <img :src="CONTENT.EDUCATION.BACHELOR.IMG" alt=" Logo" class="logo-img"/>
        </div>
      </div>
    </div>

    <div class="grid">
      <div class="left">
        <div :class="[getAppearanceClass(), 'title']">
          <div class="headline">
            <h3>{{ $t('ABOUT.EXPERIENCES.TITLE') }}</h3>
          </div>
        </div>
        <div :class="[getAppearanceClass()]">
          <div class="text">
            <b>{{ $t('ABOUT.EXPERIENCES.BOSCH.EMPLOYER') }}<br></b>
            {{ $t('ABOUT.EXPERIENCES.BOSCH.JOB') }}<br>
            {{ $t('ABOUT.EXPERIENCES.BOSCH.TASKS') }}<br>
            {{ $t('ABOUT.EXPERIENCES.BOSCH.CITY') }}<br>
            {{ $t('ABOUT.EXPERIENCES.BOSCH.TIME') }}<br>
            <img :src="CONTENT.EXPERIENCES.BOSCH.IMG" alt=" Logo" class="logo-img"/>
          </div>
        </div>
      </div>
      <div :class="[getAppearanceClass(), 'right']">
        <div class="text">
          <b>{{ $t('ABOUT.EXPERIENCES.PLANETMUTLU.EMPLOYER') }}<br></b>
          {{ $t('ABOUT.EXPERIENCES.PLANETMUTLU.JOB') }}<br>
          {{ $t('ABOUT.EXPERIENCES.PLANETMUTLU.TASKS') }}<br>
          {{ $t('ABOUT.EXPERIENCES.PLANETMUTLU.CITY') }}<br>
          {{ $t('ABOUT.EXPERIENCES.PLANETMUTLU.TIME') }}<br>
          <img :src="CONTENT.EXPERIENCES.PLANETMUTLU.IMG" alt=" Logo" class="logo-img"/>
        </div>
      </div>
    </div>

    <div class="grid">
      <div class="left">
        <div :class="[getAppearanceClass(), 'title']">
          <div class="headline" >
            <h3>{{ $t('ABOUT.ABROAD.TITLE') }}</h3>
          </div>
        </div>
        <div :class="[getAppearanceClass()]">
          <div class="text">
            <b>{{ $t('ABOUT.ABROAD.STUDY.TITLE') }}<br></b>
            {{ $t('ABOUT.ABROAD.STUDY.PLACE') }}<br>
            {{ $t('ABOUT.ABROAD.STUDY.TIME') }}
          </div>
        </div>
      </div>

      <div :class="[getAppearanceClass(), 'right']">
        <div class="text">
          <b>{{ $t('ABOUT.ABROAD.WORKANDTRAVEL.TITLE') }}<br></b>
          {{ $t('ABOUT.ABROAD.WORKANDTRAVEL.PLACE') }}<br>
          {{ $t('ABOUT.ABROAD.WORKANDTRAVEL.TIME') }}
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

.left {
  grid-column: span 4;
}

.right {
  grid-column: span 3;
  display: flex; align-items: center; margin-top: auto;
}

.intro-left {
  grid-column: span 4;
}

.intro-right {
  grid-column: span 3;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-img{
  width: 300px;
  height: auto;
  max-width: 100%;
}

.logo-img{
  width: auto;
  height: 30px;
  max-width: 90%;
}

.headline {
  padding: 1px 5px;
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

  .left, .right, .intro-left, .intro-right {
    grid-column: span 2;
  }
}

@media screen and (max-width: 600px) {
  .grid {
    grid-template-columns: repeat(1, 1fr);
  }

  .intro-left, .intro-right {
    grid-column: span 1;
  }
}

</style>