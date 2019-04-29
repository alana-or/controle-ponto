<template>
  <div class="hello">
    <h1>{{ info }}</h1>
  </div>
</template>

<script>
const axios = require('axios');

export default {

  name: 'teste',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('static/dados.json')
      .then(response => (this.info = response))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}
</style>
