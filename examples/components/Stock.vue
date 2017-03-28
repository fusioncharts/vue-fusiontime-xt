<template>
  <fusiontime height="450" width="850" :data-source="jsonData"></fusiontime>
</template>

<script>
  import VueFusionTime from '../../dist/VueFusionTime.vue';

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
      this.$http.get('/examples/data/stock.json')
        .then(response => response.json())
        .then(json => {
          this.jsonData = json;
        })
        .catch(err => {
          console.err(err);
        });
    }
  }
</script>
