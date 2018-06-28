<template>
    <div>
        <van-row type="flex" justify="space-around">
            <van-col span="8"><van-button type="primary">主要按钮</van-button></van-col>
            <van-col span="8"><van-button type="primary">主要按钮</van-button></van-col>
            <van-col span="8"><van-button type="primary">主要按钮</van-button></van-col>
        </van-row>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                activeKey: 0
            };
        },
        methods: {
            onClick(key) {
                this.activeKey = key;
            }
        }
    };
</script>
<style type="text/scss" lang="scss">
    .van-button{
        width: 2rem;
        .van-button__text{
            //white-space: nowrap;
        }
    }
</style>
