import "@packages/assets/scss/iconfont.css";

//公共组件库
import WlPic from "./components/Common/WlPic";
import WlTable from "./components/Common/WlTable"

const components = [
  //公共组件
  WlPic,
  WlTable
];

const install = function(Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install, // 全量引入
  //公共组件
  WlPic,
  WlTable
};
