<template>
  <div class="navbarsearch">
    <Navbarslot
      v-bind="$props"
      v-on="$listeners"
    >
      <template slot="navleft">
        <div class="msgimgwrap">
          <img src="../../../common/img/msg.png" class="msgimg" />
          <div class="msgnum" v-show="msgnum">{{ msgnum }}</div>
        </div>
      </template>
      <template slot="navright">
        <div class="menuwrap">
          <span class="menu">导航</span>
        </div>
      </template>
      <template slot="navmiddle">
        <div class="navsearch">
          <img src="../../../common/img/search.png" class="searchimg" />
          <span>股票代码或拼音简称</span>
          <!-- <span class="inputspan"></span> -->
        </div>
      </template>
    </Navbarslot>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Provide } from "vue-property-decorator";
import Navbarslot from "../Navbarslot/navbarslot.vue";

@Component({
  components: {
    Navbarslot
  },
  mixins: [Navbarslot]
})
export default class Navbarsearch extends Vue {
  @Prop({
    required: false,
    default: 14
  })
  msgnum!: number;
}
</script>
<style lang='less'>
.navbarsearch {
  .navbar {
    background: red;
    .navmiddle {
      height: 60px;
      color: aliceblue;
      overflow: hidden;
      .navsearch {
        background: rgba(255, 255, 255, 0.2);
        width: 235px;
        height: 40px;
        padding: 0;
        margin: 10px auto 0;
        vertical-align: middle;
        line-height: 40px;
        .searchimg {
          width: 22px;
          height: 22px;
          vertical-align: middle;
        }
      }
    }
    .msgimgwrap {
      width: 70px;
      height: 60px;
      position: relative;
      .msgimg {
        width: 44px;
        height: 44px;
        margin: 6px auto;
      }
      .msgnum {
        position: absolute;
        width: 20px;
        height: 16px;
        background: orange;
        border-radius: 50% 50%;
        top: 10px;
        right: 10px;
        color: aliceblue;
        line-height: 16px;
        font-size: 12px;
      }
    }
    .menuwrap {
      width: 70px;
      height: 60px;
      .menu {
        line-height: 60px;
        color: beige;
      }
    }
  }
}
</style>