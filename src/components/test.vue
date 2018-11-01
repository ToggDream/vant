<template>
    <div class="test">
        <!--标题点击问题-->
        <ul>
            <li v-for="(i,index) in list" @click="currentNav = index" :class="{ active: index === currentNav}">{{i}}</li>
        </ul>
        <button @click="eventBusTestClick()">eventBusTestClick</button>
        <date-picker v-model="time1" :first-day-of-week="1"></date-picker>
        <!--<date-picker v-model="time2" type="datetime" :time-picker-options="timePickerOptions"></date-picker>
        <date-picker v-model="time3" range :shortcuts="shortcuts"></date-picker>-->
    </div>
</template>
<script>
    import eventBus from '../assets/js/eventBus'
    import DatePicker from 'vue2-datepicker'
    export default {
        data() {
            return {
              list:[11111,22222,33333,4444],
              currentNav:1,
              time1: '2018-01-01',
              /*time2: '',
              time3: '',*/
              /*shortcuts: [
                {
                  text: 'Today',
                  onClick: () => {
                    this.time3 = [ new Date(), new Date() ]
                  }
                }
              ],
              timePickerOptions:{
                start: '00:00',
                step: '00:30',
                end: '23:30'
              }*/
            };
        },
        methods: {
          eventBusTestClick(){
            eventBus.$emit('test','test666');
          }
        },
        created(){
          console.log(11,eventBus);
        },
        components:{
          DatePicker
        }
    };
</script>
<style type="text/scss" lang="scss">
    .test{
        .active{
            background-color: red;
        }
    }
</style>
