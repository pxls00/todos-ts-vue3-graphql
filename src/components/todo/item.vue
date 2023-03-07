<template>
  <li :class="['todo__item block', {'completed': props.todo.completed}]">
    <label :for="props.todo.id.toString()" class="checkbox__block todo__item-checkbox">
      <AppUiInput
        :id="props.todo.id"
        class="checkbox__block__input"
        :type="'checkbox'"
        v-model='complete'
      />
      <span class="checkbox__block__checkbox"></span>
    </label>
    <div class="todo__item-content">
      <router-link :to="{name: 'todo-item', params: {
        id: props.todo.id
      }}" class="todo__item-title">{{ props.todo.title }}</router-link>
    </div>
    <AppUiButton
     :type="'button'"
     class="todo__item-delete"
     @click='deleteTodo'
    >&times;</AppUiButton
    >
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TodoItemComponent',
})
</script>

<script lang="ts" setup>
import { computed } from 'vue'

import type IdType from '@/interfaces/types/request-id'
import type TodoItem from '@/interfaces/todo-item'

interface TodoItemProps {
  todo: TodoItem
}

const props = defineProps<TodoItemProps>()

const emits = defineEmits<{
  (e: 'update', updateTodo: TodoItem): TodoItem,
  (e: 'delete', todo: IdType): IdType
}>()

const complete = computed<boolean>({
  get() {
    return props.todo.completed
  },

  set(newValue: boolean) {
    const updatedItem = {
      ...props.todo
    }
    updatedItem.completed = newValue
    emits('update', updatedItem)
  }
})

function deleteTodo():void {
  emits('delete', props.todo.id)
}

</script>
