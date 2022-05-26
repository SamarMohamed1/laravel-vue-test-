<template>
  <div id="app" class="container">
    <router-view/>
    <!-- <popup/> -->
  </div>
</template>

<script>
// import popup from './components/popup.vue'
export default {
  name: 'App',
  components: {
    // popup
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
