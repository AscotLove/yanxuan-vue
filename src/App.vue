<template>
  <div id="app">

    <router-view />
    <footerNav />
  </div>
</template>

<script>
import footerNav from '@components/footer-nav/footerNav.vue';
export default {
  name: 'app',
  components: {
    footerNav,
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
