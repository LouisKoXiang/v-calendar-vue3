import { createRouter, createWebHistory } from "vue-router";
import UsuariosView from "../views/home.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: UsuariosView,
    },
  ],
});

export default router;
