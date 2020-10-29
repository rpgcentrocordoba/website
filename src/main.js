import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMapMarker, faCalendarAlt, faEnvelope, faBriefcase, faCheck } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faInstagram, faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faMapMarker, faCalendarAlt, faEnvelope, faBriefcase, faCheck) // solid
library.add(faWhatsapp, faInstagram, faFacebookF, faTwitter, faLinkedinIn) // brand

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
