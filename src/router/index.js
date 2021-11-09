import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/lxl",
    name: "lxl",
    component: () => import("../views/lxlTestPage.vue"),
  },
  {
    path: "/yx",
    name: "yx",
    component: () => import("../views/yxTestPage.vue"),
  },
  {
    path: "/xk",
    name: "xk",
    component: () => import("../views/xkTestPage.vue"),
  },
  {
    path: "*",
    name: "Home",
    component: () => import("../views/lxlTestPage.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
