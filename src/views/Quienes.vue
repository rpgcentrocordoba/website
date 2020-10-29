<template>
  <section class="section quienes-somos">
    <div class="container has-text-centered">
      <h2 class="subtitle is-3 tag is-info">Quienes Somos</h2>
      <div class="columns">
        <div class="column"></div>
        <div class="column">
          <div>
            <img alt="" src="https://farm8.staticflickr.com/7417/12121384335_0232835785_o.png">
          </div>
          <div class="box has-text-centered">
            <h5 class="subtitle is-3">Daniel Leguiza</h5>
            <div>Lic. en Kinesiología y Fisioterapia</div>
            <div>MP.5781</div>
              <a target="_new" href="https://www.facebook.com/daniel.leguiza" class="">
              <font-awesome-icon class="mr-2" :icon="['fab', 'facebook-f']" />
            </a>
            <a target="_new" href="https://twitter.com/rpgcentro" class="">
              <font-awesome-icon class="mr-2" :icon="['fab', 'twitter']" />
            </a>
            <a target="_new" href="https://www.linkedin.com/" class="">
              <font-awesome-icon class="mr-2" :icon="['fab', 'linkedin-in']" />
            </a>
            <router-link class="" to="/cv">
              <font-awesome-icon class="mr-2" :icon="['fa', 'briefcase']" />
            </router-link>
          </div>
        </div>
        <div class="column"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/**/
  .quienes-somos{
   background: #2b2f32;
   padding: 10rem 1.5rem;
   color: var(--main-text-color);
  }
  .quienes-somos .is-info{
    background-color: var(--main-text-color);
  }

  .subtitle {
    color: var(--main-text-color);
  }

</style>
