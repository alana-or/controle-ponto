<template>
  <div>
    <Horario />
    <Novo />
    <i class="fas fa-plus-circle" @click="novo"></i>
  </div>
</template>

<script>
import Horario from '@/components/Horario'
import Novo from '@/components/Novo'

export default {
  components: {
    Horario,
    Novo
  },
  methods:{
    novo: function () {
      this.$refs["fundoPreto"]
    }
  }
}
</script>

<style>
.fa-plus-circle{
  position: fixed;
  bottom: 20px;
  right: 20px;
  font-size: 40px;
  cursor: pointer;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}
</style>
