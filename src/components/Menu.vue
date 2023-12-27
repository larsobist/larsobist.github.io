<script lang="ts" setup>

import {apppearance, setVisualAppearance} from "@/stores/store";

const toggleAppearance = (appearance: string) => {
  setVisualAppearance(appearance);
};

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });
  }
};

</script>

<template>

  <div class="menu-left">
    <div class="btn" @click="scrollToSection('home')"><img class="imgMenu" :src="$t('LOGO')" alt="Logo"/></div>
    <div class="btn" @click="scrollToSection('about')">{{ $t('ABOUT.TITLE') }}</div>
    <div class="btn" @click="scrollToSection('skills')">{{ $t('SKILLS.TITLE') }}</div>
    <div class="btn" @click="scrollToSection('projects')">{{ $t('PROJECTS.TITLE') }}</div>
  </div>

  <div class="menu-right">
    <div class="btn" @click="scrollToSection('home')">
      <img class="imgMenu" :src="$t('LOGOLONG')" alt="Logo"/>
    </div>
    <div>
      <div v-if="$i18n.locale !== 'en'" :class="{ active: $i18n.locale === 'en' }" class="btn"
           @click="$i18n.locale = 'en'">{{ $t('ENGLISH') }}
      </div>
      <div v-else class="btn" @click="$i18n.locale = 'de'">
        {{ $t('GERMAN') }}
      </div>
    </div>
    <div>
      <div v-if="apppearance === 'Light'" class="btn" @click="toggleAppearance('Dark')">{{
          $t('DARKMODE')
        }}
      </div>
      <div v-else class="btn" @click="toggleAppearance('Light')">{{ $t('LIGHTMODE') }}</div>
    </div>
    <div class="btn">
      <a :href="$t('CONTACT.LINKEDIN.LINK')" target="_blank"><img class="imgMenu" :src="$t('CONTACT.LINKEDIN.IMG')" alt="Logo"/></a>
    </div>
    <div class="btn">
      <a :href="$t('CONTACT.XING.LINK')" target="_blank"><img class="imgMenu" :src="$t('CONTACT.XING.IMG')" alt="Logo"/></a>
    </div>
    <div class="btn">
      <a :href="$t('CONTACT.MAIL.LINK')" target="_blank"><img class="imgMenu" :src="$t('CONTACT.MAIL.IMG')" alt="Logo"/></a>
    </div>
  </div>

</template>

<style scoped>

</style>