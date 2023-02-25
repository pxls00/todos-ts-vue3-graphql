<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainLayout from '@/layouts/main.vue'
</script>

<template>
  <component :is='MainLayout'>
    <RouterView />
  </component>
</template>

<style scoped>
</style>
