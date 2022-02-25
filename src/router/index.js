import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/zcy",
    name: "zcy",
    component: () => import("../views/zcyTestPage.vue")
  },
  {
    path: "*",
    name: "Home",
    component: () => import("../views/zcyTestPage.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
