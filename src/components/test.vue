<template>
    <div class="test">
        <h2>{{ $route.meta.name }}</h2>
        <!--标题点击问题-->
        <ul>
            <li v-for="(i,index) in list" @click="currentNav = index" :class="{ active: index === currentNav}">{{i}}</li>
        </ul>
        <button @click="eventBusTestClick()">eventBusTestClick</button>
        <date-picker v-model="time1" :first-day-of-week="1"></date-picker>
        <div class="label-list-row">
            <span v-for="(i,index) in labelList" :class="currentLabel === index ? 'active':''" @click="labelClick(index)">{{i.name}}</span>
        </div>

      <swiper :options="swiperOption" ref="swiper" class="label-panel"> 

                <swiper-slide v-for="(j,index_1) in testList" :key="index_1">
                    <div class="swiper-item">
                        <img :src="j.img" alt="">
                        <span>{{j.cate}}</span>
                    </div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
      </swiper>

        <!--Vue列表渲染问题-->
        <div class="p-list-render">
            <div>
                <div class="row">
                    <span>单价</span>
                    <span>数量</span>
                    <span style="width: 100px">总价</span>
                </div>
                <div class="row" v-for="(i,index) in renderData">
                    <span>
                        <input type="text" v-model="renderData[index].perPrice">
                    </span>
                    <span>
                        <input type="text" v-model="renderData[index].number">
                    </span>
                    <span>{{i.perPrice * i.number}}</span>
                </div>
                <div class="row">
                    <span>总计</span>
                    <span>{{totalPrice}}</span>
                </div>
                <div class="row">
                    <span>数组长度</span>
                    <span>{{renderData.length}}</span>
                </div>
            </div>
            <button @click="resetData()">还原</button>
        </div>

    </div>
