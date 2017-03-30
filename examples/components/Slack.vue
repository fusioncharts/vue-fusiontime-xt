<template>
  <div>
    <fusiontime height="450" width="850" :data-source="jsonData"></fusiontime>
    <hr>
    <h3>JavaScript Code</h3>
    <pre><code class="language-markup">
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
      this.$http.get('/examples/data/slack.json')
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
    </code></pre>
  </div>
</template>

<script>
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
      this.$http.get('/examples/data/slack.json')
        .then(response => response.json())
        .then(json => {
          this.jsonData = json;
        })
        .catch(err => {
          console.err(err);
        });
    },
    mounted: function () {
      Prism.highlightAll();
    }
  }
</script>
