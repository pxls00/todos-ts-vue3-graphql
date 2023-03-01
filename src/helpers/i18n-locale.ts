import i18n from '@/i18n'
import type localeType from '@/interfaces/types/locale-types'
import { nextTick } from 'vue'

export default {
  get currentLocale():localeType {
    return i18n.global.locale.value
  },

  set currentLocale(newLocale: localeType) {
    i18n.global.locale.value = newLocale
  },

  get savedLocaleLanguage(): localeType {
    const savedLocale = JSON.parse(localStorage.getItem('user_lang') as string) as localeType
    if(savedLocale) {
      return savedLocale
    } else {
      const defaultLocale = import.meta.env.VITE_DEFAULT_LOCALE
      localStorage.setItem('user_lang', JSON.stringify(defaultLocale))
      return defaultLocale
    }
  },

  set savedLocaleLanguage(newLocale:localeType) {
    localStorage.setItem('user_lang', JSON.stringify(newLocale))
  },

  changeDocumentLanguage(newLocale:localeType): void {
    const html = document.querySelector('html') as HTMLHtmlElement
    html.setAttribute('lang', newLocale)
  },

  switchLanguage(newLocale: localeType): Promise<void> {
    return new Promise((resolve) => {
      resolve(this.loadLocaleMessages(newLocale))
    }).then(() => {
      this.currentLocale = newLocale
      this.changeDocumentLanguage(newLocale)
      this.savedLocaleLanguage = newLocale
    }).catch((e) => {
      console.error(e)
    })
  },

  async loadLocaleMessages(locale: localeType) {
    if (!i18n.global.availableLocales.includes(locale)) {
      const messages = await import(`@/i18n/locales/${locale}.json`)
      i18n.global.setLocaleMessage(locale, messages)
    }
    return nextTick()
  },
}
