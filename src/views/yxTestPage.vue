<template>
  <div class="container">
    <div style="float:right">
      <MtOperIcon :sortPopoverActions="sortPopover" />
    </div>
    <MtGroupList
      :list="groupList"
      :group_scope="group_scope"
      @onEdit="onFieldEdit"
      @onAdd="onFieldAdd"
      @onDelete="onFieldDelete"
      @onDragEnd="onGroupSort"
      deleteDialogTitle="删除分组，分组中的话术将归类到默认分组中"
      deleteDialogDescription="同时删除分组中的话术"
    />
    <WlSteps :onSelectIndex="2" :list="step" />
    <div class="test-container">
      表单
      <WlRenderForm v-model="renderFromData" labelPosition="top" :list="renderform">
        <div slot="test">13245</div>
      </WlRenderForm>
    </div>
    <MtLocation
      data="https://mphttps://mp.weixin.qq.com/tye…"
      :editable="true"
      :list="['123123', '123123']"
    />
    <MtPicList
      imgKey="img"
      valueKey="key"
      :unChosedColor="'white'"
      :isMultiple="true"
      :list="picList"
      @onChange="onChange"
      v-model="data"
    />
    <!-- <MtUpdateDialog
      title="title"
      version="version"
      isH5="true"
      triangleColor="#91D4DA"
      :headerPng="require('@packages/assets/images/Frame.png')"
    >
      <div class="msg">😱😱不一般的「销售报表」，直接告诉你what to do，我今天有8个客户需要处理合同/发票噢~<br><br>😎😎可以在「发现」里看到所有“@”、评论和点赞了！还可以看到隔壁组销冠每天都发一条朋友圈，悄咪咪学习的时候别忘了给人家点赞噢~<br><br>😔😔对接人过多，没完没了的拉齐怎么破？！「企业视图」整合了所有企业相关信息，协作力拉到顶！</div>
    </MtUpdateDialog> -->
    <div class="test-container">
      按钮
      <WlButton @onClick="onClick">默认按钮</WlButton>
      <WlButton size="small" icon="&#xe75a;" type="default" url="https://www.baidu.com"
        >test</WlButton
      >
      <WlButton size="large" type="success" to="/lxl">test</WlButton>
      <WlButton size="mini" type="info">test</WlButton>
      <WlButton shape="round" type="warning">test</WlButton>
      <WlButton shape="circle" type="danger">test</WlButton>
      <WlButton shape="circle" size="mini">test</WlButton>
      <WlButton pain type="success" themeColor="green">test</WlButton>
      <WlButton disabled type="success">test</WlButton>
      <WlButton type="link" textColor="red">test</WlButton>
    </div>
    <WlSearchList />
    <div class="test-container">
      悬浮码
      <div style="height: 200px;position: relative">
        <MtSuspensionCode
          type="static"
          title="test"
          subtitle="123123"
          imgUrl="https://pica.zhimg.com/80/6a10d31f4ad8f62ae3920d846d94be79_720w.jpg?source=1940ef5c"
          :needCos="true"
          :position="'suspension'"
          suspensionSize="small"
          @onClick="onClick"
        />
      </div>
      <div style="height: 200px;">
        <MtSuspensionCode
          type="static"
          title="test"
          subtitle="123123"
          imgUrl="https://wlmvp-cos.weiling.cn/1633952362921_7c28b467-2b33-4941-83db-05676a084711.png"
          :needCos="true"
          position="fixed"
        />
      </div>
      <div style="position: relative;height: 80px">
        <MtSuspensionCode
          type="avtatar"
          text="test"
          imgUrl="https://pica.zhimg.com/80/6a10d31f4ad8f62ae3920d846d94be79_720w.jpg?source=1940ef5c"
          :needCos="true"
        />
      </div>
      <div style="position: relative;height: 80px">
        <MtSuspensionCode
          type="circular"
          text="test"
          imgUrl="https://pica.zhimg.com/80/6a10d31f4ad8f62ae3920d846d94be79_720w.jpg?source=1940ef5c"
          :needCos="true"
        />
      </div>
      <MtSuspensionCode
        type="msg"
        text="test"
        imgUrl="https://pica.zhimg.com/80/6a10d31f4ad8f62ae3920d846d94be79_720w.jpg?source=1940ef5c"
        subtitle="123123"
        :needCos="true"
      />
    </div>
  </div>
</template>

<script>
import { picList, step, renderform } from "../utils/testData";
export default {
  name: "yxTestPage",
  data() {
    return {
      picList: picList,
      step,
      renderform,
      data: [],
      showPicker: false,
      renderFromData: {
        color: "black",
        ipt: "",
        pic: 0,
        select: 0,
      },
      sortPopover: [
        {
          text: "按修改时间",
          value: 0,
          sort: "desc",
          prop: "time",
        },
        {
          text: "按发送次数",
          value: 1,
          sort: "desc",
          prop: "view",
        },
      ],
    };
  },
  methods: {
    onClick(data) {
      console.log(this.renderFromData);
      this.renderFromData = {
        ...this.renderFromData,
        ipt: "1232134321455645zasfdasdasdf",
      };
      console.log(this.renderFromData);
      console.log(123, data);
    },
    onChange(data) {
      console.log(data);
    },
  },
};
</script>

<style lang="scss" scope>
.container {
  background-color: white;
  height: 100%;
}
.test {
  width: 100%;
  max-width: j(200px) !important;
  word-break: break-word;
  text-overflow: ellipsis;
  box-sizing: border-box;
}
.test-container {
  margin: 50px 0;

  background-color: white;
}
</style>
