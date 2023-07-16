<template>
  <div>
    <router-link to="/VMultipleDateSelect">
      <div class="mt-4">
        <h1 className="text-3xl font-bold underline">Go To VMultipleDateSelect</h1>
      </div>
    </router-link>
    <h1 className="text-3xl font-bold underline mt-3">VCalendar</h1>
    <VCalendar
      ref="calendar"
      :masks="{ title: 'MMM YYYY年' }"
      @transition-end="vCalendarAddEventListener"
      borderless
    />
    <!--   :locale="{ id: 'en', firstDayOfWeek: 2, masks: { weekdays: 'WWW' } }"  */ -->
    <h1 className="text-3xl font-bold underline">VDatePicker</h1>
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
import { ref, onMounted } from 'vue'
const date = ref(new Date())
const calendar = ref()

const vCalendarAddEventListener = () => {
  const button = document.querySelector('.vc-title') as unknown as HTMLElement
  button.addEventListener('click', async function () {
    const div = (await document.querySelector(
      '.vc-nav-title'
    )) as unknown as HTMLElement
    console.log(div)
    const yearToString = div.innerText.toString()
    if (yearToString.substr(-1) === '年') return
    div.innerText = div.innerText + '年'
    const arrowRight = (await document.querySelector(
      '.is-right'
    )) as unknown as HTMLElement
    arrowRight.addEventListener('click', async function () {
      const div = (await document.querySelector(
        '.vc-nav-title'
      )) as unknown as HTMLElement
      console.log(div)
      div.innerText = div.innerText + '年'
    })
    const arrowLeft = (await document.querySelector(
      '.is-left'
    )) as unknown as HTMLElement
    arrowLeft.addEventListener('click', async function () {
      const div = (await document.querySelector(
        '.vc-nav-title'
      )) as unknown as HTMLElement
      console.log(div)
      div.innerText = div.innerText + '年'
    })

    arrowLeft.addEventListener('click', async function () {
      const div = (await document.querySelector(
        '.vc-nav-title'
      )) as unknown as HTMLElement
      console.log(div)
      div.innerText = div.innerText + '年'
    })

    const temp1 = (await document.querySelector(
      '.vc-nav-item' + '.vc-focus' + '.is-active'
    )) as unknown as HTMLElement

    temp1.addEventListener('click', async function () {
      calendar.value.moveBy(1)
      calendar.value.moveBy(-1)
    })
  })
}
onMounted(() => {
  vCalendarAddEventListener()
})
</script>
