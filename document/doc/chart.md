## Chart

Line chart折线图

```vue
<chart :type="'line-chart'" :data="{'2017-01-01': 11, '2017-01-02': 6}"></chart>
```

Pie chart饼状图

```vue
<chart :type="'pie-chart'" :data="[['Blueberry', 44], ['Strawberry', 23]]"></chart>
```

Column chart柱状图

```vue
<chart :type="'column-chart'" :data="[['Sun', 32], ['Mon', 46], ['Tue', 28]]"></chart>
```

Bar chart条形图

```vue
<chart :type="'bar-chart'" :data="[['Work', 32], ['Play', 1492]]"></chart>
```

Area chart面积图

```vue
<chart :type="'area-chart'" :data="{'2017-01-01': 11, '2017-01-02': 6}"></chart>
```

Scatter chart散点图

```vue
<chart :type="'scatter-chart'" :data="[[174.0, 80.0], [176.5, 82.3]]" xtitle="Size" ytitle="Population"></chart>
```

Multiple series多个数据

```vue
data = [
  {name: 'Workout', data: {'2017-01-01': 3, '2017-01-02': 4}},
  {name: 'Call parents', data: {'2017-01-01': 5, '2017-01-02': 3}}
];
// and
<chart :data="data" />
```

### Options

Id, width, and height

```vue
<chart :type="'line-chart'" id="users-chart" width="800px" height="500px" />
```

Min and max values

```vue
<chart :type="'line-chart'" :min="1000" :max="5000"></chart>
```

`min` defaults to 0 for charts with non-negative values. Use `null` to let the charting library decide.默认为0，传入null自适应

Min and max for x-axis。X轴长度

```vue
<chart :type="'line-chart'" xmin="2018-01-01" xmax="2019-01-01"></chart>
```

Colors

```vue
<chart :type="'line-chart'" :colors="['#b00', '#666']"></chart>
```

Stacked columns or bars。柱状体和条形图堆叠

```vue
<chart :type="'column-chart'" :stacked="true"></chart>
```

Discrete axis离散轴

```vue
<chart :type="'line-chart'" :discrete="true"></chart>
```

Label (for single series)标签（单）

```vue
<chart :type="'line-chart'" label="Value"></chart>
```

Axis titles轴标题

```vue
<chart :type="'line-chart'" xtitle="Time" ytitle="Population"></chart>
```

Straight lines between points instead of a curve折线图代替曲线图

```vue
<chart :type="'line-chart'" :curve="false"></chart>
```

Show or hide legend展示或隐藏说明

```vue
<chart :type="'line-chart'" :legend="true"></chart>
```

Specify legend position指定说明位置

```vue
<chart :type="'line-chart'" legend="bottom"></chart>
```

Donut chart

```vue
<chart :type="'pie-chart'" :donut="true"></chart>
```

Prefix, useful for currency通用前缀

```vue
<chart :type="'line-chart'" prefix="$"></chart>
```

Suffix, useful for percentages 百分比后缀

```vue
<chart :type="'line-chart'" suffix="%"></chart>
```

Set a thousands separator设置千位分隔符

```vue
<chart :type="'line-chart'" thousands=","></chart>
```

Set a decimal separator 设置小数分隔符

```vue
<chart :type="'line-chart'" decimal=","></chart>
```

Set significant digits 

```vue
<chart :type="'line-chart'" :precision="3"></chart>
```

Set rounding设置小数位

```vue
<chart :type="'line-chart'" :round="2"></chart>
```

Show insignificant zeros, useful for currency小数位0的展示

```vue
<chart :type="'line-chart'" :round="2" :zeros="true"></chart>
```

Friendly byte sizes 

```vue
<chart :type="'line-chart'" :bytes="true"></chart>
```

Show a message when data is empty数据为空时展示信息

```vue
<chart :type="'line-chart'" :messages="{empty: 'No data'}"></chart>
```

Refresh data from a remote source every `n` seconds刷新间隔

```vue
<chart :type="'line-chart'" :refresh="60"></chart>
```

You can pass options directly to the charting library with:自定义chart

```vue
<chart :type="'line-chart'" :library="{backgroundColor: '#eee'}"></chart>
```

See the documentation for  [Chart.js](https://www.chartjs.org/docs/) for more info.官方文档

To customize datasets in Chart.js,（定制chart） use:

```vue
<chart :type="'line-chart'" :dataset="{borderWidth: 10}"></chart>
```

You can pass this option to individual series as well.

Use [dynamic components](https://vuejs.org/v2/guide/components.html#Dynamic-Components) to make the chart type dynamic:

```vue
<component is="column-chart"></component>
```

### Global Options全局设置

To set options for all of your charts, use:

```javascript
Chartkick.options = {
  colors: ["#b00", "#666"]
}
```

### Data
data类型

Pass data as an array or object

```vue
<chart :type="'pie-chart'" :data="{'Blueberry': 44, 'Strawberry': 23}"></chart>
<chart :type="'pie-chart'" :data="[['Blueberry', 44], ['Strawberry', 23]]"></chart>
```

Times can be a `Date` or a string (strings are parsed)

```vue
:data="[[new Date(), 5], ['2017-01-01 00:00:00 UTC', 7]]"
```

Data can also be a callback

```vue
function fetchData(success, fail) {
  success({"Blueberry": 44, "Strawberry": 23})
  // or fail("Data not available")
}
:data="fetchData"
```

### Multiple Series当传入多个数据列的时候

You can pass a few options with a series（每个数据列可传入配置:

- `name`
- `data`
- `color`
- `dataset` 
- `points` 
- `curve` 

### Download Charts


Give users the ability to download charts. It all happens in the browser - no server-side code needed.导出图表

```vue
:download="true"
```

Set the filename

```vue
download="boom"
```

**Note:** Safari will open the image in a new window instead of downloading.

Set the background color

```vue
:download="{background: '#fff'}"
```
