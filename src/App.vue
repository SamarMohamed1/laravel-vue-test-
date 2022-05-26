<template>
  <div id="app">
        <navbar/>
        <popup/>

    <router-view  class="container"/>
  </div>
</template>

<script>
import Navbar from './components/navbar.vue'
import popup from './components/popup.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    popup
   
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
  /* margin-top: 60px; */
}

</style>
