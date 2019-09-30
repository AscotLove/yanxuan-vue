<template>
  <div id="app">
    <Homehead>
      <div slot="navLi" v-if="$route.meta.showNav">

        <nav class="m-tabs">
          <div class="active">
            推荐
          </div>
          <div>
            居家生活
          </div>
          <div>
            服饰鞋包
          </div>
          <div>
            美食酒水
          </div>
          <div class="iconfont">
            &#xe602;
          </div>
        </nav>
        <ul class="tabWrap">

          <li class="tabWrap-li">
            <a>
              全部频道
            </a>
            <i>
              &#xe600;
            </i>
          </li>
          <li>
            <a href="javascript:;">推荐</a>
          </li>
          <li>
            <a href="javascript:;">居家生活</a>
          </li>
          <li>
            <a href="javascript:;">服饰鞋包</a>
          </li>
          <li>
            <a href="javascript:;">美食酒水</a>
          </li>
          <li>
            <a href="javascript:;">个护清洁</a>
          </li>
          <li>
            <a href="javascript:;">母英亲子</a>
          </li>
          <li>
            <a href="javascript:;">运动旅行</a>
          </li>
          <li>
            <a href="javascript:;">数码家电</a>
          </li>
          <li>
            <a href="javascript:;">全球特色</a>
          </li>
        </ul>
      </div>
    </Homehead>
    <router-view />
    <footerNav class="footerNav" />
  </div>
</template>

<script>
import footerNav from '@components/footer-nav/footerNav.vue';
import Homehead from '@components/Home-head/Homehead.vue';
export default {
  name: 'app',
  components: {
    footerNav,
    Homehead
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import './common/css/mixin.styl';
#app
  position relative
  width 100%
  height 100%
  overflow hidden
  .footerNav
    position absolute
    left 0
    bottom 0
</style>
