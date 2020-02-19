<template>
  <div>
    <div @click="totest">点击测试</div>
    <div @click="tolayout">点击跳转layout</div>
    <div @click="tonavslottest">点击跳转navbarslot</div>
    <div @click="tonavsimpletest">点击跳转navbarsimple</div>
    <div @click="tonavsearchtest">点击跳转navbarsearch</div>
    <div @click="tonavpulltest">点击跳转navbarpull</div>
    <div @click="tocharttest">点击跳转chart</div>
    <div @click="toaddresspickerviewtest">点击跳转addresspicker</div>
    <div @click="toscrollviewtest">点击跳转scroll</div>
    <div @click="topicviewertest">点击跳转picviewer</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    totest() {
      this.$router.push("/nonavbarview/test");
    },
    tolayout() {
      this.$router.push("/nonavbarview/layout");
    },
    tonavslottest() {
      this.$router.push("/navbarview/navbarslot");
    },
    tonavsimpletest() {
      this.$router.push("/navbarview/navbarsimple");
    },
    tonavsearchtest() {
      this.$router.push("/navbarview/navbarsearch");
    },
    tonavpulltest() {
      this.$router.push("/navbarpullview");
    },
    tocharttest() {
      this.$router.push("/nonavbarview/chart");
    },
    toaddresspickerviewtest() {
      this.$router.push("./nonavbarview/addresspicker");
    },
    toscrollviewtest(){
      this.$router.push("./nonavbarview/scroll")
    },
    topicviewertest(){
      this.$router.push("./nonavbarview/picviewer")
    }
  }
};
</script>