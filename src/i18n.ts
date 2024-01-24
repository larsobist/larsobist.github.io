import {createI18n} from 'vue-i18n'
import en from './locales/en.json'
import de from './locales/de.json'

export const i18n = createI18n({
    locale: "de",
    fallbackLocale: "en",
    // Must be set to 'false', to use Composition API
    legacy: false,
    // Refer a global scope Composer instance of i18n
    globalInjection: true,
    // Set locale messages
    messages: {
        en,
        de
    },
});
