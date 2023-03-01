<template>
  <component :is='MainLayout'>
    <RouterView />
  </component>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainLayout from '@/layouts/main.vue'
</script>

<style scoped>
</style>
