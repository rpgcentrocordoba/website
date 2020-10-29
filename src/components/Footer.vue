<template>
  <footer class="footer">
    <div class="columns">
      <div class="column is-one-fifth"><Gallery /></div>
      <div class="column"><ImageMap /></div>
      <div class="column"><ContactInfo /></div>
      <div class="column"><ContactForm /></div>
    </div>
  </footer>
</template>

<script>
import Gallery from '@/components/Gallery.vue'
import ImageMap from '@/components/ImageMap.vue'
import ContactInfo from '@/components/ContactInfo.vue'
import ContactForm from '@/components/ContactForm.vue'
export default {
  name: 'Footer',
  props: {
    msg: String
  },
  components: {
    Gallery,
    ImageMap,
    ContactInfo,
    ContactForm
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  background: #0076f9;
}
</style>
