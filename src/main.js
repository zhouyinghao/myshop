import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.config.productionTip = false

import '@/assets/css/reset.css'
import '@/assets/js/rem.js'
import './plugins/vant.js'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
