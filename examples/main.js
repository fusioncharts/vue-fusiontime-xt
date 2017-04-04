import Vue from 'vue';
import VueFusionTime from '../src';
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
      document.querySelector('#selectedSnippet > code').innerText = chart.snippet;
      Prism.highlightAll();
    },
    _attachSnippets: function () {
      let snippetsKeys = Object.keys(this.snippets);
      for (let key in this.charts) {
        if (this.charts.hasOwnProperty(key)) {
          if (snippetsKeys.includes(key)) {
            this.charts[key].snippet = this.snippets[key];
          }
        }
      }
    },
    _initDefaults: function () {
      let firstKey = Object.keys(this.charts)[0];
      this.selectedDataSource = this.charts[firstKey].data;
      document.querySelector('#selectedSnippet > code').innerText = this.charts[firstKey].snippet;
      console.log('_initDefaults');
      // Prism.highlightAll();
    }
  },
  created: function () {
    this._attachSnippets();
    this._initDefaults();
  }
});
