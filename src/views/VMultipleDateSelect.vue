<template>
  <div>
    <router-link to="/">
      <div class="mt-4">
        <h1 className="text-3xl font-bold underline">Back Home</h1>
      </div>
    </router-link>
    <h1 className="text-3xl font-bold underline mt-4">VMultipleDateSelect</h1>
    <div
      class="border-2 w-95 flex flex-col mt-4 rounded-lg"
      style="width: 340px"
    >
      <div class="flex justify-center mt-1">
        <div class="text-xl">
          {{ title }}
        </div>
      </div>
      <div class="flex justify-center mt-1">
        {{ subTitle }}
      </div>
      <div class="grid grid-cols-7 gap-3 mt-3">
        <div v-for="item in daysObj" :key="item.day" class="text-center">
          <button
            :class="[
              'rounded-full',
              item.isSelect ? 'bg-teal-500  text-white' : ''
            ]"
            @click="item.isSelect = !item.isSelect"
            style="width: 30px; height: 30px"
          >
            {{ item.day }}
          </button>
        </div>
      </div>
      <div class="flex justify-center my-4">
        <button
          @click="selectDays"
          class="w-full text-xs py-2 bg-teal-500 mx-2 text-white p-1"
        >
          確定
        </button>
      </div>
    </div>
    <div class="mt-1">ShowValue : {{ showValue }}</div>
    <div class="mt-1">
      <button
        class="bg-emerald-400 rounded-full text-white"
        @click="reset"
        style="width: 100px"
      >
        reset
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'

const title = ref('預約週期')
const subTitle = ref('請選擇轉帳日期(可複選)')

const daysObj = ref()
const showValue = ref()

const fetchData = () => {
  daysObj.value = []
  daysObj.value = [
    {
      day: 1,
      isSelect: false
    }
  ]
  while (daysObj.value.length < 30) {
    const index = daysObj.value.length - 1
    daysObj.value.push({
      day: daysObj.value[index].day + 1,
      isSelect: false
    })
  }
}

fetchData()
const reset = () => {
  showValue.value = ''
  fetchData()
}

// 顯示轉帳週期
const selectDays = () => {
  const filteredDays = daysObj.value.filter(
    (item: { isSelect: boolean }) => item.isSelect
  )
  const selectedDays = filteredDays.map((item: { day: number }) => item.day)
  showValue.value = selectedDays
}

onMounted(() => {})
</script>
