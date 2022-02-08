import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./utils/vant";
import "./utils/weilingMobileUI"
import "./assets/scss/reset.scss"
import "../packages/components/Common/WlTable/src/assets/css/index.scss"
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
