import { createApp } from 'vue'
import './assets/main.css'
import { SetupCalendar, Calendar, DatePicker } from 'v-calendar'
import 'v-calendar/dist/style.css';
// import '/assets/vcalendar.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(SetupCalendar, {})
app.component('VCalendar', Calendar)
app.component('VDatePicker', DatePicker)
app.use(router)
app.mount('#app')
