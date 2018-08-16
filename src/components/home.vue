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
          <div>当前位置：{{ position.address }}</div>
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
                zoom: 20,
                center: [121.59996, 31.197646],
                plugin: [{
                    pName: 'Geolocation',
                    events: {
                        init(o) {
                            // o 是高德地图定位插件实例
                            o.getCurrentPosition((status, result) => {
                                 //console.log(35,result);  //  能获取定位的所有信息
                                if (result && result.position) {
                                    self.str = result.formattedAddress;
                                    //console.log(38,self.str);
                                    let position = {
                                      address:self.str
                                    }
                                    sessionStorage.setItem('position',JSON.stringify(position))
                                }
                            });
                        }
                    }
                }],
                position: {
                    lng: '',
                    lat: '',
                    address: '',
                    loaded: false
                },
            }
        },
        methods:{
            getPosition(){
              this.position = JSON.parse(sessionStorage.getItem('position'))
            }
        },
        created(){
            this.getPosition()
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped type="text/scss" lang="scss">
   .home{
       .home-map{
           display: none;
           height: 6rem;
       }
   }
</style>
