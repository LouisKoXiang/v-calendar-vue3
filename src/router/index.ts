import { createRouter, createWebHistory } from "vue-router";
import UsuariosView from "../views/home.vue"
import VMultipleDateSelect from "../views/VMultipleDateSelect.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: UsuariosView,
    },
    {
      path: "/VMultipleDateSelect",
      name: "VMultipleDateSelect",
      component: VMultipleDateSelect,
    },
  ],
});

export default router;
