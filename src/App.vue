<template>
  <div id="app" class="">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>
<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>
<style>
@import "~bulma/css/bulma.css";
:root {
  --main-text-color: #0076f9;
}
</style>
