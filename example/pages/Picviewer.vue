<template>
  <Picviewer @back=back @finish=finish :type="type"></Picviewer>
</template>

<script>
  export default{
    data(){
      return{
        type:'back'
      }
    },
    methods: {
      back(){
        console.log('goback')
      },
      finish(){
        console.log('finish')
      }
    }
  };
</script>