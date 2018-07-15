<template>
<!-- <style rel="stylesheet" type="text/css" href="./assets/base.css">
<style rel="stylesheet" type="text/css" href="./assets/cake.css"> -->
  <div class="app">
      
    <img src="./assets/logo.png">
    <HomeHeader/>
    <router-view/>
  </div>
</template>

<script>
import HomeHeader from './components/elements/Home-header' 
export default {
  name: 'HomeLayout',
  components:{
    HomeHeader
  }
}
</script>

<style scoped>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-active {
    text-decoration: underline;
}
</style>
