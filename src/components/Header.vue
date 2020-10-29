<template>
  <nav class="navbar navbar-default is-fixed-top" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
      <router-link class="navbar-item" to="/"><img src="../assets/rpg-logo.png"></router-link>
    <a role="button" class="navbar-burger burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-end">
      <a target="_new" href="https://wa.me/5493513531443" class="navbar-item">
        <font-awesome-icon class="mr-2" :icon="['fab', 'whatsapp']" />
      </a>
      <a target="_new" href="https://www.instagram.com/rpg_centro/" class="navbar-item">
        <font-awesome-icon class="mr-2" :icon="['fab', 'instagram']" />
      </a>
      <router-link class="navbar-item" to="/">Inicio</router-link>
      <router-link class="navbar-item" to="/quienes">Quienes Somos</router-link>
      <router-link class="navbar-item" to="/rpg">RPG</router-link>
      <router-link class="navbar-item mr-6" to="/cv">CV</router-link>
    </div>

    <!-- <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div> -->
  </div>
</nav>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  },
  data () {
    return {
      showNav: false
    }
  },
  mounted () {
    var vm = this
    window.addEventListener('scroll', function (e) {
      if (window.scrollY > 300) {
        vm.$el.classList.add('solid')
        // vm.$el.addClass('solid')
      } else {
        vm.$el.classList.remove('solid')
        // vm.$el.removeClass('solid')
      }
      console.log(vm.$el)
    })
  },
  method: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @media screen and (min-width: 1024px){
    .navbar {
      min-height: 6.25rem;
    }
    .navbar-item img {
      max-height: 3.75rem;
    }
  }
.navbar {
  height: 80px;
  background-color: transparent;
  border: none;
  /*
  color: white;
  z-index: 100;
  */
  transition: background-color 1s ease 0s;
  .navbar-end a{
    color: #490D40;
  }
}
.navbar.solid {
  background-color:rgba(255,255,255,0.9);
  transition: background-color 1s ease 0s;
  /* box-shadow: 0 0 4px grey; */
    .navbar-brand {
      color: #C57ED3;
      transition: color 1s ease 0s;
    }
    .navbar-end a {
      color: #C57ED3;
    }
}
</style>
