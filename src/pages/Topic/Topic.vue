<template>
  <div id="topic">

        <div class="topic-wrapper"  ref="topicWrapper">
          <div v-if="TopicGoods.length" v-for="goods in TopicGoods">
            <a :href="good.schemeUrl"  v-for="good in goods.topics">

              <div class="nickname">
                <img :src="good.avatar" alt="">
                <span>{{good.nickname}}</span>
              </div>
              <div class="title">
                <p>{{good.title}}</p>
                <p>{{good.subTitle}}</p>
              </div>
              <img :src="good.picUrl" alt="">
              <span>{{good.readCount}}人看过</span>
            </a>
          </div>
        </div>




  </div>
</template>

<script>
  import { Tab, Tabs, List } from 'vant';
  import { mapActions, mapState } from 'vuex';
  import BScroll from 'better-scroll';
  export default {
    name: "Topic",
    data() {
      return {
        active: 0,
        loading: false,
        finished: false,
      }
    },
    computed: {
      ...mapState(['TopicGoods', 'TopicNav']),

    },
    components: {
      [Tab.name]: Tab,
      [Tabs.name]: Tabs,
      [List.name]: List
    },
    methods: {
      ...mapActions(['topicnavUpdate', 'topicgoodsUpdate']),
      onLoad() {
        // 异步更新数据
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            this.TopicGoods.push(this.TopicGoods.length + 1);
          }
          // 加载状态结束
          this.loading = false;

          // 数据全部加载完成
          if (this.list.length >= 40) {
            this.finished = true;
          }
        }, 500);
      }
    },
    async mounted() {

      this.topicnavUpdate();
      await this.topicgoodsUpdate();
      this.topicScroll = new BScroll(this.$refs.topicWrapper)
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/css/mixin.styl";
  @import '../../common/css/extendss.styl';
.topic-wrapper
  height rem(1014)
  overflow hidden

</style>