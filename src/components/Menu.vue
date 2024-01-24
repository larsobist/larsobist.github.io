<script lang="ts" setup>
import {ref} from 'vue';
import {appearance, setVisualAppearance} from "@/stores/store";
import CONTENT from '../locales/content.json';

const toggleAppearance = (look: string) => {
  setVisualAppearance(look);
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
  <div :class="[appearance === 'Dark' ? 'menu-dark' : 'menu-light', 'menu-left']">
    <div
        :class="[appearance === 'Dark' ? 'menu-item-dark' : 'menu-item-light', 'menu-item']"
        @click="scrollToSection('projects')"
    >
      {{ $t('PROJECTS.TITLE') }}
    </div>
    <div
        :class="[appearance === 'Dark' ? 'menu-item-dark' : 'menu-item-light', 'menu-item']"
        @click="scrollToSection('skills')"
    >
      {{ $t('SKILLS.TITLE') }}
    </div>
    <div
        :class="[appearance === 'Dark' ? 'menu-item-dark' : 'menu-item-light', 'menu-item']"
        @click="scrollToSection('about')"
    >
      {{ $t('ABOUT.TITLE') }}
    </div>
    <div class="spacer"></div>
    <div
        :class="[appearance === 'Dark' ? 'menu-item-dark' : 'menu-item-light', 'menu-item', 'icon', 'left']"
        @click="scrollToSection('home')"
    >
      <img :src="CONTENT.LOGO" alt=" Logo" class="img-menu" />
    </div>
  </div>

  <div :class="[appearance === 'Dark' ? 'menu-dark' : 'menu-light', 'menu-right']">
    <div :class="[appearance === 'Dark' ? 'menu-item-dark' : 'menu-item-light', 'menu-item']"
         @click="scrollToSection('home')">
      <img :src="CONTENT.LOGOLONG" alt=" Logo" class="img-menu-long"/>
    </div>
    <div class="spacer-right"></div>
    <div :class="[appearance === 'Dark' ? 'menu-item-dark' : 'menu-item-light', 'menu-item', 'icon', 'right']">
      <a :href="CONTENT.CONTACT.MAIL.LINK" target="_blank"><img :src="appearance === 'Light' ? CONTENT.CONTACT.MAIL.IMGDARK : CONTENT.CONTACT.MAIL.IMGLIGHT"
                                                                alt="XING"
                                                                class="img-menu"/></a>
    </div>
    <div :class="[appearance === 'Dark' ? 'menu-item-dark' : 'menu-item-light', 'menu-item', 'icon', 'right']">
      <a :href="CONTENT.CONTACT.LINKEDIN.LINK" target="_blank"><img :src="appearance === 'Light' ? CONTENT.CONTACT.LINKEDIN.IMGDARK : CONTENT.CONTACT.LINKEDIN.IMGLIGHT"
                                                                    alt="XING"
                                                                    class="img-menu"/></a>
    </div>
    <div :class="[appearance === 'Dark' ? 'menu-item-dark' : 'menu-item-light', 'menu-item', 'icon', 'right']">
      <a :href="CONTENT.CONTACT.XING.LINK" target="_blank"><img :src="appearance === 'Light' ? CONTENT.CONTACT.XING.IMGDARK : CONTENT.CONTACT.XING.IMGLIGHT"
                                                                alt="XING"
                                                                class="img-menu"/></a>
    </div>
    <div class="spacer-right"></div>
    <div>
      <div v-if="$i18n.locale !== 'en'"
           :class="{'menu-item-dark': appearance === 'Dark', 'menu-item-light': appearance === 'Light', 'menu-item': true, 'icon': true, 'right': true, 'active': $i18n.locale === 'en'}"
           @click="$i18n.locale = 'en'">
        <img :src="appearance === 'Dark' ? CONTENT.ENGLIGHT : CONTENT.ENGDARK" alt="ENG" class="img-menu"/>
      </div>
      <div v-else :class="[appearance === 'Dark' ? 'menu-item-dark' : 'menu-item-light', 'menu-item', 'icon', 'right']"
           @click="$i18n.locale = 'de'">
        <img :src="appearance === 'Dark' ? CONTENT.GERLIGHT : CONTENT.GERDARK" alt="GER" class="img-menu"/>
      </div>
    </div>
    <div>
      <div v-if="appearance === 'Light'"
           :class="[appearance === 'Light' ? 'menu-item-light' : 'menu-item-dark', 'menu-item', 'icon', 'right']"
           @click="toggleAppearance('Dark')">
        <img :src="appearance === 'Light' ? CONTENT.DARKMODE : CONTENT.LIGHTMODE" alt="Darkmode" class="img-menu"/>
      </div>
      <div v-else :class="[appearance === 'Dark' ? 'menu-item-dark' : 'menu-item-light', 'menu-item', 'icon', 'right']"
           @click="toggleAppearance('Light')">
        <img :src="appearance === 'Dark' ? CONTENT.LIGHTMODE : CONTENT.DARKMODE" alt="Lightode" class="img-menu"/>
      </div>
    </div>
  </div>

  <div v-if="isMenuOpen" :class="[appearance === 'Dark' ? 'dark' : 'light', 'menu-responsive']">
    <div :class="[appearance === 'Dark' ? 'elements-dark' : 'elements-light', 'elements']">
      <div :class="[appearance === 'Dark' ? 'menu-item-dark' : 'menu-item-light', 'menu-item', 'menu-btn']"
           @click="scrollAndToggle('about')">{{ $t('ABOUT.TITLE') }}
      </div>
      <div :class="[appearance === 'Dark' ? 'menu-item-dark' : 'menu-item-light', 'menu-item', 'menu-btn']"
           @click="scrollAndToggle('skills')">{{ $t('SKILLS.TITLE') }}
      </div>
      <div :class="[appearance === 'Dark' ? 'menu-item-dark' : 'menu-item-light', 'menu-item', 'menu-btn']"
           @click="scrollAndToggle('projects')">{{ $t('PROJECTS.TITLE') }}
      </div>
      <div class="menu-item menu-spacer"></div>
      <div class="menu-item menu-spacer">{{ $t('GETINCONTACT') }}</div>
      <div class="responsive-row">
        <div :class="[appearance === 'Dark' ? 'menu-item-dark' : 'menu-item-light', 'menu-item', 'icon']"
             @click="toggleMenu">
          <a :href="CONTENT.CONTACT.MAIL.LINK" target="_blank"><img :src="appearance === 'Light' ? CONTENT.CONTACT.MAIL.IMGDARK : CONTENT.CONTACT.MAIL.IMGLIGHT"
                                                                    alt="XING"
                                                                    class="img-menu"/></a>
        </div>
        <div :class="[appearance === 'Dark' ? 'menu-item-dark' : 'menu-item-light', 'menu-item', 'icon']"
             @click="toggleMenu">
          <a :href="CONTENT.CONTACT.LINKEDIN.LINK" target="_blank"><img :src="appearance === 'Light' ? CONTENT.CONTACT.LINKEDIN.IMGDARK : CONTENT.CONTACT.LINKEDIN.IMGLIGHT"
                                                                        alt="XING"
                                                                        class="img-menu"/></a>
        </div>
        <div :class="[appearance === 'Dark' ? 'menu-item-dark' : 'menu-item-light', 'menu-item', 'icon']"
             @click="toggleMenu">
          <a :href="CONTENT.CONTACT.XING.LINK" target="_blank"><img :src="appearance === 'Light' ? CONTENT.CONTACT.XING.IMGDARK : CONTENT.CONTACT.XING.IMGLIGHT"
                                                                    alt="XING"
                                                                    class="img-menu"/></a>
        </div>
      </div>
      <div class="menu-item menu-spacer"></div>
      <div class="menu-item menu-spacer">{{ $t('SETTINGS') }}</div>
      <div class="responsive-row">
        <div>
          <div v-if="$i18n.locale !== 'en'"
               :class="{'menu-item-dark': appearance === 'Dark', 'menu-item-light': appearance === 'Light', 'menu-item': true, 'icon': true, 'active': $i18n.locale === 'en'}"
               @click="$i18n.locale = 'en'">
            <img :src="appearance === 'Dark' ? CONTENT.ENGLIGHT : CONTENT.ENGDARK" alt="ENG" class="img-menu"/>
          </div>
          <div v-else :class="[appearance === 'Dark' ? 'menu-item-dark' : 'menu-item-light', 'menu-item', 'icon']"
               @click="$i18n.locale = 'de'">
            <img :src="appearance === 'Dark' ? CONTENT.GERLIGHT : CONTENT.GERDARK" alt="GER" class="img-menu"/>
          </div>
        </div>
        <div>
          <div v-if="appearance === 'Light'"
               :class="[appearance === 'Light' ? 'menu-item-light' : 'menu-item-dark', 'menu-item', 'icon']"
               @click="toggleAppearance('Dark')">
            <img :src="appearance === 'Light' ? CONTENT.DARKMODE : CONTENT.LIGHTMODE" alt="Darkmode" class="img-menu"/>
          </div>
          <div v-else :class="[appearance === 'Dark' ? 'menu-item-dark' : 'menu-item-light', 'menu-item', 'icon']"
               @click="toggleAppearance('Light')">
            <img :src="appearance === 'Dark' ? CONTENT.LIGHTMODE : CONTENT.DARKMODE" alt="Lightode" class="img-menu"/>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div>
    <div :class="[appearance === 'Dark' ? 'menu-responsive-dark' : 'menu-responsive-light', 'menu-responsive']">
      <div class="menu-item" @click="scrollToSection('home')">
        <img :src="CONTENT.LOGOLONG" alt=" Logo" class="img-menu-long"/>
      </div>
      <div class="menu-item spacer"></div>
      <div v-if="!isMenuOpen" class="menu-item" @click="toggleMenu">
        <img :src="appearance === 'Dark' ? CONTENT.MENULIGHT : CONTENT.MENUDARK" alt="Menu" class="img-menu"/>
      </div>
      <div v-if="isMenuOpen" class="menu-item" @click="toggleMenu">
        <img :src="appearance === 'Dark' ? CONTENT.CLOSELIGHT : CONTENT.CLOSEDARK" alt="Lightode" class="img-menu"/>
      </div>
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
  height: 60px;
  position: fixed;
  width: 100vh;
  z-index: 1000;
  transform-origin: top left;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.menu-light {
  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.5) 50%, transparent 100%);
}

