<template>
  <div class="theme">
    <span
      :class="[
        'theme__item theme__item--light',
        { active: themeMode === 'light' },
      ]"
      @click="setTheme('light')"
    >{{ $t('themes.light') }}</span>
    <AppUiSwitch :theme="themeMode" @changed="setTheme" />
    <span
      :class="[
        'theme__item theme__item--dark',
        { active: themeMode === 'dark' },
      ]"
      @click="setTheme('dark')"
    >{{ $t('themes.dark') }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ThemeSwitchComponent',
})
</script>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import type ThemeType from '@/interfaces/types/theme-types'

const themeMode = ref<ThemeType>('light')

function changeTheme (theme: ThemeType): void {
  const body = document.querySelector('html') as HTMLElement

  theme === 'dark' ? body.classList.add('dark') : body.classList.remove('dark')
}

function setTheme (theme?: ThemeType): void {
  const themeFromLocalStorage: ThemeType = JSON.parse(
    localStorage.getItem('theme_mode') as ThemeType
  )

  if (themeFromLocalStorage && !theme) {
    themeMode.value = themeFromLocalStorage
  } else if (theme) {
    themeMode.value = theme
    localStorage.setItem('theme_mode', JSON.stringify(theme))
  } else {
    localStorage.setItem('theme_mode', JSON.stringify(themeMode.value))
  }

  changeTheme(themeMode.value)
}

onMounted(() => {
  setTheme()
})
</script>
