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
        <van-actionsheet v-model="showAreaSheet" title="支持以下配送方式">
            <van-area :area-list="areaList" />
        </van-actionsheet>


    </div>
</template>
<script>
    import area from "@/assets/js/area"
    export default {
        data() {
            return {
                showAreaSheet: false,
                areaList:area
            };
        },
        methods: {
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
