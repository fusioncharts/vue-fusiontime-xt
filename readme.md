Vue FusionTime XT
=================
Simple VueJS wrapper for using FusionTime XT

## QuickStart

### Step 1: Include vue-fusiontime-xt in your project

#### Option A: Using script tag
This is the most easiest option just include the necessary js files and you are good to go. Skip over to *Step 4* after this.
```html
<script src="path/to/vue.js"></script>
<script src="path/to/vue-fusiontime-xt.js"></script>
```

#### Option B: Using npm package
If you want more control on your components or want to use module bundlers, code splitting and others choose this option.

Execute the commands below in the terminal to install `vue-fusiontime-xt` node modules.

```
npm install vue-fusiontime-xt --save
```

### Step 2: Use the plugin in your main js file.

#### Option A: Using CommonJS
```javascript
var FusiontimeXt = require('vue-fusiontime-xt').default;

// Code of Step 3 here
```

#### Option B: Using CommonJS ES6 style
```javascript
import FusiontimeXt from 'vue-fusiontime-xt';

// Code of Step 3 here
```

#### Option C: Using AMD
```javascript
define(['vue', 'vue-fusiontime-xt'], function (Vue, FusiontimeXt) {
	FusiontimeXt = FusiontimeXt.default;

	// Code of Step 3 here
});
```

### Step 3: Use the plugin.

#### Option A: By calling the `Vue.use()` global method
Right after the import statements you should call the Vue.use() method. This will register the component globally.

```javascript
Vue.use(FusiontimeXt);
```

#### Option B: By registering the component locally by using `Vue.component()` method.

```javascript
Vue.component(FusiontimeXt.name, FusiontimeXt);
```

### Step 4: Add the `fusiontime` component
In your HTML or template, find the section where you wish to add the chart and add the `<fusiontime>` component. We are assuming it's inside a vue instanse within a div with id `#app` which would change based on your usage.

```html
<fusiontime :width="800" :height="400" :dataSource="fcDataSource"></fusiontime>
```

Now this is bound to a datasource named `fcDataSource`.

### Step 5: Populate required variables in the vue instance
In the previous code, we passed in a data variable `fcDataSource`, but that hasn't been defined yet.

In your vue instance, set the DataSource as you would for a regular FusionCharts JSON Format DataSource (see [this tutorial](http://docs.fusioncharts.com/tutorial-getting-started-your-first-charts-building-your-first-chart.html) for a general introduction to this format).

```javascript
import VueFusionTime from './components/VueFusionTime.vue';
new Vue({
	el: '#app',
	data: {
		fcDataSource: jsonData
	}
});
```
And your chart should display when you load the page.

## Licensing
Vue FusionTime is open-source and distributed under the terms of the MIT/X11 License. You will still need to download and include FusionCharts in your page. This project provides no direct functionality. You can [Download an evaluation](http://fusioncharts.com/download/). You will still need to purchase a FusionCharts license to use in a commercial environment (FusionCharts is [free for non-commercial and personal use](http://www.fusioncharts.com/download/free/)).
