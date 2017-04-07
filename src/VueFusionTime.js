export default {
	name: 'fusiontime',
	render: function (createElm) {
		return createElm('div', {
			class: {
				fusiontime: true
			}
		});
	},

	props: {
		width: {
			type: Number,
			default: 850,
			required: true
		},
		height: {
			type: Number,
			default: 450,
			required: true
		},
		dataSource: {
			type: Object,
			default: null,
			required: true
		}
	},
	methods: {
		renderChart: function (data) {
      if (Object.keys(data).length > 0) {
				let chartConfig = {
		      type: "timeseries",
		      width: this.width,
		      height: this.height,
		      renderAt: this.$el,
		      dataFormat: 'json',
		      dataSource: data
		    };
				this.fc = new FusionCharts(chartConfig).render();
			}
		}
	},

	mounted: function () {
		this.renderChart(this.dataSource);
	},
	destroyed: function () {
    if (this.fc) {
      this.fc.dispose();
    }
	},

	watch: {
		dataSource: function (val) {
			this.renderChart(val);
		}
	}
};
