<template>
  <div class="home">
    <!--- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Slider />
  </div>
</template>

<script>
// @ is an alias to /src
import Slider from '@/components/Slider.vue'

export default {
  name: 'Home',
  components: {
    Slider
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
