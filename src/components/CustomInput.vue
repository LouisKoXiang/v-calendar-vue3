<template>
  <div>
    <input v-model="value" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
export default defineComponent({
  props: {
    to: {
      type: String
    },
    modelValue: String // previously was `value: String`
  },
  setup (props, { emit }) {
    const value = computed({
      get () {
        return props.modelValue
      },
      set (value) {
        emit('update:modelValue', value)
        emit('update:change', value)
      }
    })
    return {
      value
    }
  }
})
</script>
