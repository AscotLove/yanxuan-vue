<template>
  <header>
    <div class="m-defaultBanner">
      <div class="brand">
        <div class="brand-logo">严选</div>
        <p>前往APP领1000元新用户现金礼包</p>
        <p>网易自营 品质生活</p>
      </div>
      <a class="w-button" href="javascript:;">打开APP</a>
    </div>
    <div class="m-indexHd">
      <div class="line">
        <h1>网易严选</h1>
        <input type="text">
        <div class="loginBtn">登录</div>
      </div>

    </div>
    <slot name="navLi"></slot>

  </header>
</template>

<script>
  export default {
    name: "Homehead",

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/css/mixin.styl';
@import '../../common/css/extendss.styl';
  header
    .m-defaultBanner
      font-size rem(12)
      @extends .flex-center
      height rem(104)
      padding 0 rem(30)
      justify-content space-between
      background #333333
      color #fff
      .brand
        white-space nowrap
        .brand-logo
          float left
          width rem(72)
          height rem(72)
          margin-right rem(10)
          border-radius rem(7)
          background-color  #b4282d
        >p
          margin rem(8) 0
      .w-button
        background-color #b4282d
        border-radius rem(4)
        text-align center
        line-height rem(42)
        padding 0 rem(16)
        color #fff
    .m-indexHd
      .line
        @extend .flex-center
        justify-content space-between
        height rem(88)
        padding 0 rem(30)
        >h1
          font-size rem(50)
        input
          width 58%
          border-radius rem(5)
          background-color #ddd
          height rem(70)
          margin 0 rem(10)
        .loginBtn
          font-size rem(18)
          border-radius rem(5)
          border rem(1) solid #b4282d
          color #b4282d
          padding 0 rem(8)
          line-height rem(35)


    .m-tabs
      @extends .flex-center
      height rem(60)
      font-size rem(18)
      padding 0 rem(30)
      justify-content space-between
      div
        &.active
          color #b4282d
          outline-color #b4282d


    .tabWrap
      @extends .flex-center
      display none
      flex-wrap wrap
      >li
        font(12)
        width rem(150)
        height rem(56)
        text-align center
        line-height rem(56)
        border rem(1) solid #ddd
        margin 0 0 rem(40) rem(30)
      .tabWrap-li
        width 100%
        margin-bottom rem(24)
</style>