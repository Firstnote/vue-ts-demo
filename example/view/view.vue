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
      }
    }
  }
</script>