<template functional>
  <div class="zl-loading">
    <span class="zl-loading-spinners" :style="$options.computed.style.get()">
      <i class="zl-loading-spinner" v-for="item in 12" :key="item"></i>
    </span>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Inject, Provide } from "vue-property-decorator";
@Component
export default class Loading extends Vue {
  balde: number = 12;
  @Prop({
    default: 12
  })
  size!: number;
  get style() {
    if (!this.size) {
      return;
    }
    const value = `${this.size}px`;
    return {
      width: value,
      height: value
    };
  }
}
</script>
<style lang="stylus">
@keyframes spinner-fade {
  0% {
    opacity: 0.85;
  }

  50% {
    opacity: 0.25;
  }

  100% {
    opacity: 0.25;
  }
}
.zl-loading {
  font-size: 24px;
}

.zl-loading-spinners {
  position: relative;
  display: block;
  width: 1em;
  height: 1em;
}

.zl-loading-spinner
  position absolute
  left 44.5%
  top 37%
  width 2px
  height 25%
  border-radius 50% / 20%
  opacity 0.25
  background-color #ddd
  animation spinner-fade 1s linear infinite
  for i in (1...13)
    &:nth-child({i})
      animation-delay (i - 1)/12s
      transform rotate(30deg * (i - 6)) translateY(-150%)
</style>
