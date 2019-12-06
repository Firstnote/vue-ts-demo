<template>
  <div>
    <navbarsimple :title="'测试'" :numofpeople='0' @navleftclick='goback'></navbarsimple>
  </div>
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