<template>
  <div id="actionSheet" :class="{'bg':turnOn}" @click="turnOff">
    <transition name="turnup">
      <div class="turnup" v-show="names === 'turnup'">
        <slot name="popup"></slot>
      </div>
    </transition>
    <transition name="turndown">
      <div class="turndown" v-show="names === 'turndown'">
        <slot name="popup"></slot>
      </div>
    </transition>
    <transition name="turnleft">
      <div class="turnleft" v-show="names === 'turnleft'">
        <slot name="popup"></slot>
      </div>
    </transition>
    <transition name="turnright">
      <div class="turnright" v-show="names === 'turnright'">
        <slot name="popup"></slot>
      </div>
    </transition>
  </div>
</template>
 
<script lang="ts">
import { Component, Prop, Vue, Emit,Watch} from "vue-property-decorator";

@Component
export default class Zlpopup extends Vue {
   //names:String = "turnup";

  @Prop({default:"turnup"}) names !:string;  
  @Prop({ default: false }) turnOn!: boolean;
  show:string = this.names;
  //turnOn1: boolean = this.turnOn;
//   @Watch("names")
//   hander(val){
//       this.show = val
//   }

  @Emit("sendoff") send(turnoff:Boolean){}
  turnOff() {
      this.show = "";
      this.send(false);
  }
  updated () {
    //   this.show = this.names;
      console.log(this.show);
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
#actionSheet {
  width: 100%;
  height: 100%;
}
.bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
}


.turnup {
  width: 100%;
  height: 30%;
  background-color: #fff;
  position: fixed;
  bottom: 0px;
  left:0px;
}
.turndown {
    width:100%;
    height:30%;
    background-color:#fff;
    position: fixed;
    top:0px;
    left:0px;
}
.turnright {
    width: 30%;
    height: 100%;
    background-color: #fff;
    position: fixed;
    left:0px;
    top:0px;
}
.turnleft {
    width: 30%;
    height:100%;
    background-color:#fff;
    position:fixed;
    right:0px;
    top:0px;
}
.turnup-enter-active {
  transition: all 0.4s ease;
}
.turnup-leave-active {
  transition: all 0.5s ease;
}
.turnup-enter,.turnup-leave-to {
  transform: translateY(200px);
}

.turndown-enter-active {
  transition: all 0.4s ease;
}
.turndown-leave-active {
  transition: all 0.5s ease;
}
.turndown-enter,
.turndown-leave-to {
  transform: translateY(-200px);
}
.turnright-enter-active {
    transition: all 0.4s ease;
}
.turnright-leave-active {
    transition: all 0.5s ease;
}
.turnright-enter,
.turnright-leave-to {
    transform: translateX(-200px);
}
.turnleft-enter-active {
    transition: all 0.5s ease;
}
.turnleft-leave-active {
    transition: all 0.5s ease;
}
.turnleft-enter,
.turnleft-leave-to {
    transform: translateX(200px);
}
</style>