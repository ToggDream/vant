import Vue from 'vue'
import router from './index'
/*to:router即将进入的路由对象
from:当前导航即将离开的路由
next:Function,进行管道中的一个钩子，如果执行完了，则导航的状态就是
confirmed （确认的）；否则为false，终止导航。*/
router.beforeEach((to, from, next) => {
  /*console.log(4,to);
  console.log(5,from);
  console.log(6,next);*/
  next()
})
router.afterEach((to, from) => {


})

export default router

