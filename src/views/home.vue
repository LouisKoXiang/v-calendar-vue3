<template>
  <div>
    <h1> VCalendar </h1>
    <VCalendar borderless />
    <h1> VDatePicker </h1>
    <div>
      <VDatePicker :is-dark="false" v-model="date">
        <template #default="{ inputValue, inputEvents }">
          <div class="relative">
            <input :value="inputValue" v-on="inputEvents" />
          </div>
        </template>
      </VDatePicker>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const date = ref(new Date());
</script>
