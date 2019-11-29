<template>
<div>
  <navbarslot @navleftclick="goback"></navbarslot>
  <router-view />
</div>
</template>

<script>
 export default {
   methods:{
     goback(){
       this.$router.go(-1)
     }
   }
 }
</script>