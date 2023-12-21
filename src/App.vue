<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import About from './components/About.vue'
import Header from './components/Header.vue'
import ProjectDetail from './components/Detail.vue'
import Projects from './components/Projects.vue'
import Skills from "./components/Skills.vue";

import {apppearance, setVisualAppearance} from "@/stores/store";

const toggleAppearance = (appearance: string) => {
  setVisualAppearance(appearance);
};
</script>

<template>
  <div class="main" :class="apppearance === 'Dark' ? 'dark' : 'light'">

    <div class="menu-left">Left menu</div>

    <div class="container">
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
      <ProjectDetail/>
    </div>
    <div class="menu-right">
      <div>
        <button v-if="$i18n.locale !== 'en'" class="btn" @click="$i18n.locale = 'en'"
                :class="{ active: $i18n.locale === 'en' }">{{ $t('ENGLISH') }}
        </button>
        <button v-else class="btn" @click="$i18n.locale = 'de'">
          {{ $t('GERMAN') }}
        </button>
      </div>

      <div>
        <button v-if="apppearance === 'Light'" class="btn" @click="toggleAppearance('Dark')">{{
            $t('DARKMODE')
          }}
        </button>
        <button v-else class="btn" @click="toggleAppearance('Light')">{{ $t('LIGHTMODE') }}</button>
      </div>
    </div>
  </div>

</template>


<style src="./assets/style.css">

</style>
