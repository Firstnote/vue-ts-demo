<template>
<div>
  <div @click="tolayout">
    点击跳转layout
  </div>
  <div @click="tonavslottest">
    点击跳转navbarslot
  </div>
  <div @click="tonavsimpletest">
    点击跳转navbarsimple
  </div>
  <div @click="tonavsearchtest">
    点击跳转navbarsearch
  </div>
  <div @click="tonavpulltest">
    点击跳转navbarpull
  </div>
  <div @click="tocharttest">
    点击跳转chart
  </div>
</div>

</template>
<script>
  export default {
    data(){
      return {
      }
    },
    methods:{
      tolayout(){
        this.$router.push('/nonavbarview/layout')
      },
      tonavslottest(){
        this.$router.push('/navbarview/navbarslot')
      },
      tonavsimpletest(){
        this.$router.push('/navbarview/navbarsimple')
      },
      tonavsearchtest(){
        this.$router.push('/navbarview/navbarsearch')
      },
      tonavpulltest(){
        this.$router.push('/navbarpullview')
      },
      tocharttest(){
        this.$router.push('/nonavbarview/chart')
      }
    }
  }
</script>