<template>
  <ul class="g-grow">
    <li class="iconfont icon-pinpai">网易自营品牌</li>
    <li class="iconfont icon-iconfont-">30天无忧退货</li>
    <li class="iconfont icon-tuikuan">48小时快速退款</li>
  </ul>
</template>

<script>
  export default {
    name: "Home"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  .g-grow
    @extends .flex-center
    padding 0 rem(30)
    justify-content space-between
    font(16)
  .menu-nav
    @extends .flex-center
    justify-content space-between
    flex-wrap wrap
    li
      >a
        margin rem(10) rem(20)
        img
          width rem(110)
          height rem(110)


</style>