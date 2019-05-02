<template>
  <div id="app">
    <div class="fundoPreto" v-on:click="seen = !seen"></div>
    <header>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/teste">Teste</router-link>
        </li>
      </ul>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.fundoPreto{
  background: #00000070;
  position: absolute;
  width: 100%;
  height: 100%;
}
body {
  margin: 0;
}
a{
  color: #fff;
  text-decoration: none;
}
header ul{
  float: left;
}

header ul li{
  padding: 10px;
  list-style: none;
  display: inline;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  float: left;
  width: 100%;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  float: left;
  width: 100%;
  margin: 0;
  background-color: #35495E;
  color: #ffffff;
}

</style>
