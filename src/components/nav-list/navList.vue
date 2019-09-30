<template>
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <ul class="menu-nav"  v-for="(kingKongLists,index) in kingKongListArr" :key="index">
        <li v-for="kingKong in kingKongLists" :key="kingKong.text">
          <a :href="kingKong.schemeUrl">
            <img :src="kingKong.picUrl" alt="">
            <p>{{kingKong.text}}</p>
          </a>
        </li>

      </ul>

    </div>
  </div>
</template>

<script>
  import _ from 'lodash'
  import Swiper from 'swiper';
  export default {
    name: "navList",
    props: {
      kingKongList: Array,
    },
    computed: {
      kingKongListArr() {
        return _.chunk(this.kingKongList, 10)
      }
    },
    methods: {
      newSwiper() {
        new Swiper("swiper-wrapper",{
          direction: 'vertical', // 垂直切换选项
          loop: true, // 循环模式选项
        })
      }
    },
    mounted() {
      this.newSwiper()
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/css/extendss.styl';
  @import '../../common/css/mixin.styl';
  .menu-nav
    @extends .flex-center
    flex-wrap wrap
    li
      height rem(156)
      > a
        margin rem(10) rem(20)
        font(16)
        height 100%
        text-align center
        img
          width rem(110)
          height rem(110)
</style>