<template>
    <div class="store-detail">
        <navbar type="title" titleName="商家详情"></navbar>
        <div class="image-shuffling">
           <!-- <van-cell-group>
                <van-switch-cell v-model="checked" title="标题" />
            </van-cell-group>
            <van-swipe-cell :right-width="65" :left-width="65">
                <span slot="left">选择</span>
                <van-cell-group>
                    <van-cell title="单元格" value="内容" />
                </van-cell-group>
                <span slot="right">删除</span>
            </van-swipe-cell>-->
        </div>
    </div>
</template>
<script>
    import navbar from "@/components/template/navbar"
    export default {
        name: 'storeDetail',
        data(){
            return{
                checked: true
            }
        },
        methods:{
            onClose(clickPosition, instance) {
                switch (clickPosition) {
                    case 'left':
                    case 'cell':
                    case 'outside':
                        instance.close();
                        break;
                    case 'right':
                        Dialog.confirm({
                            message: '确定删除吗？'
                        }).then(() => {
                            instance.close();
                        });
                        break;
                }
            }
        },
        components:{
            'navbar': navbar,
        }
    }
</script>
<style type="text/scss" lang="scss">
    .store-detail{

    }
</style>
