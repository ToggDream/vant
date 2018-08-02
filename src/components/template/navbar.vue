<template>
    <div class="navbar">
        <van-row class="navbar-row" type="flex" justify="space-between">
            <van-col class="navbar-col back" span="6"><i class="icon-font">&#xe629;</i></van-col>
            <van-col class="navbar-col search-panel" span="10">
                <i class="icon-font">&#xe6a8;</i><input type="text" placeholder="请输入商家">
            </van-col>
            <van-col class="navbar-col home-btn" @click.native="goHome()" span="6">
                <i class="icon-font">&#xe60a;</i>
            </van-col>
        </van-row>
    </div>
</template>
<script>

    export default {
        data() {
            return {

            };
        },
        methods: {
            goHome(){
                console.log('xx');
                this.$router.push({path:'/home'})
            }
        }
    };
</script>
<style scoped type="text/scss" lang="scss">
    .navbar{
        height: 1rem;
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
            }
            .search-panel{
                width: 100%;
                background-color: rgba(0,0,0,0.2);
                height: 60%;
                border-radius: 4px;
                justify-content: flex-start;
                i{
                    font-size: .4rem;
                    margin: 0 .2rem;
                }
                input::-webkit-input-placeholder {
                    color: rgb(104, 219, 206);
                    font-size: .3rem;
                }
                input{
                    border: none;
                    background-color: rgba(0,0,0,0);
                    color: $white;
                }
            }
            .home-btn{
                i{
                    font-size: .6rem;
                }
            }
        }
    }
</style>
