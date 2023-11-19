<script setup lang="ts">
  import {apppearance, setVisualAppearance} from "@/stores/store";

  const toggleAppearance = (appearance: string) => {
    setVisualAppearance(appearance);
  };

</script>

<template>
  <div class="border">
    <h2>{{ $t('Skills') }}</h2>
    <div>
      <button v-if="$i18n.locale !== 'en'" class="btn" @click="$i18n.locale = 'en'"
              :class="{ active: $i18n.locale === 'en' }">{{ $t('Lang-Change-English') }}
      </button>
      <button v-else class="btn" @click="$i18n.locale = 'de'" :class="{ active: $i18n.locale === 'de' }">
        {{ $t('Lang-Change-German') }}
      </button>
    </div>

    <div>
      <button v-if="apppearance === 'Light'" class="btn" @click="toggleAppearance('Dark')">{{ $t('Darkmode') }}</button>
      <button v-else class="btn" @click="toggleAppearance('Light')">{{ $t('Lightmode') }}</button>
    </div>
  </div>
</template>

<style scoped>

</style>