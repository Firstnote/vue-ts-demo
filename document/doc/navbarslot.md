## Navbarslot

头部导航，一个简易的块级组件。

## 代码演示

### 基本用法

```html
<navbarslot :numofpeople='8' :title="'zlui'"></navbarslot>
<content><content>
```
navbar时常会有吸顶的业务需求，如果遇到此类需求，只需要进行如下设置
```html
<style>
  .navbar{
    position:sticky;
    top:0;
  }
</style>
```

或者自行使用块状元素包裹并进行定位设置

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
|title|标题|*string|-|'单标题'|
|numofpeople|当前浏览人数|*number|-|0|

### 插槽

| 名字 | 说明 | 作用域参数 |
|------|------|------|
|navleft|左侧插槽（默认箭头区域）|-|
|navright|右侧插槽（默认定制区域）|-|
|navmiddle|中间插槽（默认标题区域）|props|

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| navleftclick | 左侧插槽点击事件 | event: Event |
| navrightclick | 右侧插槽点击事件 | event: Event |
| navmiddleclick | 中间插槽点击事件 | event: Event |