.menu-dark {
  background: linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.5) 50%, transparent 100%);
}

.menu-left {
  top: 100vh;
  transform: rotate(-90deg) translateY(-75px)
}

.menu-right {
  top: 0;
  transform: rotate(90deg) translateY(-1125px)
}

.menu-item {
  width: 150px;
  height: 50px;
  margin: 5px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.menu-item:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

.menu-item-light {
  background: rgba(255, 255, 255, 0.4);
}

.menu-item-light:hover {
  background: rgba(255, 255, 255, 0.7);
}

.menu-item-dark:hover {
  background: rgba(0, 0, 0, 0.7);
}

.menu-item-dark {
  background: rgba(0, 0, 0, 0.5);
}

.icon {
  width: 50px;
}

.left {
  transform: rotate(90deg);
}

.left:hover {
  transform: scale(1.05) rotate(90deg);
  transition: transform 0.3s ease;
}

.right {
  transform: rotate(-90deg);
}

.right:hover {
  transform: scale(1.05) rotate(-90deg);
  transition: transform 0.3s ease;
}

.spacer {
  width: 100px;
  cursor: crosshair;
}

.spacer-right {
  width: 90px;
  cursor: crosshair;
}

.img-menu {
  height: 50px;
  width: 50px;
  cursor: pointer;
}

.img-menu-long {
  width: 120px;
  cursor: pointer;
}

@media screen and (max-width: 1150px) {
  .menu-left,
  .menu-right {
    display: none;
  }

  .menu-responsive {
    z-index: 1000;
    margin: -50px auto;
    display: flex;
    position: fixed;
    height: 60px;
    width: 100vw;
    max-width: 1050px;
  }

  .menu-responsive-light {
    background: rgba(255, 255, 255, 80%);
  }

  .menu-responsive-dark {
    background: rgba(0, 0, 0, 80%);
  }

  .spacer {
    width: calc(100vw - 200px);
  }

  .menu-spacer {
    height: 50px;
  }

  .elements {
    display: flex;
    position: fixed;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
  }

  .elements-light {
    background-image: radial-gradient(
        farthest-corner at 0% 200%,
        orange 0%,
        transparent 100%
    ), radial-gradient(
        farthest-corner at 500% 0%,
        blue 0%,
        #fff 100%
    );
  }

  .elements-dark {
    background-image: radial-gradient(
        farthest-corner at 0% 200%,
        orange 0%,
        transparent 100%
    ), radial-gradient(
        farthest-corner at 500% 0%,
        blue 0%,
        #2d2d2d 100%
    );
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