// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import useMock from "@/mock"                                    //mock模拟数据
import remInit from '@/assets/js/remInit'
import usePrototype from '@/assets/js/prototype'
// 引入vue-amap
import VueAMap from 'vue-amap';                                //高德地图
import { lazyAMapApiLoaderInstance } from 'vue-amap';

import Vant from 'vant';
import 'vant/lib/vant-css/index.css';

Vue.use(useMock);
Vue.use(Vant);
Vue.use(usePrototype);
Vue.use(VueAMap);
useMock(true);                                                     //mock开关
Vue.config.productionTip = false

// 初始化vue-amap
VueAMap.initAMapApiLoader({
    // 高德的key
    key: '6e9a0349872b8b0f2923e901f94d0e2e',
    // 插件集合
    plugin: [
        'AMap.Autocomplete',
        'AMap.PlaceSearch',
        'AMap.Scale',
        'AMap.OverView',
        'AMap.ToolBar',
        'AMap.MapType',
        'AMap.PolyEditor',
        'AMap.CircleEditor',
        'AMap.Geolocation'
    ],
    //uiVersion: '1.0', // ui库版本，不配置不加载,
    // 高德 sdk 版本，默认为 1.4.4
    v: '1.4.4'
});
/*lazyAMapApiLoaderInstance.load().then(() => {
    // your code ...
    this.map = new AMap.Map('amapContainer', {
        center: new AMap.LngLat(121.59996, 31.197646)
    });
});*/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
