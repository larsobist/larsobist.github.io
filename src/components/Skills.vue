<script setup lang="ts">

</script>

<template>
  <h2>{{$t('Skills')}}</h2>
  <div>
    <button v-if="$i18n.locale !== 'en'" class="btn" @click="$i18n.locale = 'en'" :class="{ active: $i18n.locale === 'en' }">{{$t('Lang-Change-English')}}</button>
    <button v-else class="btn" @click="$i18n.locale = 'de'" :class="{ active: $i18n.locale === 'de' }">{{$t('Lang-Change-German')}}</button>
  </div>
</template>

<style scoped>

</style>