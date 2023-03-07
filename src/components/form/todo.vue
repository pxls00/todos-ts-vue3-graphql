<template>
  <form class="form form--todo block" @submit.prevent="submit">
    <div class="form__block">
      <h5 class="form__block-title">{{ $t('todoForm.fieldNames.title') }}:</h5>
      <AppUiInput class='form__field w-100' :type='"text"' v-model='todoValue'
      :placeholder="`${$t('todoForm.placeholders.title')}...`"/>
    </div>
    <div class="form__block">
      <label for="completed_todo" class="checkbox__block">
        <h5 class="form__block-title">{{ $t('todoForm.fieldNames.completed') }}:</h5>
        <AppUiInput
          id="completed_todo"
          class="checkbox__block__input"
          :type="'checkbox'"
          v-model="todoCompleted"
        />
        <span class="checkbox__block__checkbox"></span>
      </label>
    </div>
    <div class="form__block d-flex justify-content-end">
      <AppUiButton :type="'submit'" class="btn"> {{ $t('buttons.submit') }} </AppUiButton>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainTodoForm',
})
</script>

<script lang="ts" setup>
import { ref } from 'vue'

interface NewTodo {
  title: string,
  completed: boolean
}

const todoValue = ref<string>('')

const todoCompleted = ref<boolean>(false)

const emits = defineEmits<{
  (e: 'submit', todoItem: NewTodo): NewTodo
}>()

function submit() {
  const newTodo: NewTodo = {
    title: todoValue.value,
    completed: todoCompleted.value
  }
  if(todoValue.value) {
    emits('submit', newTodo)
  }
  console.log(todoValue.value)
}
</script>
