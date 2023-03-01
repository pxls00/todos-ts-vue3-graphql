<template>
  <nav>
    <div class="logo">{{ $t('logo') }}</div>
    <div class="actions">
      <ThemeSwitch />
      <div class="actions__line"></div>
      <LangSelect />
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ThemeSwitch from '@/components/app/theme-switch/index.vue'
import LangSelect from '@/components/app/lang-select/index.vue'

export default defineComponent({
  name: 'AppNavbar',
  components: {
    ThemeSwitch,
    LangSelect
  }
})
</script>