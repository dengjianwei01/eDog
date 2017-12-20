<template>
  <div id="app">
    <div class="box">
      <router-view></router-view>
    </div>
    <myFooter></myFooter>
   </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import footer from './components/footer/footer.vue'
//  import e_adv from './components/adv/adv.vue'


  export default {
    components: {
//      e_adv,
      'myFooter': footer
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    height 100%
  .head
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    width: 100%;
    z-index: 9;
    box-shadow: 2px 2px 2px #e9e9e9;
  .box
    height 100%
</style>
