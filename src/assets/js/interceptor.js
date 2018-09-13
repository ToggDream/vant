//axios 拦截器设置
import axios from 'axios';
//vuex
import store from '@/assets/js/store'
axios.defaults.timeout = 10000;
//axios.default = IPCONFIG;
// http请求拦截器
axios.interceptors.request.use(config => {
    //document.querySelector('.loading').style.visibility = 'visible';
    //console.log('加载前',);
    store.state.loading.isShow = true;
    return config
}, error => {
    console.log('加载超时');
    return Promise.reject(error)
});
// http响应拦截器
axios.interceptors.response.use(data => {// 响应成功关闭loading
    //document.querySelector('.loading').style.visibility = 'visible';
    //console.log('成功关闭结束',);
    store.state.loading.isShow = false;
    return data
}, error => {
    return Promise.reject(error)
});

export default axios
