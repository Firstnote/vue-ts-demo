<template>
  <div>
    <navbarsimple :title="'测试'"></navbarsimple>
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
  }


}

</script>