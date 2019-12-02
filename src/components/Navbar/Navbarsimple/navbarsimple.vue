<template functional>
<div>
	<Navbarslot ref="navbarsimple" :numofpeople='0' :fnc='props.fnc' v-on="navleftclick">
    <template slot="navmiddle">
			<p class="firsttitle">{{ props.title }}</p>
			<p class="secondtitle">{{ props.secondtitle }}</p>
		</template>
		<!-- <template slot="navright">
			<div class="simpleright">
				<img src="../../../assets/more.png" />
				<span></span>
			</div>
		</template> -->
		<!-- <template slot="navcover">
			<div class="navcoverwrap" v-if="covershow" @click="coverclick">
				<div class="navcover" :style="navcoverstyle"></div>
				<div class="contentcover">
					<div class="menubox">
						<div class="menusearch" @click="navsearchclick">
							<img src="../../../assets/search.png" />
							搜索
						</div>
						<div class="menuserver" @click="navserverclick">
							<img src="../../../assets/server.png" />
							我的客服
						</div>
					</div>
				</div>
			</div>
		</template> -->
	</Navbarslot>
  {{$options.computed.navcoverstyle.get()}}
  ========
</div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Inject ,Provide ,Mixins} from "vue-property-decorator";
import Navbarslot from "../Navbarslot/navbarslot.vue";
// console.log(Navbarslot)
// const newprops:any = Navbarslot.props
// ({props:{...Navbarslot.props}})
class Slot extends Navbarslot {
}

@Component({
  components:{
    Navbarslot
  },
  mixins:[Slot],
})
export default class Navbarsimple extends Vue {
  methods={
    on:{
      'click':()=>{
        console.log('click')
      }
    }
  }
	@Prop({
    required:false,
	  default: '测试标题123'
  })
  public readonly secondtitle!:string
  
  @Prop({
    required:false,
    default:8888
  })
  fn12!:number

  @Prop({
    required:false,
    default:function(){
      return {
        fnc:function(){
          console.log('zanghua')
        }
      }
    }
  })
  fnc!:any
  // get fn(){
  //   return 123
  //   // return {
  //   //   fn:function(){
  //   //       console.log(123)
  //   //     }
  //   // }
  // }
  fn123=()=>{
    return 12332
  }

  get navcoverstyle() {
		return "30px";
  }
  
  navleftclick(){
    console.log(213124)
  }
  
}
const nav = new Navbarsimple
console.log('nav.$props',nav.$props)
console.log('nav.$methods',nav.$options.computed.navStyle.get())
</script>
<style>

.navsimplewrap {
  width: 100%;
  height: 100vh;
}
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
.navbar {
  background: rgba(255, 133, 0);
}
.simpleright {
  width: 42px;
  height: 42px;
  margin: 0;
  padding: 0;
  vertical-align: middle;
  text-align: center;
}
.simpleright img {
  width: 30px;
  height: 30px;
  vertical-align: middle;
  /* text-align: center; */
  margin: 0 auto;
}
.simpleright span {
  height: 42px;
  line-height: 42px;
}
.navcoverwrap {
  position: absolute;
  width: 100%;
  z-index: 111;
  height: 100vh;
  top: 0;
  overflow: hidden;
}
.navcover {
  width: 100%;
  background: none;
}
.contentcover {
  width: 100%;
  height: 100vh;
  background: rgba(128, 128, 128, 0.5);
}
.menubox {
  float: right;
  width: 130px;
  background: rgba(64, 64, 64, 0.8);
  border-radius: 4px;
  margin-top: 2px;
  text-align: left;
  color: rgb(209, 209, 209);
}
.menusearch {
  line-height: 30px;
  width: 100%;
  height: 30px;
  padding-left: 10px;
  border-bottom: 1px solid rgb(128, 128, 128);
  vertical-align: middle;
}
.menubox img {
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
.menuserver {
  line-height: 30px;
  padding-left: 10px;
  width: 100%;
  height: 30px;
}
</style>

