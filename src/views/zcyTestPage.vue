<template>
  <div class="container">
    <!-- <WlPic
      src="https://img1.baidu.com/it/u=1251916380,3661111139&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=800"
      picClass="picClass"
    /> -->
    <WlTable :columns="columns" :dataSource="dataSource"/>
  </div>
</template>

<script>
import { columns, dataSource } from "../utils/myTest"
export default {
  name: "zcyTestPage",
  data() {
    return {
      columns,
      dataSource
    };
  },
  methods: {},
};
</script>

<style lang="scss" scope>
.container {
  background-color: #fff;
  padding: 20px;
}
.picClass {
  max-width: 200px;
  max-height: 500px;
  object-fit: cover;
}
</style>
