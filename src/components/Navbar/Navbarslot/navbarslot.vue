<template funtional>
    <!-- 外层 -->
  <!-- 导航主体 -->
  <div class="navbar" ref="navbar" :style="navStyle">
    <!-- 头部机型适配 -->
    <div :style="navTopSpace">
      {{position}}
    </div>
    <!-- 浏览人数信息 -->
    <div v-if="numofpeopledata" class="message">
      <span>
        当前有{{ numofpeople }}人在浏览该产品
      </span>
    </div>
    <!-- 遮罩层 -->
    <slot name="navcover"></slot>
    <!-- 导航栏内容 -->
    <div class="navcontent" ref="navcontent">
      <div class="navmiddle" @click="navmiddleclick">
        <slot name="navmiddle" v-bind="$props">
          <span class="navmiddlespan" ref="navmiddlespan">
            {{ title }}
          </span>
        </slot>
      </div>
      <div class="navleft" @click="navleftclick">
        <slot name="navleft">
          <span class="navleftspan">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-jiantou2" />
            </svg>
          </span>
        </slot>
      </div>
      <div class="navright" @click="navrightclick">
        <slot name="navright">
          <span class="navrightspan">我的定制</span>
        </slot>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import '../../../utils/iconfont.js'
import {Component, Prop, Vue, Inject,Provide} from 'vue-property-decorator';

@Component
export default class Navbarslot extends Vue {
  @Prop({
    required: false,
    default: true
  })
  public readonly sticky!:boolean;

  @Prop({
    required: false,
    default: false
  })
  public readonly fixed!:boolean;

  @Prop({
    required: false,
    default: '标题'
  })
  public readonly title!:string;

  @Prop({
    required: false,
    default: 10
  })
  public readonly numofpeople!:number;


  @Prop({
    required: false
  })
  fnc!:any

  methods= {
    on:{
      listen(){
        console.log('listen')
      }
    }
  }

  get numofpeopledata(){
    return this.numofpeople
  }
  get phoneversion() {
      var is = navigator.appVersion.toLocaleLowerCase().indexOf("iphone");
      if (is > 0) {
        var height = window.screen.height;
        if (height == 812 || height == 896) {
          return 44;
        } else {
          return 22;
        }
      } else {
        return 0;
      }
    }
  get position() {
      if (this.fixed) {
        return "fixed";
      } else if (this.sticky) {
        return "sticky";
      } else {
        return "relative";
      }
    }
  get navStyle() {
      return {
        position: this.position
      };
    }
  get navTopSpace(){
    return {
      height:this.phoneversion+'px'
    }
  }
  navleftclick() {
    
      this.$emit("navleftclick");
      // console.log(this.$props.fn)
      // this.$props.goback()
      this.$props.fnc.fnc()
  }
  navrightclick() {
      this.$emit("navrightclick");
  }
  navmiddleclick() {
      this.$emit("navmiddleclick");
      console.log(this.$listeners.toString())
  }
  // goback(){

  // }
}
const slot = new Navbarslot
console.log('slot',slot)
</script>
<style lang='less'>
.navbar {
  /* overflow: hidden; */
  top: 0;
  z-index: 100;
  width: 100%;
  text-align: center;
  background: rgba(223, 48, 49);
}
.navcontent {
  position: relative;
  vertical-align: middle;
}
.navcontent .navmiddle {
  width: 100%;
  height: 42px;
  p{
    margin: 0
  }
}
.navcontent .navleft {
  position: absolute;
  top: 0;
  left: 0;
}
.navcontent .navright {
  position: absolute;
  top: 0;
  right: 0;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.navleftspan {
  color: white;
  font-size: 36px;
  line-height: 42px;
}
.navrightspan {
  color: white;
  line-height: 42px;
}
.navmiddlespan {
  color: white;
  font-size: 30px;
  line-height: 42px;
}
.message{
  position: absolute;
  bottom:-40px;
  left: 0;
  right: 0;
  /* background: rgba(255, 133, 0); */
  /* width: 300px; */
  height: 30px;
}
.message span{
  background: rgba(255, 133, 0);
  padding: 2px 50px;
  border-radius: 10px;
  color: aliceblue;
  font-size: 14px;
}
</style>
