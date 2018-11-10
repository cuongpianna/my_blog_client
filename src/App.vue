<template>
  <div id="app">
    <MainLayout></MainLayout>
  </div>
</template>

<script>
  import MainLayout from "./layouts/public/main";
export default {
  name: 'App',
  components: {MainLayout}
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* color: #2c3e50; */
  width: 100%;
}
</style>
