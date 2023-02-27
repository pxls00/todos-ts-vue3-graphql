<template>
  <label class="theme-switch" for="checkbox">
    <input type="checkbox" v-model='value' class="theme-switch-input" id="checkbox" />
    <div class="slider round"></div>
  </label>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'AppUiSwitch',
})
</script>

<script lang='ts' setup>
import type ThemeType from '@/interfaces/types/theme-types';

interface SwitchProps {
  theme: ThemeType
}

const props = defineProps<SwitchProps>()

const emits = defineEmits(['changed'])

const value = computed<boolean>({
  get() {
    return props.theme === "dark" ? true : false
  },
  set(newValue) {
    emits('changed', newValue ? 'dark' : 'light')
  }
})
</script>

<style lang="scss">
.theme-switch {
  display: inline-block;
  height: 26px;
  position: relative;
  width: 48px;
  margin: 10px;
  .theme-switch-input {
    display: none;
  }
}

.slider {
  background-color: #ccc;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.4s;

  &::before {
    background-color: #fff;
    bottom: 4px;
    content: '';
    height: 18px;
    width: 18px;
    left: 5px;
    position: absolute;
    transition: 0.2s;
  }
}

.theme-switch-input:checked + .slider {
  background-color: #66bb6a;
}

.theme-switch-input:checked + .slider::before {
  transform: translateX(20px);
}

.slider.round {
  border-radius: 12px;
}

.slider.round::before {
  border-radius: 50%;
}
</style>
