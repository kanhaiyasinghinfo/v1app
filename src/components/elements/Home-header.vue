<template>
  <div class="homeheader">
      <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about-us">About Us</router-link></li>
      <li><router-link to="/contact-us">Contact Us</router-link></li>
      <li><router-link to="/login">Sign In</router-link></li>
      
    </ul>
      
  </div>
</template>
<script>
export default {
  name: 'HomeHeader',
  data() {
      return {
          heading: "Home Header"
      }
  }
}
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

