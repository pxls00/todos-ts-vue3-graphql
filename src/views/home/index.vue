<template>
  <main>
    <FormTodo />
    <TodoList />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'HomePage',
})
</script>

<script setup lang="ts">
import FormTodo from '@/components/form/todo.vue'
import TodoList from '@/components/todo/list.vue'
</script>
