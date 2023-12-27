import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import de from './locales/de.json'

function loadLocalesMessages() {
    const locales = [{ en: en }, { de: de }]
    const messages = {}
    locales.forEach(lang => {
        const key = Object.keys(lang)
        messages[key] = lang[key]
    })
    return messages
}

export const i18n = createI18n({
    locale: "de",
    fallbackLocale: "en",
    // Must be set to 'false', to use Composition API
    legacy: false,
    // Refer a global scope Composer instance of i18n
    globalInjection: true,
    // Set locale messages
    messages: loadLocalesMessages(),
});