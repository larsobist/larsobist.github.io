<script setup lang="ts">

</script>

<template>
  <div class="border">
    <h2>{{ $t('ABOUT.TITLE') }}</h2>
    {{ $t('ABOUT.TEXT') }}

    <h2>{{ $t('ABOUT.EDUCATION.TITLE') }}</h2>
    <div class="grid">
      <div class="border ">
        {{ $t('ABOUT.EDUCATION.MASTER.TITLE') }}<br>
        {{ $t('ABOUT.EDUCATION.MASTER.UNI') }}<br>
        {{ $t('ABOUT.EDUCATION.MASTER.TIME') }}<br>
        {{ $t('ABOUT.EDUCATION.MASTER.IMG') }}
      </div>
      <div class="border ">
        {{ $t('ABOUT.EDUCATION.BACHELOR.TITLE') }}<br>
        {{ $t('ABOUT.EDUCATION.BACHELOR.UNI') }}<br>
        {{ $t('ABOUT.EDUCATION.BACHELOR.TIME') }}<br>
        {{ $t('ABOUT.EDUCATION.BACHELOR.IMG') }}
      </div>
    </div>

    <h2>{{ $t('ABOUT.EXPERIENCES.TITLE') }}</h2>
    <div class="grid">
      <div class="border ">
        {{ $t('ABOUT.EXPERIENCES.BOSCH.EMPLOYER') }}<br>
        {{ $t('ABOUT.EXPERIENCES.BOSCH.JOB') }}<br>
        {{ $t('ABOUT.EXPERIENCES.BOSCH.TASKS') }}<br>
        {{ $t('ABOUT.EXPERIENCES.BOSCH.CITY') }}<br>
        {{ $t('ABOUT.EXPERIENCES.BOSCH.TIME') }}<br>
        {{ $t('ABOUT.EXPERIENCES.BOSCH.IMG') }}
      </div>
      <div class="border ">
        {{ $t('ABOUT.EXPERIENCES.PLANETMUTLU.EMPLOYER') }}<br>
        {{ $t('ABOUT.EXPERIENCES.PLANETMUTLU.JOB') }}<br>
        {{ $t('ABOUT.EXPERIENCES.PLANETMUTLU.TASKS') }}<br>
        {{ $t('ABOUT.EXPERIENCES.PLANETMUTLU.CITY') }}<br>
        {{ $t('ABOUT.EXPERIENCES.PLANETMUTLU.TIME') }}<br>
        {{ $t('ABOUT.EXPERIENCES.PLANETMUTLU.IMG') }}
      </div>
    </div>

    <h2>{{ $t('ABOUT.ABROAD.TITLE') }}</h2>
    <div class="grid">
      <div class="border ">
        {{ $t('ABOUT.ABROAD.STUDY.TITLE') }}<br>
        {{ $t('ABOUT.ABROAD.STUDY.PLACE') }}<br>
        {{ $t('ABOUT.ABROAD.STUDY.TIME') }}
      </div>
      <div class="border ">
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