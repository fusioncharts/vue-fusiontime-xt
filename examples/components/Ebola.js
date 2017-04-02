let snippet = {
code: `
&lt;template&gt;
  &lt;fusiontime height="450" width="850" :data-source="jsonData"&gt;&lt;/fusiontime&gt;
&lt;/template&gt;

&lt;script&gt;
  import VueFusionTime from '../../dist/VueFusionTime';

  export default {
    data: function () {
      return {
        jsonData: {}
      }
    },
    components: {
      'fusiontime': VueFusionTime
    },
    created: function () {
      this.$http.get('/examples/data/ebola.json')
        .then(response => response.json())
        .then(json => {
          this.jsonData = json;
        })
        .catch(err => {
          console.err(err);
        });
    }
  }
&lt;/script&gt;
`};

export default {
  title: 'Hello'
};
