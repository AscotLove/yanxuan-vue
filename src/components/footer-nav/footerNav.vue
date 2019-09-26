<template>
  <ul class="footerNav">
    <li>
      <a class="iconfont icon-fangzi">
        <span>
        主页
        </span>
      </a>
    </li>
    <li>
      <a class="iconfont icon-cate">
        <span>
          菜单
        </span>
      </a>
    </li>
    <li>
      <a class="iconfont icon-topic">
        <span>
          寻物
        </span>
      </a>
    </li>
    <li>
      <a class="iconfont icon-ShoppingCartArrowDown">
        <span>
          购物车
        </span>
      </a>
    </li>
    <li>
      <a class="iconfont icon-ucenter">
        <span>
          我的
        </span>
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "footerNav",

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/css/mixin.styl';
  @import '../../common/css/extendss.styl';

  .footerNav
    @extend .flex-center
    padding 0 rem(30)
    justify-content space-between
    text-align center
    > li
      font(16)
      white-space nowrap
      .iconfont
        @extend .flex-center
        flex-wrap wrap
        justify-content center
        width rem(80)
        height rem(80)
        &::before
          font(55)
</style>