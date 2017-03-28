Vue FusionTime XT
=================
Simple VueJS wrapper for using FusionTime XT

## QuickStart

#### Step 1: Include VueFusionTime.vue
In your components directory, paste `VueFusionTime.vue` file from the `dist` directory in this repo.

#### Step 2: Include `VueFusionTime` in your component object.
In your app or component, import `VueFusionTime` as a dependency.

```javascript
import VueFusionTime from './components/VueFusionTime.vue';
new Vue({
	el: '#app',
	component: {
		'fusiontime': VueFusionTime
	}
});
```

#### Step 3: Add the `fusiontime` component
In your HTML or template, find the section where you wish to add the chart and add the `<fusiontime>` component. We are assuming it's inside a vue instanse within a div with id `#app` which would change based on your usage.

```html
<fusiontime width="800" height="400" :dataSource="fcDataSource"></fusiontime>
```

Now this is bound to a datasource named `fcDataSource`.

#### Step 4: Populate required variables in the vue instance
In the previous code, we passed in a data variable `fcDataSource`, but that hasn't been defined yet.

In your vue instance, set the DataSource as you would for a regular FusionCharts JSON Format DataSource (see [this tutorial](http://docs.fusioncharts.com/tutorial-getting-started-your-first-charts-building-your-first-chart.html) for a general introduction to this format).

```javascript
import VueFusionTime from './components/VueFusionTime.vue';
new Vue({
	el: '#app',
	data: {
		fcDataSource: jsonData
	}
	component: {
		'fusiontime': VueFusionTime
	}
});
```
And your chart should display when you load the page.

## Licensing
Vue FusionTime is open-source and distributed under the terms of the MIT/X11 License. You will still need to download and include FusionCharts in your page. This project provides no direct functionality. You can [Download an evaluation](http://fusioncharts.com/download/). You will still need to purchase a FusionCharts license to use in a commercial environment (FusionCharts is [free for non-commercial and personal use](http://www.fusioncharts.com/download/free/)).
