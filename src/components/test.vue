<template>
    <div class="test">
        <!--标题点击问题-->
        <ul>
            <li v-for="(i,index) in list" @click="currentNav = index" :class="{ active: index === currentNav}">{{i}}</li>
        </ul>
        <button @click="eventBusTestClick()">eventBusTestClick</button>
    </div>
</template>
<script>
    import eventBus from '../assets/js/eventBus'
    export default {
        data() {
            return {
              list:[11111,22222,33333],
              currentNav:1
            };
        },
        methods: {
          eventBusTestClick(){
            eventBus.$emit('test','test666');
          }
        },
        created(){
          //console.log(11,eventBus);
        },
        components:{

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
