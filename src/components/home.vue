<template>
  <div class="home">
      <router-link to="/store">go store</router-link>
      <div class="amap-page-container">
          <el-amap class="home-map"
                   vid="amapDemo"
                   :amap-manager="amapManager"
                   :center="center"
                   :zoom="zoom"
                   :plugin="plugin"
          >
          </el-amap>
          <div class="toolbar">
             <!-- <button @click="getMap()">get map</button>-->
          </div>
      </div>

  </div>
</template>
<script>
    //6e9a0349872b8b0f2923e901f94d0e2e
    export default {
        name: 'home',
        data() {
            return {
                amapManager: new this.$VueAMap.AMapManager(),
                zoom: 12,
                center: [121.59996, 31.197646],
                plugin: [{
                    pName: 'Geolocation',
                    events: {
                        init(o) {
                            // o 是高德地图定位插件实例
                            o.getCurrentPosition((status, result) => {
                                 console.log(35,result);  //  能获取定位的所有信息
                                if (result && result.position) {
                                    self.str = result.formattedAddress;
                                    console.log(38,self.str);
                                    /*self.positions.address = self.str.substring(self.str.indexOf('市') + 1);
                                    self.positions.lng = result.position.lng;
                                    self.positions.lat = result.position.lat;
                                    self.positions.loaded = true;
                                    self.$nextTick();
                                    // 把获取的数据提交到 store 的数据中，以便其他单文件组件使用
                                    self.$store.commit('POSITION', self.positions);
                                    // console.log(self.positions);
                                    sessionStorage.setItem('id', JSON.stringify(self.positions));*/
                                }
                            });
                        }
                    }
                }],
                position:{
                    address:'',
                    lnglatXY:[],
                    lng: '',
                    lat: ''
                }
            }
        },
        methods:{

        },
        created(){
           // this.getPosition();
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped type="text/scss" lang="scss">
   .home{
       .home-map{
           height: 6rem;
       }
   }
</style>
