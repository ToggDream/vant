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
      <el-amap-search-box class="search-box" :search-option="searchOption" :on-search-result="onSearchResult"></el-amap-search-box>
      <div class="father">
          <div class="child">1</div>&nbsp;
          <div class="child">2</div>&nbsp;
          <div class="child">3</div>
      </div>
  </div>
</template>
<script>
    //6e9a0349872b8b0f2923e901f94d0e2e
    export default {
        name: 'home',
        data() {
            let vueObj = this;
            return {
              position: {
                lng: '',
                lat: '',
                address: 'none',
                loaded: false
              },
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
                                    console.log(38,self.str);
                                    vueObj.position.address = self.str;
                                }
                            });
                        }
                    }
                }],
                //search
              searchOption: {
                city: '上海',
                citylimit: true
              },
            }
        },
        methods:{
          onSearchResult(pois) {
            let latSum = 0;
            let lngSum = 0;
            /*if (pois.length > 0) {
              pois.forEach(poi => {
                let {lng, lat} = poi;
                lngSum += lng;
                latSum += lat;
                this.markers.push([poi.lng, poi.lat]);
              });
              let center = {
                lng: lngSum / pois.length,
                lat: latSum / pois.length
              };
              this.mapCenter = [center.lng, center.lat];
            }*/
            console.log(77,pois);
          }
        },
        mounted(){

        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped type="text/scss" lang="scss">
   .home{
       .home-map{
           //display: none;
           height: 6rem;
       }
       .father{
           width: 200px;
           border: solid 1px red;
           text-align: justify;
           .child{
                display: inline-block;
           }
           &:after {
               content: "";
               display: inline-block;
               width: 100%;
           }
       }
   }
</style>
