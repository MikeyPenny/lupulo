import Vue from 'vue'
import Router from 'vue-router'


// Views
import HomeView from '@/views/Home'
import ContactView from '@/views/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'ContactView',
      component: ContactView
    }
  ]
})
