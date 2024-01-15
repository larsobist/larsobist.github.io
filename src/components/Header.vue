<script lang="ts" setup>

import CONTENT from "@/locales/content.json";
</script>

<template>

  <div class="header-container">
    <div class="header-content">
      <h2>{{ $t('LARSOBIST') }}</h2>
      {{ $t('HEADER.TEXT') }}
      <p></p>
    </div>
    <img :src="CONTENT.BRACKETS" alt="{}" class="img-header img-brackets"/>
    <img :src="CONTENT.HASHTAG" alt="#" class="img-header img-hashtag"/>
    <img :src="CONTENT.SYNTAX" alt="</>" class="img-header img-syntax"/>
  </div>

</template>

<style scoped>

.header-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.header-content {
  text-align: center;
  padding: 5px;
}

.img-header {
  position: absolute;
  height: 500px;
}

.img-brackets {
  transform: translateX(20%) translateY(-30%);
}

.img-hashtag {
  transform: translateX(-40%) translateY(20%);
}

.img-syntax {
  transform: translateX(30%) translateY(40%);
}

@media screen and (max-width: 600px) {
  .img-brackets {
    transform: translateX(10%) translateY(-40%);
  }

  .img-hashtag {
    transform: translateX(-30%) translateY(25%);
  }

  .img-syntax {
    transform: translateX(20%) translateY(45%);
  }
}

</style>