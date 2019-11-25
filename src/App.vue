<template>
	<div id="app">
		<p @click="test">333</p>
		<row-item
			:gutter="60"
			:type="'flex'"
			:justify="'center'"
			:align="'center'"
			@click="test1"
		>
			<col-item :span="14" @click="test">
				<div>1</div>
				<div>1</div>
				<div>1</div>
				<div>1</div>
			</col-item>
			<col-item :span="10">1 </col-item>
		</row-item>
	</div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

import ColItem from './components/col.vue';
import RowItem from './components/row.vue';

@Component({
  components: {
    ColItem, // 声明子组件的引用
    RowItem,
  },
})
export default class App extends Vue {
  public name = 'app';

  public styleobj: any = {};
  public msg = 'Welcome to Your Vue.js App';
  public sticky = true;
  public left = true;
  public height = 40;
  public titleStyle: any = {
    color: 'skyblue',
    fontSize: '25px',
  };
  public leftStyle = {
    color: 'skyblue',
    fontSize: '25px',
  };
  public background = 'none';
  public titlestyleobject: any = {
    fontWeight: 900,
  };
  public title = '大标题';
  public titlecontent = 'welcome to my object';
  public bgbackground = 'tomato';
  public pullDownY!: number;
  public options: any = {
    pullDownRefresh: {
      threshold: 100,
      stop: 60,
      stopTime: 1000,
      txt: '更新成功',
    },
  };


  public test() {
    // alert("yes");
    // console.log('yes');
  }
  public test1(fn: any) {
    // setTimeout(() => {
    //   fn();
    // }, 1000);
    // console.log(1);
  }
  public scrollHandler(pos: any) {
    this.pullDownY = pos.y;
  }
  public navleftclick() {
    alert('navleftclick');
  }
  public navrightclick() {
    alert('navrightclick');
  }
  public navmiddleclick() {
    alert('navmiddleclick');
  }
  get pullDownText() {
      if (this.pullDownY <= 0) {
        return;
      }
      if (this.pullDownY <= 60) {
        return '下拉刷新...';
      } else if (this.pullDownY <= 90) {
        return 'keep...';
      } else {
        return '松手得惊喜！';
      }
    }

}
</script>

<style>
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	/* text-align: center; */
	color: #2c3e50;
}
.classtest {
	width: 100%;
	background: red;
}
.classtest {
	color: blue;
	position: fixed;
	top: 82px;
}
.testspan {
	width: 30px;
	background: red;
}
</style>
