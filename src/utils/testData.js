export const step = [
  {
    id: "1",
    text: "绑啊啊啊啊啊啊",
  },
  {
    id: "2",
    text: "设啊啊啊啊置",
  },
  {
    id: "3",
    text: "预览aaaaaa",
  },
];

export const renderform = [
  {
    prop: "color",
    type: "color-select",
    label: "",
    colorList: ["white", "black", "rgb(255, 255, 255)", "yellow"],
    styleExtra: {
      border: "1px solid #EEEEEE;",
    },
  },
  {
    prop: "ipt",
    type: "input",
    label: "选择颜色啊啊啊啊啊啊啊",
    placeholder: "123123",
    border: true,
  },
  {
    prop: "ipt",
    type: "select-input",
    label: "选择颜色啊啊啊啊啊啊啊",
    placeholder: "aasd",
    selectStyleExtra: {
      width: "2.4rem",
      maxHeight: "1.9rem",
      overflow: "auto",
    },
    maxLength: 6,
    actions: [
      { text: "选项一", className: "test", icon: "icon-lishijilu" },
      { text: "选项asdasdasdasasd二asdasd", className: "test", icon: "icon-lishijilu" },
      { text: "选项三", className: "test", icon: "icon-lishijilu" },
      { text: "选项一", className: "test", icon: "icon-lishijilu" },
      { text: "选项二asdasdasd阿斯顿", className: "test", icon: "icon-lishijilu" },
      { text: "选项三", className: "test", icon: "icon-lishijilu" },
    ],
  },
  {
    prop: "pic",
    type: "pic-select",
    label: "选择颜色",
    imgKey: "",
    styleExtra: {
      //   width: "72px",
      //   height: "54px",
    },
    showText: false,
    list: [
      "http://wework.qpic.cn/bizmail/A4y9XedSkPCwNj2nZl1r42dGPbq8bAib7yLUiceusHPkib9K52kxf6DVg/100?imageView2/1/w/100/h/100/q/85=",
      "https://panjiachen.gitee.io/gitee-cdn/vue-element-admin-site/1bc334a6-32a8-4f29-a037-ac3f5ce32588.png",
      "https://panjiachen.gitee.io/gitee-cdn/vue-element-admin-site/1bc334a6-32a8-4f29-a037-ac3f5ce32588.png",
      "https://panjiachen.gitee.io/gitee-cdn/vue-element-admin-site/1bc334a6-32a8-4f29-a037-ac3f5ce32588.png",
      "https://panjiachen.gitee.io/gitee-cdn/vue-element-admin-site/1bc334a6-32a8-4f29-a037-ac3f5ce32588.png",
      "https://panjiachen.gitee.io/gitee-cdn/vue-element-admin-site/1bc334a6-32a8-4f29-a037-ac3f5ce32588.png",
      "https://panjiachen.gitee.io/gitee-cdn/vue-element-admin-site/1bc334a6-32a8-4f29-a037-ac3f5ce32588.png",
      "https://panjiachen.gitee.io/gitee-cdn/vue-element-admin-site/1bc334a6-32a8-4f29-a037-ac3f5ce32588.png",
    ],
    event: {
      onChange: () => {
        console.log(123123);
      },
    },
  },
  {
    prop: "pic",
    type: "pic-select",
    label: "选择颜色",
    space: "0.27rem",
    styleExtra: {
      width: "48px",
      height: "75px",
    },
    list: [
      {
        img:
          "https://panjiachen.gitee.io/gitee-cdn/vue-element-admin-site/1bc334a6-32a8-4f29-a037-ac3f5ce32588.png",
        text: "啊实打实",
      },
      {
        img:
          "https://panjiachen.gitee.io/gitee-cdn/vue-element-admin-site/1bc334a6-32a8-4f29-a037-ac3f5ce32588.png",
        text: "1啊实打实的23",
      },
    ],
    event: {
      onChange: () => {
        console.log(123123);
      },
    },
  },
  {
    prop: "select",
    type: "select",
    label: "选择颜色",
    valueKey: "text",
    placeholder: "123123",
    list: [{ text: "选项一123213412341234" }, { text: "选项二" }, { text: "选项三" }],
  },
];

export const picList = [
  {
    img:
      "https://panjiachen.gitee.io/gitee-cdn/vue-element-admin-site/1bc334a6-32a8-4f29-a037-ac3f5ce32588.png",
    text: "123",
    key: "1",
  },
  {
    img:
      "https://panjiachen.gitee.io/gitee-cdn/vue-element-admin-site/1bc334a6-32a8-4f29-a037-ac3f5ce32588.png",
    text: "123",
    key: "5",
  },
  {
    img:
      "https://panjiachen.gitee.io/gitee-cdn/vue-element-admin-site/1bc334a6-32a8-4f29-a037-ac3f5ce32588.png",
    text: "123",
    key: "4",
  },
  {
    img:
      "https://panjiachen.gitee.io/gitee-cdn/vue-element-admin-site/1bc334a6-32a8-4f29-a037-ac3f5ce32588.png",
    text: "123",
    key: "3",
  },
  {
    img: "http://wework.qpic.cn/bizmail/x4dM9DIfiaVQeO3h98tNylG781xI6TKRB65nX3CbQVEUmjR0yCDVFibw/0",
    text: "123",
    key: "2",
  },
];
