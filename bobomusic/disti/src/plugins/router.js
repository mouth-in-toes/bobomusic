import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../pages/Home.vue';
import Radio from '../pages/Radio.vue';
import Music from '../pages/Music.vue';
import User from '../pages/User.vue';
import Soon from '../components/Soon';
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
// import Login from '../pages/Login.vue';
// import Reg from '../pages/Reg.vue';
// import Detail from '../pages/Detail.vue';
// import NoPage from '../pages/NoPage.vue';

let routes = [
  {path:'/home',component:Home,name:'home'},
  {path:'/Radio',component:Radio},
  {path:'/Music',component:Music,name:'music'},
  {path:'/User',component:User},
  {path:'/Soon',component:Soon},
  {path:'/Login',component:Login},
  {path:'/Register',component:Register},
  {path:'/',redirect:'/home'},
  
];

let router = new VueRouter({
  routes
})

export default router;