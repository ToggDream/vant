<template>
    <div class="test">
        <!--标题点击问题-->
        <ul>
            <li v-for="(i,index) in list" @click="currentNav = index" :class="{ active: index === currentNav}">{{i}}</li>
        </ul>
    </div>
</template>
<script>

    export default {
        data() {
            return {
              list:[11111,22222,33333],
              currentNav:1
            };
        },
        methods: {

        }
    };
</script>
<style type="text/scss" lang="scss">
    .test{
        .active{
            background-color: red;
        }
    }
</style>
