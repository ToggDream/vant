// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import useMock from "@/mock"                                    //mock模拟数据
import remInit from '@/assets/js/remInit'
import usePrototype from '@/assets/js/prototype'


import Vant from 'vant';
import 'vant/lib/vant-css/index.css';

Vue.use(useMock);
Vue.use(Vant);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
