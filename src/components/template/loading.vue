<template>
    <div class="loading" v-show="loading.isShow">
        <div class="loading-child">
            <van-loading color="white"/>
        </div>
    </div>
</template>
<script>
    import {mapState,mapMutations,mapGetters } from 'vuex';//引入vuex的辅助函数  mapState,mapGetters放在couputed中;magMutations放在methods中
    import eventBus from '@/assets/js/eventBus'
    export default {
        name: 'loading',
        data(){
            return{

            }
        },
        mounted(){



            //console.log(17,this.loading.isShow);//false
            //this.changeMaskState(true);
            //console.log(18,this.loading.isShow);//true
        },
        computed:{
            //使用对象展开运算符将此对象混入到外部对象中
            ...mapState(['loading']),
        },
        created(){
          console.log(64,eventBus);
          eventBus.$on('test',(data)=>{
            console.log(32,data);
          })
        },
        methods: {
            ...mapMutations(['changeMaskState']),
        }
    }
</script>
<style type="text/scss" lang="scss" scoped>
    .loading{
        height: 100%;
        width: 100%;
        position: absolute;
        z-index: 999;
        .loading-child{
            width: 3rem;
            height: 3rem;
            background-color: rgba(0,0,0,0.5);
            position: absolute;
            left: 0;
            top:0;
            right:0;
            bottom: 0;
            z-index: 1000;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: auto;
        }
    }
</style>