</template>
<script>
    import eventBus from '../assets/js/eventBus'
    //import data from '../assets/js/exportTest'
    import toolFn from '../assets/js/tools/assist'
    import { isDate } from '../assets/js/isDate'
    import DatePicker from 'vue2-datepicker'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
      data() {
        return {
          list: [11111, 22222, 33333, 4444],
          currentNav: 1,
          time1: '2018-01-01',
          swiperOption: {   //swiperOption是上面的options值
            effect: 'coverflow',//效果
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows : true
            },
            pagination: { //页码
              el: '.swiper-pagination'
            },
            on: {
              /*touchEnd: (event) => {
                console.log(43, this.currentLabel);
              }*/
              slideChangeTransitionEnd:()=>{
                this.currentLabel = this.swiper.activeIndex
              },
              click: ()=>{

              }
            }
          },
          labelList: [
            {id: 0, name: '科技'},
            {id: 1, name: '汽车'},
            {id: 2, name: '财经'},
            {id: 3, name: '时尚'},
            {id: 4, name: '军事'},
          ],
          testList: [],
          currentLabel: 0,
          firstName:'',
            //indexedDB
            myDB: {
                name: 'testDB',
                version: 2,
                db: null
            },
          renderData:[
            {perPrice: 1, number: 10},
            {perPrice: 1, number: 20},
            {perPrice: 1, number: 30},
          ]
        };
      },
      methods: {
        eventBusTestClick() {
          eventBus.$emit('test', 'test666');
        },
        loadTestList() {
          this.$fetch('/getTestList', {}).then((response) => {
            this.testList = response.testList
            //console.log(44, response.testList);
          })
              .catch(err => {
                console.log(err);
              });
        },
        labelClick(index){
          this.currentLabel = index
          this.swiper.slideTo(index, 1000, true)
        },
        getFullName(user){
          /*const firstName = user.firstName
          const lastName = user.lastName*/
          //{this.firstName} = user
          const {firstName, secondName, lastName } = user
          return `${firstName} ${secondName}  ${lastName}`
        },
        study() {
            // good
            /*class Person{
            constructor(name,age){
              this.name = name
              this.age = age
            }
            say(){
              return name
              //return age
            }
          }
          const person = new Person('lfz', '18')*/

            //console.log(126,person)

            /*class Box{
            constructor(num1,num2){
              this.num1 = num1;
              this.num2=num2;
            }
            sum(){
              return num1+num2;
            }
          }
          let box = new Box(12,88);
          console.log(box);*/
            /*[1,3,4].reduce(() =>{

          })*/
            /*let arr = [2,4,4]
          arr.map((index,map)=>{

          })*/

            /*let a1 = {b: {c: {}},d:'ddd'}
          //浅拷贝
          let shadowClone = (source) => {
            let target = {}
            for (let i in source) {
              console.log(142,i);
              target[i] = source[i]
            }
            return target
          }*/
            //console.log(148,toolFn.type(['x','y']));
            /*let a = {name: 'lfz',age: '24'}
          function clone(source) {
            let target = {}
            for(let i in source){
              if(source.hasOwnProperty(i)){
                if(typeof source[i] === 'object'){
                  target[i] = clone(source)
                }else{
                  target[i] = source[i]
                }
              }
            }
            return target
          }*/
            /**
             * cookie
             */
            /*this.setCookie('name','lfz',1)
            console.log(168,this.getCookie('name'));*/
            /*let person = {
                name:'lufangzhou',
                age:'18'
            }
            console.log(172,JSON.stringify(person));
            localStorage.setItem('person',JSON.stringify(person))
            console.log(localStorage.getItem('name'));
        },
          // 函数中的参数分别为 cookie 的名称、值以及过期天数
          setCookie(c_name, value, expiredays) {
              let exdate = new Date(c_name, value, expiredays);
              exdate.setDate(exdate.getDate() + expiredays);
              document.cookie = c_name + "=" + escape(value) +
                  ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
          },
          getCookie(c_name) {
              if (document.cookie.length > 0) {
                  let c_start = document.cookie.indexOf(c_name + "=");
                  if (c_start != -1) {
                      c_start = c_start + c_name.length + 1;
                      let c_end = document.cookie.indexOf(";", c_start);
                      if (c_end == -1) {
                          c_end = document.cookie.length;
                      }

                      return unescape(document.cookie.substring(c_start, c_end));
                  }
              }
              return "";
          },*/
            //打开-创建数据库
            /*let request = window.indexedDB.open('testDB')
            console.log(200,request);*/
            this.openDB(this.myDB.name,this.myDB.version)
            //关闭-删除数据库
            //this.closeDB(this.myDB.db)
            /*setTimeout(()=>{
                this.deleteDB(this.myDB.name)
            },500)*/
        },
          openDB(name, ver) {
              let version = ver || 1
              let request = window.indexedDB.open(name, version)
              request.onerror = (e) => {
                  console.log('open error!');
              }
              request.onsuccess = (e) => {
                  this.myDB.db = e.target.result
                  //console.log(216, 'create success');
              }
              //当我们传入的版本号和数据库当前版本号不一致的时候onupgradeneeded就会被调用
              request.onupgradeneeded = (e) =>{
                  console.log(`DB version changed to ${version}`);
              }
              console.log(217, this.myDB);
          },
          closeDB(db){
            db.close()
          },
          deleteDB(name){
            window.indexedDB.deleteDatabase(name)
          },
        resetData(){
          //this.renderData[0] = {perPrice: 1, number: 10}
          this.$set(this.renderData,0,{perPrice: 1, number: 10})
          this.renderData.splice(1)
          console.log(this.renderData);
        }
      },
      mounted(){
        this.swiper.slideTo(0, 1000, true)
      },
      created() {
        this.loadTestList()
        let user = {
          firstName: 'first',
          lastName: 'last',
          secondName: 'second'
        }
        let nameList  = this.getFullName(user)
        //console.log(109,nameList);
        this.study()
        //console.log(144,isDate('2018-12-25'))
        //console.log(11,eventBus);
        //console.log(47,a,b);
       // console.log(147,this.$route.meta);
      },
      components: {
        DatePicker,
        swiper,
        swiperSlide,
      },
      computed: {
        swiper() {
          return this.$refs.swiper.swiper
        },
        totalPrice(){
            let sum = 0
            for(let i of this.renderData){
              sum += i.perPrice*i.number
            }
            return sum
        }
      }
    };
</script>
<style type="text/scss" lang="scss" scoped>
    .test{
        .active{
            background-color: red;
            color: white;
        }
        .label-list-row{
            margin-top: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            span{
                width: 2rem;
                text-align: center;
            }
        }
    }
    .label-panel{
        height: 5rem;
        border: solid 1px #666666;
        .swiper-item{
            width: 100%;
            height: 100%;
            position: relative;
            display: flex;
            justify-content: center;
            >img{
                width: 100%;
                height: 100%;
            }
            >span{
                color: white;
                position:absolute;
            }
        }
    }

    .p-list-render {
        margin-top: 20px;
        border: solid 1px red;
        .row {
            display: flex;
            justify-content: space-between;
            input, span {
                width: 100px;
            }
            border-bottom: solid 1px #ffffff;
            padding: 6px;
        }
    }

</style>
<style lang="scss">
    .test{
        .swiper-inner {
            width: 100%;
            height: 400px;
            padding-top: 50px;
            padding-bottom: 50px;
        }
        .swiper-slide {
            background-position: center;
            background-size: cover;
            width: 250px;
            height: 100%;
        }
        .swiper-item{
            border-radius: 20px!important;
            //border: solid 3px greenyellow;
            overflow: hidden!important;
        }
        .swiper-slide-next{
            border-radius: 20px!important;
        }
    }
</style>
