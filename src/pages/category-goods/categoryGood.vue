<template>
  <div class="cateList-right" ref="cateListRight">
    <div v-if="goods">
      <div class="cateList-right-img">
        <img :src="goods.wapBannerUrl" alt="">
      </div>
      <div class="cateList-right-list">
        <div class="cateList-right-title">
          {{goods.name}}
        </div>
        <ul class="cateList-right-menus">
          <li v-for="subCat in goods.subCateList" :key="subCat.name">
            <img :src="subCat.bannerUrl" alt="">
            <p>{{subCat.name}}</p>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  import {mapState} from 'vuex';

  export default {
    name: "categoryGood",
    props: {
      id: String,
    },

    computed: {
      ...mapState(['categories']),
        goods: {
          get() {
            return this.categories[this.id]

          },
          set(newVal) {
            this.goods = newVal;
          }
        }
    },
    updated() {
        this.cateListScroll = new BScroll(this.$refs.cateListRight)

    },
    /* mounted() {
       this.$nextTick(() => {
         this.cateListScroll = new BScroll(this.$refs.cateListRight)
       })
     },*/
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/css/mixin.styl";
  @import '../../common/css/extendss.styl';
  .cateList-right
    padding 0 rem(30)
    margin rem(30) 0 rem(21)
    width rem(598)
    height rem(1014)
    overflow hidden
    .cateList-right-img
      >img
        width 100%
        height rem(192)
    .cateList-right-list
      font(28)
    .cateList-right-menus
      @extend .flex
      flex-wrap wrap
      justify-content space-between
      > li
        @extend .flex
        flex-wrap wrap
        justify-content center
        align-content flex-start
        width rem(144)
        img
          width 100%
          height rem(144)
        > p
          font(24)
          text-align center


</style>