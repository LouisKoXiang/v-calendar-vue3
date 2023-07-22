<template>
  <div>
    <router-link to="/">
      <div class="mt-4">
        <h1 className="text-3xl font-bold underline">Back Home</h1>
      </div>
    </router-link>
    <CustomInput class="mt-4" v-model="searchText" @change="changeInput" />
    bind-value:  {{ searchText }}
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import  CustomInput  from '../components/CustomInput.vue'

const changeInput = () => {
    console.log("change")
}

const searchText = ref()
</script>


