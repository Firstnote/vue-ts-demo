## Navbarsearch

根据业务需求定制，封装自navbarslot组件，仅仅是navbarslot样式的变化，用法和API均与navbarslot相同，吸顶所需设置的类名变更为```.navbarsearch```

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
|title|标题|*string|-|'单标题'|
|numofpeople|当前浏览人数|*number|-|0|
|msgnum|左侧信息数量|*number|-|14|

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| navleftclick | 左侧信息点击事件 | event: Event |
| navrightclick | 右侧导航点击事件 | event: Event |
| navmiddleclick | 中间搜索点击事件 | event: Event |