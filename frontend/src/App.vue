<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <PingPong />
  </div>
</template>

<script>
import PingPong from './components/ping-pong.vue'

export default {
  name: 'App',
  components: {
    PingPong
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
