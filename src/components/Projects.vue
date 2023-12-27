<script setup lang="ts">
import {selectedProject} from '@/stores/store';
import {setSelectedProject} from '@/stores/store';

const onClick = (project: string) => {
  setSelectedProject(project);
};
</script>

<template>
    <div class="border" v-if="selectedProject == null">
      <h2>{{ $t('PROJECTS.TITLE') }}</h2>
      <div class="grid">
        <div class="border rectangle-up" @click="onClick('ZPHERE')">{{ $t('PROJECTS.ZPHERE.TITLE') }} <img class="img" :src="$t('PROJECTS.ZPHERE.LOGO')" alt="Logo"/></div>
        <div class="border rectangle" @click="onClick('CIRCLEOFLIFE')">{{ $t('PROJECTS.CIRCLEOFLIFE.TITLE') }} <img class="img" :src="$t('PROJECTS.CIRCLEOFLIFE.LOGO')" alt="Logo"/></div>
        <div class="border " @click="onClick('MOBILEAPPS')">{{ $t('PROJECTS.MOBILEAPPS.TITLE') }} <img class="img" :src="$t('PROJECTS.MOBILEAPPS.LOGO')" alt="Logo"/></div>
        <div class="border big-rectangle" @click="onClick('BACHELORTHESIS')">{{ $t('PROJECTS.BACHELORTHESIS.TITLE') }} <img class="img" :src="$t('PROJECTS.BACHELORTHESIS.LOGO')" alt="Logo"/></div>
        <div class="border " @click="onClick('CULINO')">{{ $t('PROJECTS.CULINO.TITLE') }} <img class="img" :src="$t('PROJECTS.CULINO.LOGO')" alt="Logo"/></div>
        <div class="border rectangle-up" @click="onClick('USABILITY')">{{ $t('PROJECTS.USABILITY.TITLE') }} <img class="img" :src="$t('PROJECTS.USABILITY.LOGO')" alt="Logo"/></div>
        <div class="border " @click="onClick('LAGOM')">{{ $t('PROJECTS.LAGOM.TITLE') }} <img class="img" :src="$t('PROJECTS.LAGOM.LOGO')" alt="Logo"/></div>
        <div class="border " @click="onClick('BUILDAR')">{{ $t('PROJECTS.BUILDAR.TITLE') }} <img class="img" :src="$t('PROJECTS.BUILDAR.LOGO')" alt="Logo"/></div>
        <div class="border " @click="onClick('RUNNERSHIGH')">{{ $t('PROJECTS.RUNNERSHIGH.TITLE') }} <img class="img" :src="$t('PROJECTS.RUNNERSHIGH.LOGO')" alt="Logo"/></div>
        <div class="border square" @click="onClick('TIMELESSTREASURES')">{{ $t('PROJECTS.TIMELESSTREASURES.TITLE') }} <img class="img" :src="$t('PROJECTS.TIMELESSTREASURES.LOGO')" alt="Logo"/></div>
        <div class="border " @click="onClick('WEBGAMES')">{{ $t('PROJECTS.WEBGAMES.TITLE') }} <img class="img" :src="$t('PROJECTS.WEBGAMES.LOGO')" alt="Logo"/></div>
        <div class="border " @click="onClick('SAVEATURTLE')">{{ $t('PROJECTS.SAVEATURTLE.TITLE') }} <img class="img" :src="$t('PROJECTS.SAVEATURTLE.LOGO')" alt="Logo"/></div>
        <div class="border " @click="onClick('EATABROAD')">{{ $t('PROJECTS.EATABROAD.TITLE') }} <img class="img" :src="$t('PROJECTS.EATABROAD.LOGO')" alt="Logo"/></div>
        <div class="border " @click="onClick('ESHOP')">{{ $t('PROJECTS.ESHOP.TITLE') }} <img class="img" :src="$t('PROJECTS.ESHOP.LOGO')" alt="Logo"/></div>
        <div class="border " @click="onClick('PORTFOLIO')">{{ $t('PROJECTS.PORTFOLIO.TITLE') }} <img class="img" :src="$t('PROJECTS.PORTFOLIO.LOGO')" alt="Logo"/></div>
        <div class="border rectangle" @click="onClick('UPCOMING')">{{ $t('PROJECTS.UPCOMING.TITLE') }} <img class="img" :src="$t('PROJECTS.UPCOMING.LOGO')" alt="Logo"/></div>
      </div>
    </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 0;
  aspect-ratio: 7 / 4;
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
