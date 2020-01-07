## Navbarpull

带下拉刷新功能的nav组件由业务定制，集成了navbarslot和scroll组件

## 代码演示

### 基本用法

```html
<navbarpull @navleftclick="goback" @pulling-down="onPullingDown">
  <content></content>
</navbarpull>
```

navbarpull的背景设置类名：```.zl-navbarpull .zl-pulldown-wrapper```

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
|title|标题|*string*|-|'单标题'|
|numofpeople|当前浏览人数|*number*|-|0|
更多配置参数详见[Scroll文档]()

### 插槽

| 名字 | 说明 | 作用域参数 |
|------|------|------|
|navleft|左侧插槽（默认箭头区域）|-|
|navright|右侧插槽（默认定制区域）|-|
|navmiddle|中间插槽（默认标题区域）|props|
|pulldowncontent|下拉刷新自定义插槽|props|
|默认插槽|内容区域|-|

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| navleftclick | 左侧插槽点击事件 | event: Event |
| navrightclick | 右侧插槽点击事件 | event: Event |
| navmiddleclick | 中间插槽点击事件 | event: Event |
更多事件详见[Scroll文档]()