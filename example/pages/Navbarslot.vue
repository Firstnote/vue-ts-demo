<template>
  <navbarslot :numofpeople='numofpeople' @navleftclick="goback"></navbarslot>
</template>
<script>
  export default {
    data(){
      return {
        numofpeople:90
      }
    },
    mounted(){
      let self = this
      setTimeout(()=>{
        self.numofpeople = 0
      },5000)
    },
    methods:{
      goback(){
        
        this.$router.go(-1)
      }
    }
  }
</script>
<style lang='less' scoped>
  .navbar{
    position: sticky;
    top:0
  }
</style>