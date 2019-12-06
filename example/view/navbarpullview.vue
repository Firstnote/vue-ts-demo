<template>
<navbarpull @navleftclick='goback'></navbarpull>

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