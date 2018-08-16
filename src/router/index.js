import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import vant from '@/components/vant'
import store from '@/components/store'
import homePosition from '@/components/homePosition'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/vant',
      name: 'vant',
      component: vant
    },
    {
      path: '/store',
      name: 'store',
      component: store
    },
    {
      path: '/homePosition',
      name: 'homePosition',
      component: homePosition
    }
  ]
})
