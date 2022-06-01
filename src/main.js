import Vue from 'vue'
import App from './App.vue'

import index from './components/BookList.vue'
import create from './components/AddBook.vue'
import edit from './components/EditBook.vue'
import VueRouter from 'vue-router'
import i18n from './i18n'
import axios from 'axios'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate);

// import {ValidateObserver} from 'vee-validate'
// import {ValidationProvider} from 'vee-validate/dist/vee-validate.ful.esm'

// Vue.component('ValidationProvider',ValidationProvider);
// Vue.component('ValidateObserver',ValidateObserver);

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes=[

  
  {
    name:'create',
    path:'/create',
    component:create
  },
  {
    name:'Edit',
    path:'/edit/:id',
    component:edit
  },
  {
    name:'index',
    path:'/',
    component:index
  },

];
const router =new VueRouter({mode:'history',routes:routes})
const lang=localStorage.getItem('lang') || 'en';
axios.defaults.headers['Accept-Language']=lang;
document.documentElement.lang=lang;

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
