<template>
    <div>
        <h1>vant</h1>
        <van-button type="primary">主要按钮</van-button>
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
<style>
</style>
