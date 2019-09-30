import Vue from "vue";
import App from "./App.vue";

import store from './vuex';
import router from './router';
import './validate';
import './mock';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
