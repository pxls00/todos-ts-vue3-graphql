<template>
  <div class="home">
    <FormTodo @submit="onAddTodo" />
    <SortTodo @sortBy="sortTodos" />
    <TodoList
      :todos="todos"
      @updateTodo="onUpdateTodo"
      @deleteTodo="onDeleteTodo"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FormTodo from '@/components/form/todo.vue'
import TodoList from '@/components/todo/list.vue'
import SortTodo from '@/components/sort/todo.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    FormTodo,
    TodoList,
    SortTodo,
  },
})
</script>

<script setup lang="ts">
import fetchWrapper from '@/helpers/fetch-wrapper'

import type TodoItem from '@/interfaces/todo-item'
import type IdType from '@/interfaces/types/id'
import type NewTodo from '@/interfaces/newtodo-item'

import type GqlApi from '@/interfaces/graphql'
import type Toast from '@/interfaces/toast'

import type SortOptions from '@/interfaces/types/get-todos-sort-options'
import type SortQueryOptions from '@/interfaces/get-todos-sort-argument'

import { onMounted, ref, inject } from 'vue'

const toast = inject('toast') as Toast
const gql = inject('gql') as GqlApi

const todos = ref<any[]>([])

const sortOptionTodo = ref<SortOptions>()

async function fetchTodos(
  sort: SortQueryOptions = { completed: 'all' },
  search: string = '',
  limit: number = 20
): Promise<void> {
  try {
    toast.waitAction()
    const {
      data: {
        todos: { data },
      },
    } = await fetchWrapper(gql.todos.getTodos(sort, search, limit))
    todos.value = data as any[]
  } catch (error) {
    console.log(error)
  } finally {
    toast.stopAction()
  }
}

async function onAddTodo(todoItem: NewTodo): Promise<void> {
  try {
    toast.waitAction()
    const {
      data: { createTodo },
    } = await fetchWrapper(gql.todos.createTodo(todoItem))
    todos.value.unshift(createTodo)
  } catch (error) {
    console.log(error)
  } finally {
    toast.stopAction()
  }
}

async function onUpdateTodo(todoItem: TodoItem): Promise<void> {
  try {
    toast.waitAction()
    await fetchWrapper(gql.todos.updateTodo(todoItem))
    const todo = todos.value.find(
      (item: TodoItem): boolean => item.id === todoItem.id
    ) as TodoItem | undefined
    if (todo) {
      todo.completed = todoItem.completed
    }
  } catch (error) {
    console.log(error)
  } finally {
    toast.stopAction()
  }
}

async function onDeleteTodo(id: IdType): Promise<void> {
  try {
    toast.waitAction()
    await fetchWrapper(gql.todos.deleteTodo(id))
    todos.value = todos.value.filter(
      (item: TodoItem): boolean => item.id !== id
    )
  } catch (error) {
    console.log(error)
  } finally {
    toast.stopAction()
  }
}

async function sortTodos(sortOption: SortOptions): Promise<void> {
  if (sortOptionTodo.value !== sortOption) {
    sortOptionTodo.value = sortOption
    await fetchTodos({ completed: sortOption })
  }
}
</script>
