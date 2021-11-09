import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./utils/vant";
import "./utils/weilingMobileUI"
import "./assets/scss/reset.scss"
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");