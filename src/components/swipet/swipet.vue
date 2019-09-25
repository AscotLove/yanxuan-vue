<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/66ea9b0ded3ab38c16e81763839edf90.jpg?imageView&quality=75&thumbnail=750x0" alt="">
      </div>
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/7d874fbc2320cd2ea8c124b61a75b15c.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
      </div>
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/a412dcf435135e294edbcad885786060.jpg?imageView&quality=75&thumbnail=750x0" alt="">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/css/swiper.css';

  export default {
    name: "swipet",

    method: {
      newSwiper() {
        new Swiper ('.swiper-container', {
          direction: 'vertical', // 垂直切换选项
          loop: true, // 循环模式选项

// 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },

// 如果需要前进后退按钮
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },

// 如果需要滚动条
          scrollbar: {
            el: '.swiper-scrollbar',
          },
        })
      }
    },
    watch() {
      this.$nextTick(() => {
        this.newSwiper()
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .swiper-container
    width 100%
    height rem(370)
</style>