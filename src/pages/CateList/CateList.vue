<template>
  <div class="cateList">
    <div class="cateListLeft" ref="cateListLeft">
      <ul class="cateList-left">
        <li v-for="(category,index) in categories" :key="category.name">
          <router-link  class="cateListA" :to="`/CateList/categoryGood/${index}`">
            {{category.name}}
          </router-link>
        </li>
      </ul>
    </div>


    <router-view></router-view>
  </div>

</template>

<script>
  import {mapActions, mapState} from 'vuex';
  import BScroll from 'better-scroll';

  export default {
    name: "CateList",
    computed: {
      ...mapState(['categories']),
    },
    methods: {
      ...mapActions(['catelistUpdate']),

    },

    mounted() {
      this.catelistUpdate();

    },
    watch: {
      categories(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.cateListLeftSroll = new BScroll(this.$refs.cateListLeft, {
            click:true
          })
        }

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/css/mixin.styl";
  @import '../../common/css/extendss.styl';

  .cateList
    @extend .flex
    .cateListLeft
      overflow hidden
      height rem(1044)
      .cateList-left
        flex-shrink 0
        width rem(162)
        padding rem(40) 0
        > li
          margin-top rem(40)
          width 100%
          &:first-child
            margin-top 0
          .cateListA
            all unset
            display block
            box-sizing border-box
            padding 0 rem(20)
            font(28)
            line-height rem(50)
            text-align-last justify
            width 100%
            &:active
              border-left rem(3) solid #b4282d


</style>