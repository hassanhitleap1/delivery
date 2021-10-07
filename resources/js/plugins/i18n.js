import Vue from 'vue'
import VueI18n from'vue-i18n';

Vue.use(VueI18n);

function checkDefaultLanguage() {
    let matched = null
    let languages = Object.getOwnPropertyNames(loadLocaleMessages())
    languages.forEach(lang => {
        if (lang === navigator.language) {
            matched = lang
        }
    })
    if (!matched) {
        languages.forEach(lang => {
            let languagePartials = navigator.language.split('-')[0]
            if (lang === languagePartials) {
                matched = lang
            }
        })
    }
    if (!matched) {
        languages.forEach(lang => {
            let languagePartials = navigator.language.split('-')[0]
            if (lang.split('-')[0] === languagePartials) {
                matched = lang
            }
        })
    }
    return matched
}

export const selectedLocale =
    checkDefaultLanguage() || process.env.VUE_APP_I18N_LOCALE || 'en'
export  const languages = Object.getOwnPropertyNames(loadLocaleMessages())
export default new VueI18n({
    locale: selectedLocale,
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
    messages: loadLocaleMessages()
})


