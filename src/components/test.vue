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

    </div>
</template>
<script>
    import eventBus from '../assets/js/eventBus'
    //import data from '../assets/js/exportTest'
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
          firstName:''
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
        study(){
          // good
          class Person{
            constructor(name,age){
              this.name = name
              this.age = age
            }
            say(){
              return name
              //return age
            }
          }
          const person = new Person('lfz', '18')

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
        console.log(144,isDate('2018-12-25'))
        //console.log(11,eventBus);
        //console.log(47,a,b);
      },
      components: {
        DatePicker,
        swiper,
        swiperSlide,
      },
      computed: {
        swiper() {
          return this.$refs.swiper.swiper
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
