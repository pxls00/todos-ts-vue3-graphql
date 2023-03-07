<template>
  <TransitionGroup name="list" tag="ul" class="todo__list">
    <Todo
      v-for="todo in props.todos"
      :key="todo.id"
      :todo="todo"
      @update="updateTodo"
      @delete="deleteTodo"
    />
  </TransitionGroup>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Todo from '@/components/todo/item.vue'

export default defineComponent({
  name: 'TodoListComponent',
  components: {
    Todo,
  },
})
</script>

<script lang="ts" setup>
import { ref } from 'vue'
import type IdType from '@/interfaces/types/request-id'
import type TodoItem from '@/interfaces/todo-item'

interface TodosProps {
  todos: TodoItem[]
}

const props = defineProps<TodosProps>()
const emits = defineEmits<{
  (e: 'updateTodo', todoItem: TodoItem): TodoItem,
  (e: 'deleteTodo', id: IdType): IdType
}>()

function updateTodo(updateTodo: TodoItem): void {
  emits('updateTodo', updateTodo)
}

function deleteTodo(id: IdType):void {
  emits('deleteTodo', id)
}
</script>

<style lang="scss">
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
