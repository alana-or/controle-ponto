<template>
  <div>
    <div class="novo">
      <h2>Horário</h2>
      <form @submit="checkForm" action="" method="post">
        <i class="far fa-clock"></i>
        <span class="campo">
          <input id="horario" v-model="horario" type="text" name="horario">
          <label for="horario">Horário</label>
          <p v-if="errors !== null">{{ errors }}</p>
        </span>
        <i class="fas fa-file-upload"></i>
        <span class="campo">
          <input id="horario" v-model="horario" type="text" name="horario">
          <label for="horario">Horário</label>
          <p v-if="errors !== null">{{ errors }}</p>
        </span>
          <input type="submit" value="Enviar">
      </form>

    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      errors: null,
      horario: null,
      foto: null
    }
  },
  methods:{
    checkForm: function (e) {
      if (this.name && this.age) {
        return true;
      }

      this.errors = [];

      if (!this.name) {
        this.errors = 'O horário é obrigatório.';
      }

      e.preventDefault();
    }
  }
}
</script>

<style>
i{
  float: left;
  width: 15%;
  text-align: center;
}
.novo{
  position: fixed;
  bottom: 10px;
  width: calc(100% - 20px);
  background: #fff;
  margin: 10px 10px 0 10px;
  z-index: 9;
}
.campo{
  width: 80%;
  margin: 10px 0;
  float: left;
}
.campo p{
  float: left;
  width: 100%;
  font-size: 10px;
  color: #f00;
  text-align: left;
  margin: 5px 0;
}
input[type=text]:focus + label{
    font-size: 12px;
    margin-top: -15px;
    margin-left: 0;
    position: absolute;
}
input[type=text] {
  border: none;
  font-size: 18px;
  border-bottom: 1px solid;
}
input[type=submit]{
  border: none;
  float: right;
  margin: 15px;
  padding: 10px 15px;
}
label{
  position: absolute;
  left: 15%;
  z-index: 9;
}
label, input[type=text]{
  text-align: left;
  float:left;
  width: 100%;
}
</style>
