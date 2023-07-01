import { createApp } from 'vue'
import './style.css'
import { setupCalendar, Calendar, DatePicker } from 'v-calendar';
import 'v-calendar/style.css'
import './assets/vcalendar.css'

import App from './App.vue'
import router from "./router";

// createApp(App).use(setupCalendar, {}).component('VCalendar', Calendar).component('VDatePicker', DatePicker).mount('#app')


const app = createApp(App);
app.use(setupCalendar, {})
app.component('VCalendar', Calendar);
app.component('VDatePicker', DatePicker);
app.use(router);
app.mount("#app");