<template>
  <li 
    :class="[props.message ? props.message?.type : 'wait', 'message__item']" 
    >
    <div v-if='!props.message' class="lds-hourglass"></div>
    <div v-if='props.message?.type === "success"' class='message__item__tick'>&#10003;</div>
    <div v-if='props.message?.type === "error"' class='message__item__error'></div>
    <div v-if='props.message?.type === "warning"' class="message__item__warning">!</div>
    <div class="message__item__title">
      <p>{{ $t(props.message ? props.message?.title : 'messages.wait') }}</p>
    </div>
    <button v-if='props.message' class="message__item__close" @click='removeMessage(props.message)'>&times;</button>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppToast',
})
</script>

<script lang="ts" setup>
import type Message from '@/interfaces/message-item'

interface ToastProps {
  message?: Message,
}
const props = defineProps<ToastProps>()
const emits = defineEmits<{
  (e: 'remove', message: Message): Message
}>()

function removeMessage(message: Message | undefined):void {
  if(message) {
    emits('remove', message)
  }
}
</script>

<style lang="scss">
</style>
