import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store/store'
import axios from 'axios'

Vue.config.productionTip = false
/* Check If token is in local storage or not */
if(localStorage.getItem('tokenId') !== null) {
  var userData = JSON.parse(localStorage.getItem('user'));
  userData.tokenId = localStorage.getItem('tokenId')
  store.dispatch('authorizeUser', userData)
}
/* Check If token is in local storage or not */
axios.defaults.baseURL = "http://192.168.2.209:8081/api/v1/";
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
