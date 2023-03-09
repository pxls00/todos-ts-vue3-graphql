<template>
  <ul class="sort__list">
    <li class="sort__item" v-for="sortItem in options" :key="sortItem.value">
      <AppUiButton
        :type="'submit'"
        :class="['btn', { 'btn--unselected': !sortItem.active }]"
        @clicked="changeSortOption(sortItem.value)"
        >{{ $t(`sort.${sortItem.value}`) }}</AppUiButton
      >
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SortTodosComponent',
})
</script>

<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue'

import SORT_OPTIONS from '@/constants/sort-options'
import type SortOption from '@/interfaces/todo-sort-item'
import type SortOptions from '@/interfaces/types/get-todos-sort-options'

const emits = defineEmits<{
  (e: 'sortBy', sortOption: SortOptions): SortOptions
}>()

const options = ref<SortOption[]>(
  SORT_OPTIONS.map((item: SortOptions): SortOption => {
    return {
      value: item,
      active: item === 'all' ? true : false,
    }
  })
)

function changeSortOption(sortItem: SortOptions) {
  let optionItem = options.value.find(
    (item: SortOption): boolean => item.value === sortItem
  ) as SortOption
  options.value.forEach((item: SortOption) => (item.active = false))
  optionItem.active = !optionItem.active
  localStorage.setItem('sort_by', sortItem)
}

watch(
  options,
  () => {
    const sortOption = options.value.find(
      (item: SortOption): boolean => item.active
    ) as SortOption
    emits('sortBy', sortOption.value)
  },
  { deep: true }
)

onMounted(() => {
  const sortOptionSaved = JSON.parse(
    JSON.stringify(localStorage.getItem('sort_by'))
  ) as SortOptions
  if (sortOptionSaved) {
    emits('sortBy', sortOptionSaved)
    changeSortOption(sortOptionSaved)
  } else {
    changeSortOption('all')
  }
})
</script>
