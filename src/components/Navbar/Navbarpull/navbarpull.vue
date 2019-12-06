<template>
  <div class="navbarpull">
    <Navbarslot
      v-bind="$props"
      ref="navbarpull"
      @navleftclick="navleftclick"
      @navrightclick="navrightclick"
      @navmiddleclick="navmiddleclick"
    >
      <slot name="navmiddle" slot="navmiddle"></slot>
      <slot name="navleft" slot="navleft"></slot>
      <slot name="navright" slot="navright"></slot>
    </Navbarslot>
  </div>
</template>

<script lang='ts'>
import Navbarslot from "../Navbarslot/navbarslot.vue";
import {
  Component,
  Prop,
  Vue,
  Provide,
  Mixins,
  Inject
} from "vue-property-decorator";

@Component({
  components: {
    Navbarslot
  },
  mixins: [Navbarslot]
})
export default class Navbarpull extends Vue {
  height() {
    return this.$refs.navbarpull.$refs.navbar.clientHeight + "px";
  }
  navleftclick() {
    this.$emit("navleftclick");
  }
  navrightclick() {
    this.$emit("navrightclick");
  }
  navmiddleclick() {
    this.$emit("navmiddleclick");
  }
  get navbottomstyle() {
    return {
      height: this.height()
    };
  }
}
</script>