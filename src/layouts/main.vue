<template>
  <main>
    <AppMessagesHandle />
    <AppNavbar />
    <div class="wrapper">
      <div class="wrapper-content">
        <RouterView />
      </div>
    </div>
    <AppFooter />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import AppNavbar from '@/components/app/navbar.vue'
import AppFooter from '@/components/app/footer.vue'
import AppMessagesHandle from '@/components/app/messages-handle.vue'

export default defineComponent({
  name: 'DefaultLayout',
})
</script>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
</script>
