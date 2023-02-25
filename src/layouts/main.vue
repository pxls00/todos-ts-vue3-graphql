<template>
  <main>
    default layout
    <RouterView />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DefaultLayout',
})
</script>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
</script>
