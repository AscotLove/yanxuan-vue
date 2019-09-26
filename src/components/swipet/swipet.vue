<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img
          src="https://yanxuan.nosdn.127.net/66ea9b0ded3ab38c16e81763839edf90.jpg?imageView&quality=75&thumbnail=750x0"
          alt="">
      </div>
      <div class="swiper-slide">
        <img
          src="https://yanxuan.nosdn.127.net/7d874fbc2320cd2ea8c124b61a75b15c.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
      </div>
      <div class="swiper-slide">
        <img
          src="https://yanxuan.nosdn.127.net/a412dcf435135e294edbcad885786060.jpg?imageView&quality=75&thumbnail=750x0"
          alt="">
      </div>
    </div>

  </div>
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/css/swiper.css';

  export default {
    name: "swipet",

    methods: {
      newSwiper() {
        new Swiper('.swiper-container', {
          //direction: 'vertical', // 垂直切换选项
          loop: true, // 循环模式选项
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          },
// 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },

// 如果需要滚动条
          scrollbar: {
            el: '.swiper-scrollbar',
          },
        })
      }
    },
    mounted() {
      this.newSwiper()
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .swiper-container
    width 100%
    height rem(370)
    img
      width 100%
      height 100%
</style>