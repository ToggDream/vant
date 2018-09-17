<template>
    <div class="store">
        <navbar @getSearchName="getSearchName" @getStore="getStore" type="search"></navbar>
        <!--search panel-->
        <van-cell-group>
            <van-row class="operate-row">
                <van-col span="8">
                    <span @click="sort.isShowSort = !sort.isShowSort" type="search">{{sort.name}}</span><i class="icon-font" v-if="!sort.isShowSort">&#xe613;</i><i class="icon-font" v-if="sort.isShowSort">&#xe60f;</i>
                </van-col>
                <van-col span="8"></van-col>
                <van-col span="8"></van-col>
            </van-row>
        </van-cell-group>

        <!--store info-->
        <van-cell-group class="store-info" v-for="(i,index) in store" :key = index >
            <div class="store-info-head">
                <van-row>{{ i.storeName }}</van-row>
                <van-row>
                    <van-col span="12">
                        <van-rate
                                v-model="i.score"
                                :size="16"
                                :count="5"
                                color="#2ba"
                                void-color="#2ba"
                                disabled-color="#ffe002"
                                disabled
                        />
                    </van-col>
                    <van-col span="12" class="store-name">{{ i.address.distance }}km {{ i.address.name }}</van-col>
                </van-row>
            </div>

            <!--store detail info-->
            <van-cell-group>

                <van-cell v-for="(j,index) in i.storeDetail" :key = index>
                    <van-row type="flex" class="store-detail-info">
                        <van-col span="8" >
                            <div class="img-box">
                                <img src="../assets/img/test.png" width="100%" height="100%" alt="">
                            </div>
                        </van-col>
                        <van-col span="16" class="detail-right">
                            <div>{{ j.name }}</div>
                            <div class="price-and-sale">
                                <div class="price">
                                    <span>{{ j.price }}<label>元</label>   </span>
                                </div>
                                <div class="sale">已售{{ j.sale }}</div>
                            </div>
                        </van-col>
                    </van-row>
                </van-cell>

                <!--<van-cell class="go-store-cell">
                    <div class="go-store-detail">
                        <span class="van-cell-text fn-color-theme ">进店查看</span>
                        <van-tag type="danger">enter</van-tag>
                    </div>
                </van-cell>-->

            </van-cell-group>
            <div class="go-store-detail">
                <span class="van-cell-text fn-color-theme ">进店查看</span>
                <van-tag type="danger">enter</van-tag>
            </div>
        </van-cell-group>


        <!--store panel 组件-->
        <van-actionsheet
                v-model="sort.isShowSort"
                :actions="sort.actions"
                @select="onSortSelect"
                cancel-text="取消"
        />
    </div>
</template>
<script>
    import navbar from "@/components/template/navbar"
    import store from "@/assets/js/page/store"
    export default {
      name:'store',
      data() {
        return {
          store: [],
          sort: {
            name: '默认排序',
            isShowSort: false,
            actions: [
              {name: '离我最近', callback: this.onSortSelect},
              {name: '评价最高', callback: this.onSortSelect},
              {name: '最新发布', callback: this.onSortSelect},
              {name: '价格最低', callback: this.onSortSelect},
              {name: '价格最高', callback: this.onSortSelect},
            ]
          },
        }
      },
      methods: {
        onSortSelect(item) {
          this.sort.isShowSort = false;
          this.sort.name = item.name;
          this.getStore();
        },
        getStore(searchName) {
          //console.log(108,searchName);
          this.$fetch('/getStore', {}).then((response) => {
            this.store = response.store
            //console.log(103, this.store);
          })
              .catch(err => {
                console.log(err);
              });
        },
        getSearchName(searchName){
          console.log(117,searchName);
        }
      },
      created() {
        this.getStore();
        //console.log(124,sotre.data().data666);
      },
      components: {
        'navbar': navbar,
        /*'loading':Loading*/
      }
    };
</script>
<style type="text/scss" lang="scss">
    .store{
        .operate-row{
            color: $dark;
            height: .8rem;
            @include vertical-center;
            .van-col{
                @include vertical-center;
                height: 100%;
                .van-col:not(:first-child){
                    border-right: $light 1px solid;
                }
                @include vertical-center;
                span{
                    font-size: $normalSize;
                }
                i{
                    font-size: $smallSize - 0.04rem;
                    margin-left: .16rem;
                }
            }
        }
        .store-info{
            margin-top: .2rem;
            color: $dark;
            padding: .18rem .1rem;
            font-size: $normalSize;
            .store-info-head{
                padding: 0 .3rem;
            }
            .store-name{
                font-size: $smallSize;
                text-align: right;
            }
            .van-row:first-child{
                margin-bottom: .1rem;
            }
        }
        .store-detail-info{
            .img-box{
                /*width: 1.8rem;
                height: 1.64rem;*/
            }
            .detail-right{
                padding: .1rem .2rem!important;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
            .price-and-sale{
                color: $dark;
                @include vertical-center;
                justify-content: space-between;
                .price{
                    color: $theme;
                    span{
                        font-size: .36rem;
                        font-weight: bolder;
                    }
                    label{
                        font-size: $normalSize;
                    }
                }
            }
        }
        .go-store-detail{
            padding-top: .2rem;
            text-align: center;
        }

    }
</style>
