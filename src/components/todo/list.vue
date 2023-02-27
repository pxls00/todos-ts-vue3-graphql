<template>
  <ul>
    <TodoItem />
  </ul>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

import TodoItem from '@/components/todo/item.vue'

export default defineComponent({
  name: 'TodoListComponent',
  components: {
    TodoItem
  }
})
</script>

<script lang='ts' setup></script>