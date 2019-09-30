<template>
  <div class="home">
    <ul class="g-grow">
      <li class="iconfont" v-for="policyDescList in homeState.policyDescList" :key="policyDescList.desc">
        <i :style="'background-image:url('+policyDescList.icon +')'"></i>
        <span>{{policyDescList.desc}}</span>
      </li>
    </ul>
    <swipet></swipet>
    <navList v-if="homeState.kingKongModule"  :kingKongList="homeState.kingKongModule.kingKongList" ></navList>
    <ShopList></ShopList>
  </div>

</template>

<script>
  import navList from '@components/nav-list/navList.vue'
  import swipet from '@components/swipet/swipet'
  import ShopList from '@components/Shop-list/ShopList.vue'
  import {mapState,mapActions} from 'vuex';
  export default {
    name: "Home",
    components: {
      navList,
      swipet,
      ShopList
    },
    computed: {
      ...mapState(['homeState']),
    },
    methods: {
      ...mapActions(['homeUpdate'])
    },
    created() {
      this.homeUpdate();
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/css/mixin.styl';
@import '../../common/css/extendss.styl';
  .g-grow
    @extends .flex-center
    padding 0 rem(30)
    height rem(72)
    align-items center
    justify-content space-between
    .iconfont
      @extends .flex-center
      >i
        width rem(32)
        height rem(32)
        background-size 100% 100%
      span
        font(24)




</style>