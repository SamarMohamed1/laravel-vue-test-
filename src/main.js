import Vue from 'vue'
import App from './App.vue'

import index from './components/BookList.vue'
import create from './components/AddBook.vue'
import edit from './components/EditBook.vue'
import VueRouter from 'vue-router'

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


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
