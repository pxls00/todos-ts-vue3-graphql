<template>
  <form class='form form--todo block' @submit.prevent='submit'>
    <div class="form__block">
    <h5 class='form__block-title'>Name:</h5>
      <AppUiInput class='form__field w-100' :type='"text"' v-model='todoValue' placeholder='Title of todo...'/>
    </div>
    <div class="form__block">
      <label for="completed_todo" class='checkbox__block'>
        <h5 class='form__block-title'>Completed:</h5>
        <AppUiInput id='completed_todo' class='checkbox__block__input' :type='"checkbox"' v-model='todoCompleted'/>
        <span class='checkbox__block__checkbox'></span>
      </label>
    </div>
    <div class="form__block d-flex justify-content-end">
      <AppUiButton :type='"submit"' class='btn'>
        Submit
      </AppUiButton>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainTodoForm',
})
</script>

<script lang='ts' setup>
import { ref } from 'vue'

const todoValue = ref<string>('')

const todoCompleted = ref<boolean>(false)

function submit() {
  console.log(todoValue.value)
}
</script>
