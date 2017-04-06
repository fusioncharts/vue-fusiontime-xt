let snippet = `
<template>
  <fusiontime height="450" width="850" :data-source="jsonData"></fusiontime>
</template>

<script>
  import VueFusionTime from 'vue-fusiontime-xt';

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
      this.$http.get('/path/to/GDP.json')
        .then(response => response.json())
        .then(json => {
          this.jsonData = json;
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
</script>
`;

export default snippet;
