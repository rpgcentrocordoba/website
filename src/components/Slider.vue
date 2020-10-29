<template>
<div class="slider">
  <img alt="Acomodar Espalda" width="1569" src="https://farm8.staticflickr.com/7107/13293866975_d7d8dfddc6_o.png" class="defaultimg">
</div>
</template>

<script>
export default {
  name: 'Slider',
  props: {
    msg: String
  },
  data: function () {
    return {
      show: false,
      images: [
        { id: 1, title: 'RPG Centro Cordoba', smallSRC: 'https://farm4.staticflickr.com/3765/13295233434_b81836a1a5_s.jpg', originalSRC: 'https://farm4.staticflickr.com/3765/13295233434_b81836a1a5.jpg' },
        { id: 2, title: 'RPG Centro Cordoba', smallSRC: 'https://farm4.staticflickr.com/3949/14931784084_6ec6803b01_s.jpg', originalSRC: 'https://farm4.staticflickr.com/3949/14931784084_6ec6803b01.jpg' },
        { id: 3, title: 'RPG Centro Cordoba', smallSRC: 'https://farm4.staticflickr.com/3945/15365928909_405567b4ef_s.jpg', originalSRC: 'https://farm4.staticflickr.com/3945/15365928909_405567b4ef.jpg' },
        { id: 4, title: 'RPG Centro Cordoba', smallSRC: 'https://farm4.staticflickr.com/3952/15366933490_67513a00bb_s.jpg', originalSRC: 'https://farm4.staticflickr.com/3952/15366933490_67513a00bb.jpg' },
        { id: 5, title: 'RPG Centro Cordoba', smallSRC: 'https://farm6.staticflickr.com/5603/15553411402_4a3c9462d6_s.jpg', originalSRC: 'https://farm6.staticflickr.com/5603/15553411402_4a3c9462d6.jpg' },
        { id: 6, title: 'RPG Centro Cordoba', smallSRC: 'https://farm8.staticflickr.com/7150/6736530155_59fd7a99f0_s.jpg', originalSRC: 'https://farm8.staticflickr.com/7150/6736530155_59fd7a99f0.jpg' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img{
    /*align-self: center;*/
    vertical-align: middle;
     max-width: 100%;
    max-height: 100%;
  }

</style>
