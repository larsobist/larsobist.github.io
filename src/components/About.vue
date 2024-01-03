<script setup lang="ts">
import CONTENT from "@/locales/content.json";
</script>

<template>
  <div class="border">
    <h2>{{ $t('ABOUT.TITLE') }}</h2>
    {{ $t('ABOUT.TEXT') }}
    <img class="img" :src="CONTENT.ABOUT.IMG" alt= " Logo"/>

    <h2>{{ $t('ABOUT.EDUCATION.TITLE') }}</h2>
    <div class="grid">
      <div class="element ">
        {{ $t('ABOUT.EDUCATION.MASTER.TITLE') }}<br>
        {{ $t('ABOUT.EDUCATION.MASTER.UNI') }}<br>
        {{ $t('ABOUT.EDUCATION.MASTER.TIME') }}<br>
        <img class="img" :src="CONTENT.EDUCATION.MASTER.IMG" alt= " Logo"/>
      </div>
      <div class="element ">
        {{ $t('ABOUT.EDUCATION.BACHELOR.TITLE') }}<br>
        {{ $t('ABOUT.EDUCATION.BACHELOR.UNI') }}<br>
        {{ $t('ABOUT.EDUCATION.BACHELOR.TIME') }}<br>
        <img class="img" :src="CONTENT.EDUCATION.BACHELOR.IMG" alt= " Logo"/>
      </div>
    </div>

    <h2>{{ $t('ABOUT.EXPERIENCES.TITLE') }}</h2>
    <div class="grid">
      <div class="element ">
        {{ $t('ABOUT.EXPERIENCES.BOSCH.EMPLOYER') }}<br>
        {{ $t('ABOUT.EXPERIENCES.BOSCH.JOB') }}<br>
        {{ $t('ABOUT.EXPERIENCES.BOSCH.TASKS') }}<br>
        {{ $t('ABOUT.EXPERIENCES.BOSCH.CITY') }}<br>
        {{ $t('ABOUT.EXPERIENCES.BOSCH.TIME') }}<br>
        <img class="img" :src="CONTENT.EXPERIENCES.BOSCH.IMG" alt= " Logo"/>
      </div>
      <div class="element ">
        {{ $t('ABOUT.EXPERIENCES.PLANETMUTLU.EMPLOYER') }}<br>
        {{ $t('ABOUT.EXPERIENCES.PLANETMUTLU.JOB') }}<br>
        {{ $t('ABOUT.EXPERIENCES.PLANETMUTLU.TASKS') }}<br>
        {{ $t('ABOUT.EXPERIENCES.PLANETMUTLU.CITY') }}<br>
        {{ $t('ABOUT.EXPERIENCES.PLANETMUTLU.TIME') }}<br>
        <img class="img" :src="CONTENT.EXPERIENCES.PLANETMUTLU.IMG" alt= " Logo"/>
      </div>
    </div>

    <h2>{{ $t('ABOUT.ABROAD.TITLE') }}</h2>
    <div class="grid">
      <div class="element ">
        {{ $t('ABOUT.ABROAD.STUDY.TITLE') }}<br>
        {{ $t('ABOUT.ABROAD.STUDY.PLACE') }}<br>
        {{ $t('ABOUT.ABROAD.STUDY.TIME') }}
      </div>
      <div class="element ">
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
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 1fr);
  gap: 0;
}

.grid div {
  height: 100%;
  padding: 5px;
}
</style>