<template>
    <div><HomeHeader/>
    <router-view/>
    </div>
</template>

<script>

require('./assets/css/base.css')
require('./assets/css/cake.css')
import HomeHeader from './components/elements/Home-header'
export default {
  name: 'LoginLayout',
  components:{
    HomeHeader
  }
}
</script>

<style>
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
