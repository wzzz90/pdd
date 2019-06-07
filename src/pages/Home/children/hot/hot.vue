<template>
  <div class="hot">
    <!--轮播图-->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../../imgs/rowing/s1.png" alt="" width="100%"></div>
          <div class="swiper-slide"><img src="../../imgs/rowing/s2.png" alt="" width="100%"></div>
          <div class="swiper-slide"><img src="../../imgs/rowing/s3.png" alt="" width="100%"></div>
          <div class="swiper-slide"><img src="../../imgs/rowing/s4.png" alt="" width="100%"></div>
          <div class="swiper-slide"><img src="../../imgs/rowing/s5.png" alt="" width="100%"></div>
          <div class="swiper-slide"><img src="../../imgs/rowing/s6.png" alt="" width="100%"></div>
          <div class="swiper-slide"><img src="../../imgs/rowing/s7.png" alt="" width="100%"></div>
        </div>
        <div class="swiper-pagination"></div>
      </div >
      <hotNav></hotNav>
      <div class="hot-ad">
        <img src="./../../imgs/hot_ad/home_ad.gif" width="100%" alt="">
      </div>
      <hotShopList></hotShopList>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css';
import hotNav from './hotNav'
import hotShopList from './hotShopList'

export default {
  data () {
    return {
    };
  },

  components: {
    hotNav,
    hotShopList
  },

  computed: {},

  mounted(){
    //创建swiper实例
      new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      })
  },

  methods: {}
}

</script>
<style lang='scss' scoped>
.hot {
  padding-top: 50px;
  .hot-ad {
    background-color: #fff;
    margin: 8px 0;
    padding: 5px;
  }
      
}
</style>