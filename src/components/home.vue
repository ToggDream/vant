<template>
  <div class="home">
      <router-link to="/store">go store</router-link>
      <div class="amap-page-container">
          <el-amap class="home-map" vid="amapDemo" :amap-manager="amapManager" :center="center" :zoom="zoom" :plugin="plugin" :events="events" >
          </el-amap>
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
                plugin: ['ToolBar', {
                    pName: 'MapType',
                    defaultType: 0,
                    events: {
                        init(o) {
                            console.log(o);
                        }
                    }
                }],
                events: {
                    init: (o) => {
                        //console.log(o.getCenter())
                        //console.log(this.$refs.map.$$getInstance())
                        o.getCity(result => {
                            console.log(result)
                        })
                    },
                    'moveend': () => {
                    },
                    'zoomchange': () => {
                    },
                    'click': (e) => {
                        console.log('点击');
                        //alert('map clicked');
                    }
                },
            }
        },
        methods:{
            getPosition(){

            }
        },
        created(){
            this.getPosition();
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
