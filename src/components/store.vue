<template>
    <div class="store">
        <navbar></navbar>
        <div>
            <van-panel title="标题" desc="描述信息" status="状态">
                <div>内容</div>
            </van-panel>
        </div>
    </div>
</template>
<script>
    import navbar from "@/components/template/navbar"
    export default {
        data() {
            return {

            };
        },
        methods: {

        },
        components:{
            'navbar': navbar
        }
    };
</script>
<style type="text/scss" lang="scss">
    .store{

    }
</style>
