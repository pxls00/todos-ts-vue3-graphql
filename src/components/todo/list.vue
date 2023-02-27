<template>
  <TransitionGroup name="list" tag="ul" class="todo__list">
    <Todo
      v-for="todo in todos"
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
import { reactive } from 'vue'
import type IdType from '@/interfaces/types/request-id'
import type TodoItem from '@/interfaces/todo-item'

const todos = reactive<TodoItem[]>([
  {
    title: 'Todo item 1',
    completed: true,
    id: 1,
    comments: [
      {
        body: 'Item body comment 1',
        id: 1,
      },
      {
        body: 'Item body comment 2',
        id: 2,
      },
    ],
  },
  {
    title: 'Todo item 2',
    completed: false,
    id: 2,
    comments: [],
  },
  {
    title: 'Todo item 3',
    completed: true,
    id: 3,
    comments: [
      {
        body: 'Item body comment 1',
        id: 1,
      },
      {
        body: 'Item body comment 2',
        id: 2,
      },
      {
        body: 'Item body comment 3',
        id: 3,
      },
      {
        body: 'Item body comment 4',
        id: 4,
      },
    ],
  },
])

function updateTodo(updateTodo: TodoItem): void {
  console.log(updateTodo)
}

function deleteTodo(id: IdType):void {
  console.log(id)
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
