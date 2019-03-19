<template>
    <h2> callback->promise->Generator->async await</h2>
</template>
<script>
  export default {
    name: 'jsAsync',
    data(){
      return{
        
      }
    },
    methods:{
      init(){
        //电影介绍
        //https://suggest.taobao.com/sug?code=utf-8&q=%E6%89%8B%E6%9C%BA
        /*this.$fetch('/api/sug?code=utf-8&q=手机',)
          .then((res) => {
            console.log('1', res.result[0]);
            this.$fetch('/api/sug?code=utf-8&q=包')
              .then((res) => {
                console.log('2', res.result[0]);
                this.$fetch('/api/sug?code=utf-8&q=水')
                  .then((res) => {
                    console.log('3', res.result[0]);
                  })
              })
          })*/
        const getA = ()=>{
          this.$fetch('/api/sug?code=utf-8&q=手机',)
            .then((res)=>{
              console.log('1', res.result[0]);
            })
        }

        const getB = ()=>{
          this.$fetch('/api/sug?code=utf-8&q=包',)
            .then((res)=>{
              console.log('2', res.result[0]);
            })
        }

        const getC = ()=>{
          this.$fetch('/api/sug?code=utf-8&q=水',)
            .then((res)=>{
              console.log('3', res.result[0]);
            })
        }
        /*console.time('get1');
        getA()
        getB()
        getC()
        console.timeEnd('get1')*/
        async function load() {
          await getA()
          await getB()
          await getC()
        }
        console.time('get')
        load()
        console.timeEnd('get')

        async function getABC() {
          let results = await Promise.all([ getA(),getB(),getC()])
          return results.reduce((total,value) => total*value)
        }
        /*console.time('async')
        getABC()
        console.timeEnd('async')*/
      },
      callbackTest(){
        /**
         * 分开写法
         * @param name
         */
        // 声明一个方法
        function say(name){ //回调方法一 说话
          console.log(name)
        }
        function sayContent(){ //回调方法二 说的内容
          return 'lfz'
        }
        function masterFn(callback){ //主函数
          callback(sayContent())
        }
        masterFn(say)//输出name
        let vueThis = this
        /**
         * 整合写法
         */
        /*function sayContent() {
          return '111'
        }
        function masterFn(callback){ //主回调函数
          callback(sayContent())
        }
        function secondFn(callback){ //次回调函数
          callback(sayContent())
        }
        masterFn(function say(data){
          console.log(data)
        })//输出name*/
      },
      asyncAwait(){

        function fnAfter2Second(res) {
          new Promise(resolve => {
            setTimeout(()=>{
              console.log(res);
            },2000)
          })
        }

        async function test(){
          await fnAfter2Second('666')
          console.log('calling');
        }

        test()
      },
      test(){
       async function f(){
         return await 123
       }
       f().then(res =>{
         console.log(res);
       })
      },
    },
    mounted(){
      //callback
      //this.callbackTest()
      //this.init()
      //this.asyncAwait()
      this.test()
    }
  }
</script>
<style>
</style>
