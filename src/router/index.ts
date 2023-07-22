import { createRouter, createWebHistory } from 'vue-router'
import UsuariosView from '../views/home.vue'
import VMultipleDateSelect from '../views/VMultipleDateSelect.vue'
import Popover from '../views/Popover.vue'
import UseComponent from '../views/UseComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: UsuariosView
    },
    {
      path: '/VMultipleDateSelect',
      name: 'VMultipleDateSelect',
      component: VMultipleDateSelect
    },
    {
      path: '/UseComponent',
      name: 'UseComponent',
      component: UseComponent
    },
    {
      path: '/Popover',
      name: 'Popover',
      component: Popover
    }
  ]
})

export default router
