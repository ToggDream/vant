<template>
    <div class="van-test">
        <van-row type="flex" justify="space-around">
            <van-col span="8"><van-button type="primary">主要按钮</van-button></van-col>
            <van-col span="8"><van-button type="primary">主要按钮</van-button></van-col>
            <van-col span="8"><van-button type="primary">主要按钮</van-button></van-col>
        </van-row>
        <van-row class="choose-area">
            <van-button type="primary" @click="showAreaSheet = !showAreaSheet">选择地区</van-button>
        </van-row>
        <van-actionsheet v-model="showAreaSheet" title="请选择地址">
            <van-area :area-list="areaList" :value="areaCode" @confirm="chooseArea()" @cancel="showAreaSheet=false" />
        </van-actionsheet>
        <div>
            <!--<lazy-component>
                <img v-for="img in imageList" v-lazy="img" >
            </lazy-component>-->
        </div>

    </div>
</template>
<script>
    import area from "@/assets/js/area"

    export default {
        data() {
            return {
                showAreaSheet: false,
                areaList:area,
                areaCode:'110101',
                /*imageList: [
                    'https://img.yzcdn.cn/1.jpg',
                    'https://img.yzcdn.cn/2.jpg'
                ]*/
            };
        },
        methods: {
            chooseArea(){
                console.log(29, this.areaCode);
                //console.log(31,document.getElementsByClassName('van-picker-column__item--selected').innerText());
            }
        }
    };
</script>
<style type="text/scss" lang="scss">
    .van-test{
        .van-button{
            width: 2rem;
            .van-button__text{
                //white-space: nowrap;
            }
        }
        .choose-area{
            margin-top: 1rem;
        }
    }
</style>
