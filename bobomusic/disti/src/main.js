import Vue from 'vue'
import App from './layouts/App.vue'
import './assets/css/base.css'  

import router from './plugins/router.js'
import './plugins/axios'
import { Swipe, SwipeItem } from 'vue-swipe';
require('vue-swipe/dist/vue-swipe.css');

Vue.config.productionTip = false

Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);
import server from './config/server.js';
Vue.prototype.$baseUrl = server.baseUrl;
let vm = new Vue({
  data:{
    bheader:true,
    bfoot:true,
    bLoading:true,
  },
  render: h => h(App),
  router
}).$mount('#app')
export default vm;