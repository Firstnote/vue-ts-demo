<template>
  <navbarsearch @navleftclick='goback'></navbarsearch>
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