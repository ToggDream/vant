<template>
    <div class="loading" v-show="loading.isShow">
        <div class="loading-child">
            <van-loading color="white"/>
        </div>
    </div>
</template>
<script>
    import {mapState,mapMutations,mapGetters } from 'vuex';//引入vuex的辅助函数  mapState,mapGetters放在couputed中;magMutations放在methods中
    export default {
        name: 'loading',
        data(){
            return{

            }
        },
        mounted(){
            //杨辉三角
                /*let n = 5;
                for( var i = 0 ; i < n ; i++ ){   //一共N行
                    for ( var j = 0 ; j <= i ; j++ ) {  //每行数字的个数即为行号、例如第1行1个数、第2行2个数
                        console.log(24,this.Combination(i,j)+"  ");
                    }
                }*/


            //console.log(17,this.loading.isShow);//false
            //this.changeMaskState(true);
            //console.log(18,this.loading.isShow);//true
        },
        computed:{
            //使用对象展开运算符将此对象混入到外部对象中
            ...mapState(['loading']),
        },
        methods: {
            ...mapMutations(['changeMaskState']),
            /*Combination(m, n) {
                if (n === 0)
                    return 1;  //每行第一个数为1
                else if (m === n)
                    return 1; //最后一个数为1
                //其余都是相加而来
                else
                    return this.Combination(m - 1, n - 1) + this.Combination(m - 1, n);
            },*/
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
