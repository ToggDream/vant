<template>
    <div class="homePosition">
        <router-link to="/store">go store</router-link>
        <div class="home-map"></div>
    </div>
</template>
<script>
    //6e9a0349872b8b0f2923e901f94d0e2e
    import { lazyAMapApiLoaderInstance } from 'vue-amap';
    export default {
        name: 'homePosition',
        data() {
            return {

            }
        },
        methods:{
            initMap(){
              let self = this
              lazyAMapApiLoaderInstance.load().then(() => {
                //初始化地图
               let map = new AMap.Map('home-map', {
                  resizeEnable: true,
                  zoom: 20,
                  center: new AMap.LngLat(113.309213,23.146569)
                });
                //这个是添加AMapUI的点标注
                AMapUI.loadUI(['overlay/SimpleMarker'], (SimpleMarker) => {
                  const marker = new SimpleMarker({
                    iconLabel: 'A',
                    iconStyle: 'red',
                    color:"#fff",
                    map: map,
                    position: [113.309213,23.146569],
                  });
                });
                //使用定位
                /*map.plugin('AMap.Geolocation', function() {
                  let geolocation = new AMap.Geolocation({
                    enableHighAccuracy: true,//是否使用高精度定位，默认:true
                    timeout: 10000,          //超过10秒后停止定位，默认：无穷大
                    buttonOffset: new AMap.Pixel(10, 10),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
                    zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                    buttonPosition:'RB'
                  });
                  map.addControl(geolocation);
                  geolocation.getCurrentPosition();
                  AMap.event.addListener(geolocation, 'complete', self.onComplete);//返回定位信息
                });*/
              });

            }
        },
        created(){
            /*if(true){
                var color = 'red';
            }*/
            var arr1 = [1,2,5,8];
            var arr2 = arr1 ;
            var str1 = arr1[2];
            console.log(arr2);//1,2,5,8
            console.log(str1);//5
            arr2[4] = 99;
            str1 = 6;
            console.log(arr1);//1,2,5,8,99
            console.log(arr1[2]);//5
            this.initMap();
            // 我们依旧可以用上面的 sort 的原理实现乱序

           /* let tempArr = [1,2,3,4,5,'6',7,'8','a','b','z'].sort(function(){
                return Math.random() > 0.5 ? -1 : 1;
            })
            console.log(61,tempArr);*/
    // 因为里面有随机数,所以答案没有标准答案,我这边跑了一次是输出这个
    //["6", "z", 3, "b", 5, 2, 7, "8", "a", 1, 4]
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped type="text/scss" lang="scss">
    .homePosition{
        .home-map{
            height: 6rem;
        }
    }
</style>
