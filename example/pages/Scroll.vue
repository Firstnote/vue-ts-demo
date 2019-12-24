<template>
  <div class="zl-scroll-wrap">
    <scroll
      ref="scroll"
      :options="options"
      @pulling-up="onPullingUp"
      @pulling-down="onPullingDown"
      :item="items"
      :scroll-events="['scroll']"
      @scroll="onScrollHandle"
    >
      scroll-test
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item-bottom</p>
    </scroll>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pullDownRefreshObj: {
        threshold: 60,
        stop: 40,
        stopTime: 1000,
        txt: "刷新成功"
      },
      pullUpLoadObj: {
        threshold: 0,
        txt: { more: "上拉加载更多", noMore: "我是有底线的" }
      },
      items: []
    };
  },
  computed: {
    options() {
      return {
        pullDownRefresh: this.pullDownRefreshObj,
        pullUpLoad: this.pullUpLoadObj,
        scrollbar: true
      };
    }
  },
  methods: {
    onPullingDown() {
      // 模拟更新数据
      let that = this;
      setTimeout(() => {
        this.$refs.scroll.forceUpdate(true);
      }, 1000);
    },
    onPullingUp() {
      // 模拟更新数据
      let that = this;

      setTimeout(() => {
        //param = true有新数据，false或空为无新数据
        this.$refs.scroll.forceUpdate(true);
      }, 1000);
    },
    onScrollHandle(pos) {}
  }
};
</script>
<style lang='less'>
.zl-scroll-wrap {
  width: 100%;
  height: 80vh;
  overflow: hidden;
}
</style>