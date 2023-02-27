<template>
  <nav>
    <div class="logo">Todo Creator</div>
    <div class="actions">
      <ThemeSwitch />
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ThemeSwitch from '@/components/theme/index.vue'

export default defineComponent({
  name: 'AppNavbar',
  components: {
    ThemeSwitch
  }
})
</script>