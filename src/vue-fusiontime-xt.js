export default {
  name: 'fusiontime',
  render(createElm) {
    return createElm('div', {
      class: {
        fusiontime: true,
      },
    });
  },

  props: {
    width: {
      type: Number,
      default: 850,
      required: true,
    },
    height: {
      type: Number,
      default: 450,
      required: true,
    },
    dataSource: {
      type: Object,
      default: null,
      required: true,
    },
  },
  methods: {
    renderChart(data) {
      if (Object.keys(data).length > 0) {
        const chartConfig = {
          type: 'timeseries',
          width: this.width,
          height: this.height,
          renderAt: this.$el,
          dataFormat: 'json',
          dataSource: data,
        };
        this.fc = new FusionCharts(chartConfig).render();
      }
    },
  },

  mounted() {
    this.renderChart(this.dataSource);
  },
  destroyed() {
    if (this.fc) {
      this.fc.dispose();
    }
  },

  watch: {
    dataSource(val) {
      this.renderChart(val);
    },
  },
};
