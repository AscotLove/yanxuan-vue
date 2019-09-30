<template>
  <ul class="footerNav">
    <li>
      <router-link to="/Home" class="iconfont icon-fangzi">
        <span>
        主页
        </span>
      </router-link>
    </li>
    <li>
      <router-link to="/CateList/categoryGood/0" class="iconfont icon-cate">
        <span>
          菜单
        </span>
      </router-link>
    </li>
    <li>
      <router-link to="/Topic" class="iconfont icon-topic">
        <span>
          识物
        </span>
      </router-link>
    </li>
    <li>
      <a class="iconfont icon-ShoppingCartArrowDown" >
        <span>
          购物车
        </span>
      </a>
    </li>
    <li>
      <router-link to="/User" class="iconfont icon-ucenter">
        <span>
          我的
        </span>
      </router-link>
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
    width 100%
    height rem(98)
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