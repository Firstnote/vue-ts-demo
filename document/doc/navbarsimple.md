## Navbarsimple

根据业务需求定制的双标题nav头部导航。由navbarslot封装而来

## 代码演示

### 基本用法
```html
<navbarsimple :secondtitle="'二级标题'"></navbarsimple>
<content></content>
```
由于该组件是封装自navbarslot，所以基本用法和navslot类似，同样的，若需要实现吸顶效果，只需对类名```.navbarsimple```进行设置，或者用块状元素包裹设置。

组件右侧定制部分点击会弹出遮罩层，遮罩层是根据业务需求进行定制。
## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
|title|标题|*string|-|'单标题'|
|numofpeople|当前浏览人数|*number|-|0|
|secondtitle|二级标题|*string\|*number|-|"xiaobiaoti"|

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| navleftclick | 左侧插槽点击事件 | event: Event |
| navrightclick | 右侧插槽点击事件 | event: Event |
| navmiddleclick | 中间插槽点击事件 | event: Event |
| navsearchclick | 遮罩层搜索点击事件 | event: Event |
| navserverclick | 遮罩层服务点击事件 | event: Event |