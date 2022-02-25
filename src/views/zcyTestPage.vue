<template>
  <div class="container">
    <!-- <WlPic
      src="https://img1.baidu.com/it/u=1251916380,3661111139&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=800"
      picClass="picClass"
    /> -->
    <WlTable :columns="columns" :data="data" size="large">
      <template #email="scope">
        !!!{{scope.data.email}}!!!
      </template>
      <template #range="scope">
        !!!{{scope.data.range}}!!!
      </template>
    </WlTable>

    <template v-for="(item, index) in focus">
      <WlCards :data="item" :key="index"/>
    </template>
  </div>
</template>

<script>
import { columns, data, focus, history } from "../utils/myTest";

export default {
  name: "zcyTestPage",
  data() {
    return {
      columns,
      data,
      focus,
      history
    };
  },
  methods: {

  },
};
</script>

<style lang="scss" scope>
.container {
  background-color: #fff;
  padding: 60px;
}
.picClass {
  max-width: 200px;
  max-height: 500px;
  object-fit: cover;
}
</style>
