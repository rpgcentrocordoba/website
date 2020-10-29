<template>
  <div class="">
    <h4>Galleria</h4>
    <div class="columns">
      <div class="column is-two-fifths">
        <img data-target="modal-bis modal-button"
        v-for="image in images.slice(0, 3)"
        v-bind:key="image.id"
        v-bind:title="image.title"
        v-bind:alt="image.title"
        v-bind:src="image.smallSRC"
        v-on:click="showModal"
        v-bind:data-image-original="image.originalSRC"
        />
      </div>
      <div class="column is-two-fifths">
        <img data-target="modal-bis modal-button"
        v-for="image in images.slice(3, 6)"
        v-bind:key="image.id"
        v-bind:title="image.title"
        v-bind:alt="image.title"
        v-bind:src="image.smallSRC"
        v-on:click="showModal"
        v-bind:data-image-original="image.originalSRC"
        />
      </div>
    </div>

    <div class="modal" id="modal-bis" v-bind:class="{ 'is-active': modalIsShowed }">
      <div class="modal-background"></div>
      <div class="modal-content">
        <p class="image is-4by3">
          <img :src="imagesrc" alt="">
        </p>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="modalIsShowed=false"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  data: function () {
    return {
      modalIsShowed: false,
      imagesrc: '',
      images: [
        { id: 1, title: 'RPG Centro Cordoba', smallSRC: 'https://farm4.staticflickr.com/3765/13295233434_b81836a1a5_s.jpg', originalSRC: 'https://farm4.staticflickr.com/3765/13295233434_b81836a1a5.jpg' },
        { id: 2, title: 'RPG Centro Cordoba', smallSRC: 'https://farm4.staticflickr.com/3949/14931784084_6ec6803b01_s.jpg', originalSRC: 'https://farm4.staticflickr.com/3949/14931784084_6ec6803b01.jpg' },
        { id: 3, title: 'RPG Centro Cordoba', smallSRC: 'https://farm4.staticflickr.com/3945/15365928909_405567b4ef_s.jpg', originalSRC: 'https://farm4.staticflickr.com/3945/15365928909_405567b4ef.jpg' },
        { id: 4, title: 'RPG Centro Cordoba', smallSRC: 'https://farm4.staticflickr.com/3952/15366933490_67513a00bb_s.jpg', originalSRC: 'https://farm4.staticflickr.com/3952/15366933490_67513a00bb.jpg' },
        { id: 5, title: 'RPG Centro Cordoba', smallSRC: 'https://farm6.staticflickr.com/5603/15553411402_4a3c9462d6_s.jpg', originalSRC: 'https://farm6.staticflickr.com/5603/15553411402_4a3c9462d6.jpg' },
        { id: 6, title: 'RPG Centro Cordoba', smallSRC: 'https://farm8.staticflickr.com/7150/6736530155_59fd7a99f0_s.jpg', originalSRC: 'https://farm8.staticflickr.com/7150/6736530155_59fd7a99f0.jpg' }
      ]
    }
  },
  props: {
    msg: String
  },
  methods: {
    showModal: function (event) {
      this.imagesrc = event.target.dataset.imageOriginal
      this.modalIsShowed = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4 {
    color: #fff;
    font-weight: 300;
    -webkit-font-smoothing: antialiased;
    margin-bottom: 16px;
}
</style>
