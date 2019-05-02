<template>
  <div>
    <div class="card" v-for="item in items" :key="item.id">
      <p>{{ item.tipo }} {{ item.dataHorario }}</p>
    </div>
  </div>
</template>

<script>
const axios = require('axios')

export default {
  data () {
    return {
       items: null
    }
  },
  mounted () {
    axios
      .get('static/dados.json')
      .then(response => {

        this.items = response.data;

      })
  },
}
</script>

<style>
.card{
  float: left;
  width: calc(100% - 20px);
  background: #ccc;
  margin: 10px 10px 0 10px;
}
p{
  font-size: 18px;
}
</style>
