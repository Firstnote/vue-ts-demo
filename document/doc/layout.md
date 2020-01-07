# Layout 布局

Layout 提供了`row-item`和`col-item`两个组件来进行行列布局，两者需要配合使用

## 代码演示

### 基本用法

Layout 组件提供了`24列栅格`，通过在`Colitem`上添加`span`props属性设置列所占的宽度百分比    
此外，添加`offset`props属性可以设置列的偏移宽度，计算方式与 span 相同

```html
<row-item>
  <col-item :span="8">span: 8</col-item>
  <col-item :span="8">span: 8</col-item>
  <col-item :span="8">span: 8</col-item>
</row-item>

<row-item>
  <col-item :span="4">span: 4</col-item>
  <col-item :span="10" :offset="4">offset: 4, span: 10</col-item>
</row-item>

<row-item>
  <col-item :offset="12" :span="12">offset: 12, span: 12</col-item>
</row-item>
```

### 设置列元素间距

通过`gutter`props属性可以设置列元素之间的间距，默认间距为 0

```html
<row-item :gutter="20">
  <col-item :span="8">span: 8</col-item>
  <col-item :span="8">span: 8</col-item>
  <col-item :span="8">span: 8</col-item>
</row-item>
```

### Flex 布局

将 `type` props属性设置为 flex 可以启用 flex 布局，便于进行灵活的对齐

```html
<!-- 左对齐 -->
<row-item :type="flex">
  <col-item :span="6">span: 6</col-item>
  <col-item :span="6">span: 6</col-item>
  <col-item :span="6">span: 6</col-item>
</row-item>

<!-- 居中 -->
<row-item :type="flex" :justify="center">
  <col-item :span="6">span: 6</col-item>
  <col-item :span="6">span: 6</col-item>
  <col-item :span="6">span: 6</col-item>
</row-item>

<!-- 右对齐 -->
<row-item :type="flex" :justify="flex-end">
  <col-item :span="6">span: 6</col-item>
  <col-item :span="6">span: 6</col-item>
  <col-item :span="6">span: 6</col-item>
</row-item>

<!-- 两端对齐 -->
<row-item :type="flex" :justify="space-between">
  <col-item :span="6">span: 6</col-item>
  <col-item :span="6">span: 6</col-item>
  <col-item :span="6">span: 6</col-item>
</row-item>

<!-- 每个元素的两侧间隔相等 -->
<row-item :type="flex" :justify="space-around">
  <col-item :span="6">span: 6</col-item>
  <col-item :span="6">span: 6</col-item>
  <col-item :span="6">span: 6</col-item>
</row-item>
```

## API

### Rowitem Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| type | 布局方式，可选值为`flex` | *string* | - | - |
| gutter | 列元素之间的间距（单位为px） | *string \| number* | - | - |
| tag | 自定义元素标签 | *string* | `div` | - |
| justify | Flex 主轴对齐方式，可选值为 `flex-end` `center` <br> `space-around` `space-between` | *string* | `start` | - |
| align | Flex 交叉轴对齐方式，可选值为 `center` `flex-end` <br> `baseline` `stretch`| *string* | `top` | - |

### Colitem Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| span | 列元素宽度 | *string \| number* | - | - |
| offset | 列元素偏移距离 | *string \| number* | - | - |
| tag | 自定义元素标签 | *string* | `div` | - |

### Rowitem Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击时触发 | event: Event |

### Colitem Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击时触发 | event: Event |
