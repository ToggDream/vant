<template>
    <div class="p-father">
        <router-link :to="i.path" v-for="(i,index) in nav"
            :class="currentIndex === index?'actived':''"
            @click="currentIndex = index"
        >{{i.name}}</router-link>

        <!--keepAlive-->
       <!-- <keep-alive v-if="!this.$router.meta.keepAlive"></keep-alive>-->

        <div class="p-panel">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'father',
    data(){
      return {
        nav: [
          {name:'内容一', path: 'child_1'},
          {name:'内容二', path: 'child_2'}
        ],
        currentIndex: 0
      }
    }
  }
</script>
<style scoped type="text/scss" lang="scss">
    .p-father{
        .actived{
            color: red;
        }
        .p-panel{
            padding: 16px;
            border: solid 1px black;
        }
    }
</style>
