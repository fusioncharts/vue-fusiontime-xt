import Vue from 'vue';
import Prism from 'prismjs';
import FusiontimeXt from '../dist/vue-fusiontime-xt';
import tsData from './datarepo';
import Snippets from './snippets';

Vue.use(FusiontimeXt);

window.app = new Vue({
  el: '#app',
  data: {
    charts: tsData,
    snippets: Snippets,
    selectedDataSource: {},
  },
  methods: {
    demoClickHandler(chart) {
      this.selectedDataSource = chart.data;
      document.querySelector('#selectedSnippet > code').textContent = chart.snippet;
      Prism.highlightAll();
    },
    _attachSnippets() {
      Object.keys(this.charts).forEach((key) => {
        if (this.snippets[key] !== undefined) {
          this.charts[key].snippet = this.snippets[key].trim();
        } else {
          this.charts[key].snippet = this.snippets.default.trim();
        }
      });
    },
    _initDefaults() {
      const firstKey = Object.keys(this.charts)[0];
      this.selectedDataSource = this.charts[firstKey].data;
      document.querySelector('#selectedSnippet > code').textContent = this.charts[firstKey].snippet;
      Prism.highlightAll();
    },
  },
  created() {
    this._attachSnippets();
    this._initDefaults();
  },
});
