<template>
  <div class="container">
    <WlPic
      src="https://img1.baidu.com/it/u=1251916380,3661111139&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=800"
      picClass="picClass"
    />
    <WlFixedMenu/>
  </div>
</template>

<script>
export default {
  name: "lxlTestPage",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scope>
.container {
}
.picClass {
  max-width: 200px;
  max-height: 500px;
  object-fit: cover;
}
</style>
