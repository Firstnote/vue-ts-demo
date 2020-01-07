<template> 
    <navbarsimple :title="'测试'" :numofpeople='0' @navleftclick='goback'></navbarsimple>
</template>
<script>
export default {
  data(){
    return {
      fn:{
        fn:function(){
          console.log(123)
        }
      }
    }
  },
  methods:{
    goback(){
       this.$router.go(-1)
     }
  }

}

</script>
<style scoped>
.navbarsimple{
  position: sticky;
  top: 0;
}
</style>