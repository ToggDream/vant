<template>
    <div class="navbar">
        <van-row class="navbar-row" type="flex" justify="space-between">
            <van-col class="navbar-col back" @click.native="back()" span="6"><i class="icon-font">&#xe629;</i></van-col>
            <van-col v-if="type === 'search'" class="navbar-col search-panel" span="10">
                <div>
                    <i class="icon-font">&#xe6a8;</i><input type="text" placeholder="请输入商家" @focus="isSearchBtnShow=true" @blur="isSearchBtnShow=false" v-model="searchName">
                </div>
                <van-button v-show="isSearchBtnShow" @click="searchClick()" class="search-btn"  type="default">搜索</van-button>
            </van-col>
            <van-col v-if="type === 'title'" class="navbar-col nav-title" span="10">
                <div>{{titleName}}</div>
            </van-col>
            <van-col class="navbar-col home-btn" @click.native="goHome()" span="6">
                <i class="icon-font">&#xe60a;</i>
            </van-col>
        </van-row>
    </div>
</template>
<script>

  export default {
    name:'navbar',
    props:['type','titleName'],//子组件用props接收到了父组件one参数
    data() {
      return {
        searchName:'',
        isSearchBtnShow:false
      };
    },
    methods: {
      goHome() {
        this.$router.push({path: '/home'})
      },
      back() {
        this.$router.go(-1);//返回上一层
      },
      searchClick() {
        this.isSearchBtnShow = true;
        // 子组件中触发父组件方法ee并传值cc12345
        this.$emit('getStore', this.searchName)
      }
    },
    mounted(){
      this.$emit('getSearchName',this.searchName);//利用$emit来传值，getSearchName，this.searchName
      console.log(43,this.type);
    },
    watch:{
      $route(now,old){     //监控路由变换，控制返回按钮的显示
        console.log(31,now);
        if(now.path==="/home"){
          
        } else{

        }
      }
    }
  };
</script>
<style scoped type="text/scss" lang="scss">
    .navbar{
        height: $navHeight;
        background-color: $theme;
        color: $white;
        padding: 0 .1rem;
        .navbar-row{
            height: 100%;
            align-items: center;
            .navbar-col{
                @include vertical-center;
            }
            .back{
                i{font-size: .6rem;}
                justify-content: flex-start;
                cursor: pointer;
            }
            .search-panel{
                width: 100%;
                background-color: rgba(0,0,0,0.2);
                height: $navHeight*0.6;
                border-radius: 4px;
                justify-content: space-between;
                align-items: center;
                .search-btn{
                    height: 98%;
                    line-height: 98%;
                    width: 1.2rem;
                }
                i{
                    font-size: .3rem;
                    margin: 0 .2rem;
                }
                input::-webkit-input-placeholder {
                    color: rgb(104, 219, 206);
                    font-size: $smallSize;
                }
                input{
                    border: none;
                    background-color: rgba(0,0,0,0);
                    color: $white;
                    height: $navHeight*0.6;
                    line-height:$navHeight*0.6;
                    font-size: $smallSize;
                }
            }
            .home-btn{
                display: flex;
                justify-content: flex-end;
                i{
                    font-size: .6rem;
                    margin-right: .1rem;
                }
            }
        }
    }
</style>
