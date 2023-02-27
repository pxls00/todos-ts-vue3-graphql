<template>
  <button v-bind='$attrs' :type='props.type' @click='buttonClicked'>
    <slot />
  </button>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppUiButton'
})
</script>

<script lang='ts' setup>

import type buttonTypes from '@/interfaces/types/button-types';

interface buttonProps{
  type: buttonTypes,
}

const props = withDefaults(defineProps<buttonProps>(), {
  type: "button",
})

const emits = defineEmits(['clicked'])

function buttonClicked() {
  emits('clicked')
}

</script>