<template>
  <div class="pic-wrap">
    <img
      :src="thumbnialSrc"
      :style="imgStyleComputed"
      :class="`img-style ${imgClassComputed}`"
      :alt="thumbnialSrc"
    />
  </div>
</template>

<script>
/*
 * @Author: Liao.xiuli
 * @Date: 2021-09-18 11:18:59
 * @Last Modified by: Liao.xiuli
 * @Last Modified time: 2021-11-02 17:55:02
 */
import { isBase64 } from "@packages/utils";
export default {
  name: "WlPic",
  props: {
    src: {
      type: String,
      default: "",
    },
    needCos: {
      type: Boolean,
      default: false,
    },
    cosSuffix: {
      type: String,
      default: "imageView2/1/w/100/h/100/q/85",
    },
    radius: {
      type: Boolean,
      default: false,
    },
    picClass: {
      type: String,
      default: "",
    },
    fit: {
      type: String,
      default: "",
    },
  },
  computed: {
    thumbnialSrc: function() {
      //如果是本地图片，即base64的图片，就不用添加图片后缀
      return isBase64(this.src) || !this.needCos ? this.src : this.turnThumbnial(this.src);
    },
    imgStyleComputed() {
      return {
        borderRadius: this.radius ? "50%" : "",
        "object-fit": this.fit,
      };
    },
    imgClassComputed() {
      return this.picClass ? this.picClass : "img-default-style";
    },
  },
  methods: {
    turnThumbnial(url) {
      if (!url) return url;
      const file_type = url.split(".").pop();
      if (file_type === "svg") return url;
      return `${url}?${this.cosSuffix}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.pic-wrap {
  width: 100%;
  height: 100%;
  .img-style {
    display: block;
  }
  .img-default-style {
    width: 100%;
    height: 100%;
  }
}
</style>
