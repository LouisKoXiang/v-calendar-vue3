import { createApp } from 'vue'
import './assets/main.css'
import { setupCalendar, Calendar, DatePicker } from 'v-calendar'
import 'v-calendar/style.css'
import './assets/vcalendar.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(setupCalendar, {})
app.component('VCalendar', Calendar)
app.component('VDatePicker', DatePicker)
app.use(router)
app.mount('#app')
