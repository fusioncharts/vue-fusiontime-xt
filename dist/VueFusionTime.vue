<template>
  <div class="fusiontime"></div>
</template>

<script>
	export default {
		props: ['width', 'height', 'dataSource'],
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
	}
</script>
