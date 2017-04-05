import Vue from 'vue';
import VueFusionTime from '../src';
import tsData from './datarepo';
import Snippets from './snippets';

Vue.use(VueFusionTime);

window.app = new Vue({
  el: '#app',
  data: {
    charts: tsData,
    snippets: Snippets,
    selectedDataSource: null
  },
  methods: {
    demoClickHandler: function (chart) {
      this.selectedDataSource = chart.data;
      document.querySelector('#selectedSnippet > code').textContent = chart.snippet;
      Prism.highlightAll();
    },
    _attachSnippets: function () {
      for (let key in this.charts) {
        if (this.charts.hasOwnProperty(key) && this.snippets.hasOwnProperty(key)) {
          this.charts[key].snippet = this.snippets[key].trim();
        }
      }
    },
    _initDefaults: function () {
      let firstKey = Object.keys(this.charts)[0];
      this.selectedDataSource = this.charts[firstKey].data;
      document.querySelector('#selectedSnippet > code').textContent = this.charts[firstKey].snippet;
      Prism.highlightAll();
    }
  },
  created: function () {
    this._attachSnippets();
    this._initDefaults();
  }
});
