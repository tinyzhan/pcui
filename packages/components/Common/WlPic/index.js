import WlPic from "./src/index.vue";

WlPic.install = (Vue) => {
  Vue.component(WlPic.name, WlPic);
};

export default WlPic;
