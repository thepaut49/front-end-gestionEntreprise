import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Wasureta from "../views/Wasureta.vue";
import LoginForm from "../views/LoginForm.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/Wasureta",
    name: "Wasureta",
    component: Wasureta,
  },
  {
    path: "/LoginForm",
    name: "LoginForm",
    component: LoginForm,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
