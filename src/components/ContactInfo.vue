<template>
  <div class="">
    <h4>Contactenos</h4>
    <div class="buttons">
      <a class="button is-link is-inverted is-outlined is-fullwidth has-text-left" target="_blank" href="https://g.page/RPGCentro">
          <font-awesome-icon class="mr-2" :icon="['fas', 'map-marker']" /> Colombia 69 PB "A", Nueva Córdoba.
      </a>
      <a class="button is-link is-inverted is-outlined is-fullwidth has-text-left" target="_blank" href="https://wa.me/5493513531443">
         <font-awesome-icon class="mr-2" :icon="['fab', 'whatsapp']" />+54 9 351 353-1443
      </a>
      <a class="button is-link is-inverted is-outlined is-fullwidth has-text-left" target="_blank" href="https://goo.gl/maps/WGZBty4CjBp2tdxG9">
          <font-awesome-icon class="mr-2" :icon="['fas', 'map-marker']" /> Borges 16 esq Parq Icardi. La Calera.
      </a>
      <a class="button is-link is-inverted is-outlined is-fullwidth has-text-left" target="_blank" href="https://wa.me/5493513531443">
         <font-awesome-icon class="mr-2" :icon="['fab', 'whatsapp']" />+54 9 351 -8088 842
      </a>
      <a class="button is-link is-inverted is-outlined is-fullwidth has-text-left" href="#">
         <font-awesome-icon class="mr-2" :icon="['fa', 'calendar-alt']" />Lu - Vi: 09:00 a 21:00
      </a>
      <a class="button is-link is-inverted is-outlined is-fullwidth has-text-left" target="_blank" href="mailto:info@rpgcentro.com">
         <font-awesome-icon class="mr-2" :icon="['fa', 'envelope']" />info@rpgcentro.com
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ContactInfo'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button.has-text-left {
    justify-content: flex-start;

}

.button.has-text-right {
    justify-content: flex-end;
}
</style>
