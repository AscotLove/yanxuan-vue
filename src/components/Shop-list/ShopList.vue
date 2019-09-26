<template>
  <div class="shop-list">
    <div class="title">
      <span>类目热销榜</span>
      <button>更多</button>
    </div>
    <div class="shop-title">
      <a class="shop-hot">
        <span>热销榜</span>
        <img src="javascript:;" alt="">
      </a>
      <a class="shop-hot">
        <span>热销榜</span>
        <img src="javascript:;" alt="">
      </a>
    </div>
    <div class="shop-menus">
      <a href="javascript:;">
        <p>居家生活榜</p>
        <img src="javascript:;" alt="">
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ShopList",

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/css/mixin.styl';
  @import '../../common/css/extendss.styl';
  .shop-list
    height rem(710)
    padding 0 rem(30)
    margin-bottom rem(20)
    .title
      @extend .flex-center
      justify-content center
      font(32)
      height rem(100)
    .shop-title
      @extend .flex-center
      flex-wrap wrap
      .shop-hot
        @extend .flex-center
        justify-content space-between
        flex-wrap wrap
        width rem(340)
        font(28)
    .shop-menus
      @extend .flex-center
      justify-content space-between
      align-content space-between
      flex-wrap wrap
      >a
        @extend .flex-center
        flex-wrap wrap
        justify-content center
        font(24)
        background-color #F5F5F5
        width rem(165)
        height rem(180)




</style>