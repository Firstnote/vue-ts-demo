<template>
<div>
  <navbarslot @navleftclick="goback"></navbarslot>
  <router-view />
</div>
</template>

<script lang='ts'>
import { Component, Prop, Vue} from "vue-property-decorator";

@Component
 export default class Noview extends Vue {
  
     goback(){
       this.$router.go(-1)
     }
   
 }
</script>