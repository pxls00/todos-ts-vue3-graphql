<template>
  <select v-model='options' class='select'>
    <option v-for='item in props.options' :key='item.value' :value='item.value'>{{ item.title }}</option>
  </select>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppUiSelect',
})
</script>

<script lang="ts" setup>
import { computed } from 'vue'

// Type and Interfaces
import type localeItem from '@/interfaces/locale-item';
import type localeValueType from '@/interfaces/types/locale-types'


interface selectProps {
  modelValue: localeItem,
  options: localeItem[] 
}

const props = defineProps<selectProps>()
const emits = defineEmits<{
  (e:'update:modelValue', modelValue: localeItem):localeItem
}>()

const options = computed<localeValueType>({
  get() {
    return props.modelValue.value
  },
  set(newValue: localeValueType) {
    const selectedOption = props.options.find(item => item.value === newValue) as localeItem
    emits('update:modelValue', selectedOption)
  }
})
</script>
