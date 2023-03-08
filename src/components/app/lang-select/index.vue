<template>
  <AppUiSelect v-model="selectedLang" :options="languages" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LangSelectComponent',
})
</script>

<script lang="ts" setup>
import { computed } from 'vue'
import LANGUAGES from '@/constants/locales'
import i18nLocale from '@/helpers/i18n-locale'
import { useI18n } from 'vue-i18n'

// Type and Interfaces
import type localeItem from '@/interfaces/locale-item'
import type localeValueType from '@/interfaces/types/locale-types'

const { t } = useI18n()

const selectedLang = computed<localeItem>({
  get() {
    const lang: localeValueType = i18nLocale.currentLocale === i18nLocale.savedLocaleLanguage ? i18nLocale.currentLocale : i18nLocale.savedLocaleLanguage
    let option = {} as localeItem
    if (lang) {
      i18nLocale.switchLanguage(lang)
      option = LANGUAGES.find((item) => item.value === lang) as localeItem
    } else {
      i18nLocale.switchLanguage(i18nLocale.currentLocale)
      option = LANGUAGES.find(
        (item) => item.value === i18nLocale.currentLocale
        ) as localeItem
      }
    return option
  },
  set(newVal: localeItem) {
    i18nLocale.switchLanguage(newVal.value)
  },
})
const languages = computed<localeItem[]>(() => {
  if (i18nLocale.currentLocale) {
    return LANGUAGES.map((item: localeItem) => {
      return {
        value: item.value,
        title: t(`locales.${item.title}`),
      }
    })
  }
  return []
})
</script>
