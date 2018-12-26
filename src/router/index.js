import Vue from 'vue'
import Router from 'vue-router'

/*import home from '@/components/home'
import vant from '@/components/vant'
import store from '@/components/store'
import homePosition from '@/components/homePosition'
import storeDetail from '@/components/storeDetail'
import test from '@/components/test'*/

const home = () => import('@/components/home')
const vant = () => import('@/components/vant')
const store = () => import('@/components/store')
const homePosition = () => import('@/components/homePosition')
const storeDetail = () => import('@/components/storeDetail')
const test = () => import('@/components/test')
const father = () => import('@/components/keepAliveTest/father')
const child_1 = () => import('@/components/keepAliveTest/children/child_1')
const child_2 = () => import('@/components/keepAliveTest/children/child_2')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/test',
      name: 'test',
      meta:{
        requireAuth:true,
        name:'测试',
      },
      component: test
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
        path: '/storeDetail',
        name: 'storeDetail',
        component: storeDetail
    },
    {
      path: '/homePosition',
      name: 'homePosition',
      component: homePosition
    },
      //keepAliveTest
    {
      path: '/father',
      name: 'father',
      component: father,
      children: [
        {
          path: 'child_1',
          name: 'child_1',
          component: child_1,
          meta: {
            keepAlive: true
          }
        },
        {
          path: 'child_2',
          name: 'child_2',
          component: child_2,
          meta: {
            keepAlive: false
          }
        },
      ]
    },
  ]
})
