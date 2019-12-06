<template>
  <div class="navbarsimple">
    <Navbarslot @navrightclick="navrightclick" v-bind="$props" ref="navbarsimple" @navleftclick="navleftclick" @navmiddleclick='navmiddleclick'>
      <template slot="navmiddle" slot-scope="props">
        <div class="firsttitle">{{ props.title }}</div>
        <div class="secondtitle">{{ secondtitle }}</div>
      </template>
      <template slot="navright">
        <div class="simpleright">
          <img src="../../../common/img/more.png" />
          <span></span>
        </div>
      </template>
      <template slot="navcover">
        <div class="navcoverwrap" v-if="covershow" @click="coverclick">
          <div class="navcover" :style="navcoverstyle"></div>
          <div class="contentcover">
            <div class="menubox">
              <div class="menusearch" @click="navsearchclick">
                <img src="../../../common/img/search.png" />
                搜索
              </div>
              <div class="menuserver" @click="navserverclick">
                <img src="../../../common/img/server.png" />
                我的客服
              </div>
            </div>
          </div>
        </div>
      </template>
    </Navbarslot>
  </div>
</template>

<script lang='ts'>
import Navbarslot from "../Navbarslot/navbarslot.vue";
import {
  Component,
  Prop,
  Vue,
  Mixins
} from "vue-property-decorator";

@Component({
  components: {
    Navbarslot
  },
  mixins: [Navbarslot]
})
export default class Navbarsimple extends Vue {
  @Prop({
    required: false,
    default: "xiaobiaoti"
  })
  secondtitle!: string | number;

  covershow: boolean = false;

  navrightclick() {
    this.covershow = true;
    this.$emit("navrightclick");
  }
  navmiddleclick(){
    this.$emit("navmiddleclick");
  }
  navleftclick(){
    this.$emit("navleftclick");
  }
  coverclick() {
    this.covershow = false;
  }
  navsearchclick() {
    this.$emit("navsearchclick");
  }
  navserverclick() {
    this.$emit("navserverclick");
  }
  get navcoverstyle() {
    return {
      height: this.$refs.navbarsimple.$refs.navbar.clientHeight + "px"
    };
  }
}
</script>
<style lang='less'>
.navbarsimple {
  .navbar {
    .firsttitle {
      height: 26px;
      line-height: 26px;
      font-size: 18px;
      color: white;
    }
    .secondtitle {
      height: 16px;
      line-height: 16px;
      font-size: 12px;
      color: white;
    }
    .simpleright {
      width: 42px;
      height: 42px;
      margin: 0;
      padding: 0;
      vertical-align: middle;
      text-align: center;
      img {
        width: 30px;
        height: 30px;
        vertical-align: middle;
        /* text-align: center; */
        margin: 0 auto;
      }
      span {
        height: 42px;
        line-height: 42px;
      }
    }
    .navcoverwrap {
      position: absolute;
      width: 100%;
      z-index: 111;
      height: 100vh;
      top: 0;
      overflow: hidden;
      .navcover {
        width: 100%;
        background: none;
        overflow: hidden;
      }
      .contentcover {
        width: 100%;
        height: 100vh;
        background: rgba(128, 128, 128, 0.5);
        .menubox {
          float: right;
          width: 130px;
          background: rgba(64, 64, 64, 0.8);
          border-radius: 4px;
          margin-top: 2px;
          text-align: left;
          color: rgb(209, 209, 209);
          img {
            width: 20px;
            height: 20px;
            vertical-align: middle;
          }
        }
        .menusearch {
          line-height: 30px;
          width: 100%;
          height: 30px;
          padding-left: 10px;
          border-bottom: 1px solid rgb(128, 128, 128);
          vertical-align: middle;
        }
        .menuserver {
          line-height: 30px;
          padding-left: 10px;
          width: 100%;
          height: 30px;
        }
      }
    }
  }
}
</style>