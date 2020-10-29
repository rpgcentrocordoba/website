<template>
  <div class="">
    <h4>Mapa</h4>
    <img
      :src="imageMapURL"
      alt="RPG Centro Mapa"
      width="100%"
      height="100%"
    />
  </div>
</template>

<script>
export default {
  name: 'ImageMap',
  data: function () {
    return {
      imageMapURL: 'https://maps.googleapis.com/maps/api/staticmap?size=360x230&markers=icon:https://rpgcentro.com/themes/landing/assets/img/favicon.ico%7CColombia+69,+C%C3%B3rdoba,+Argentina&sensor=false&key=' + process.env.VUE_APP_GOOGLE_MAPS_API_KEY
    }
  }
}
</script>
