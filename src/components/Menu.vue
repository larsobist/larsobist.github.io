<script lang="ts" setup>
import {ref} from 'vue';
import {apppearance, setVisualAppearance} from "@/stores/store";
import CONTENT from '../locales/content.json';

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

const isMenuOpen = ref(false);

const toggleMenu = () => {

  isMenuOpen.value = !isMenuOpen.value;
};

const scrollAndToggle = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });
  }

  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>

  <div class="menu-left">
    <div class="menu-item" @click="scrollToSection('projects')">{{ $t('PROJECTS.TITLE') }}</div>
    <div class="menu-item" @click="scrollToSection('skills')">{{ $t('SKILLS.TITLE') }}</div>
    <div class="menu-item" @click="scrollToSection('about')">{{ $t('ABOUT.TITLE') }}</div>
    <div class="menu-item spacer"></div>
    <div class="menu-item icon left" @click="scrollToSection('home')"><img class="imgMenu" :src="CONTENT.LOGO"
                                                                           alt="Logo"/></div>
  </div>

  <div class="menu-right">
    <div class="menu-item" @click="scrollToSection('home')">
      <img class="imgMenu" :src="CONTENT.LOGOLONG" alt="Logo"/>
    </div>
    <div class="menu-item spacer"></div>
    <div class="menu-item icon right">
      <a :href="CONTENT.CONTACT.MAIL.LINK" target="_blank"><img class="imgMenu" :src="CONTENT.CONTACT.MAIL.IMG" alt="Logo"/></a>
    </div>
    <div class="menu-item icon right">
      <a :href="CONTENT.CONTACT.LINKEDIN.LINK" target="_blank"><img class="imgMenu" :src="CONTENT.CONTACT.LINKEDIN.IMG"
                                                                  alt="Logo"/></a>
    </div>
    <div class="menu-item icon right">
      <a :href="CONTENT.CONTACT.XING.LINK" target="_blank"><img class="imgMenu" :src="CONTENT.CONTACT.XING.IMG" alt="Logo"/></a>
    </div>
    <div class="menu-item spacer"></div>
    <div>
      <div v-if="$i18n.locale !== 'en'" :class="{ active: $i18n.locale === 'en' }" class="menu-item icon right"
           @click="$i18n.locale = 'en'">{{ $t('ENGLISH') }}
      </div>
      <div v-else class="menu-item icon right" @click="$i18n.locale = 'de'">
        {{ $t('GERMAN') }}
      </div>
    </div>
    <div>
      <div v-if="apppearance === 'Light'" class="menu-item icon right" @click="toggleAppearance('Dark')">{{
          $t('DARKMODE')
        }}
      </div>
      <div v-else class="menu-item icon right" @click="toggleAppearance('Light')">{{ $t('LIGHTMODE') }}</div>
    </div>
  </div>

  <div v-if="isMenuOpen" :class="apppearance === 'Dark' ? 'dark' : 'light'" class="menu-responsive elements">
    <div class="menu-item menu-btn " @click="scrollAndToggle('about')">{{ $t('ABOUT.TITLE') }}</div>
    <div class="menu-item menu-btn " @click="scrollAndToggle('skills')">{{ $t('SKILLS.TITLE') }}</div>
    <div class="menu-item menu-btn " @click="scrollAndToggle('projects')">{{ $t('PROJECTS.TITLE') }}</div>
    <div class="menu-item menu-spacer"></div>
    <div class="menu-item menu-spacer">{{ $t('GETINCONTACT') }}</div>
    <div class="responsive-row">
      <div class="menu-item icon" @click="toggleMenu">
        <a :href="CONTENT.CONTACT.MAIL.LINK" target="_blank"><img class="imgMenu" :src="CONTENT.CONTACT.MAIL.IMG"
                                                                alt="Logo"/></a>
      </div>
      <div class="menu-item icon " @click="toggleMenu">
        <a :href="CONTENT.CONTACT.LINKEDIN.LINK" target="_blank"><img class="imgMenu" :src="CONTENT.CONTACT.LINKEDIN.IMG"
                                                                    alt="Logo"/></a>
      </div>
      <div class="menu-item icon" @click="toggleMenu">
        <a :href="CONTENT.CONTACT.XING.LINK" target="_blank"><img class="imgMenu" :src="CONTENT.CONTACT.XING.IMG"
                                                                alt="Logo"/></a>
      </div>
    </div>
    <div class="menu-item menu-spacer"> {{ CONTENT.CONTACT.XING.LINK }}</div>
    <div class="menu-item menu-spacer">{{ $t('SETTINGS') }}  </div>
    <div class="responsive-row">
      <div>
        <div v-if="$i18n.locale !== 'en'" :class="{ active: $i18n.locale === 'en' }" class="menu-item icon"
             @click="$i18n.locale = 'en'">{{ $t('ENGLISH') }}
        </div>
        <div v-else class="menu-item icon" @click="$i18n.locale = 'de'">
          {{ $t('GERMAN') }}
        </div>
      </div>
      <div>
        <div v-if="apppearance === 'Light'" class="menu-item icon" @click="toggleAppearance('Dark')">{{
            $t('DARKMODE')
          }}
        </div>
        <div v-else class="menu-item icon" @click="toggleAppearance('Light')">{{ $t('LIGHTMODE') }}</div>
      </div>
    </div>

  </div>

  <div :class="apppearance === 'Dark' ? 'dark' : 'light'" class="menu-responsive">
    <div class="menu-item" @click="scrollToSection('home')">
      <img class="imgMenu" :src="CONTENT.LOGOLONG" alt="Logo"/>
    </div>
    <div class="menu-item spacer"></div>
    <div v-if="!isMenuOpen" class="menu-item" @click="toggleMenu">
      <img class="imgMenu" :src="CONTENT.MENU" alt="Menu"/>
    </div>
    <div v-if="isMenuOpen" class="menu-item" @click="toggleMenu">
      {{ $t('CLOSE') }}
    </div>
  </div>

</template>

<style scoped>

.menu-responsive {
  display: none;
}

.menu-left,
.menu-right {
  white-space: nowrap;
  border: 2px solid;
  height: 50px;
  position: fixed;
  width: 100vh;
  z-index: 1000;
  transform-origin: top left;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.menu-left {
  top: 100vh;
  transform: rotate(-90deg) translateY(-50px)
}

.menu-right {
  top: 0;
  transform: rotate(90deg) translateY(-1100px)
}

.menu-item {
  width: 150px;
  height: 50px;
  border: 2px solid;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: cell;
}

.icon {
  width: 50px;
  cursor: cell;
}

.left {
  transform: rotate(90deg);
}

.right {
  transform: rotate(-90deg);
}

.spacer {
  width: 100px;
  cursor: crosshair;
}

.imgMenu {
  height: 50px;
  width: 50px;
  cursor: cell;
}

@media screen and (max-width: 1150px) {
  .menu-left,
  .menu-right {
    display: none;
  }

  .menu-responsive {
    margin: -50px auto;
    display: flex;
    position: fixed;
    height: 50px;

    border: solid 2px;
    width: 100vw;
    max-width: 1050px;
  }

  .spacer {
    width: calc(100vw - 200px);
  }

  .menu-spacer{
    height: 50px;
    border: 0;
  }

  .elements {
    display: flex;
    position: fixed;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    top: 50px;
  }

  .menu-btn {
    width: 40vw;
    height: 50px;
  }

  .responsive-row {
    display: flex;
    flex-direction: row;
  }
}

</style>