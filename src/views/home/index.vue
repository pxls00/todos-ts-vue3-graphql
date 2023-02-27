<template>
  <div class='home'>
    <FormTodo />
    <TodoList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'HomePage',
  components: {
    FormTodo,
    TodoList
  }
})
</script>

<script setup lang="ts">
import FormTodo from '@/components/form/todo.vue'
import TodoList from '@/components/todo/list.vue'
</script>
