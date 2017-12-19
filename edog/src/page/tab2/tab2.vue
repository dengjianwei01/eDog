<template>
    <div class="brand" ref="brand">
      <div>
        <brand />
        <div class="box1"></div>
      </div>
      <div>
        <a class="all" @click="isShowMask">全部</a>
      </div>
    </div>
</template>

<script>
  import brand from '../../components/brand/brand.vue'
  import Bscroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    mounted () {
      this.$store.dispatch('getBrand')

      this.$nextTick(() => { //更新界面后回调
        this.scroll = new Bscroll(this.$refs.brand, {
          click: true
        });
      })
    },
    methods: {
      isShowMask () {
        this.$store.dispatch('setMask')
      }
    },
    components: {
      brand
    },
    computed: {
      ...mapState(['isMask'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .all
    width: 40px;
    height: 40px;
    right: 6px;
    bottom: 150px;
    position: fixed;
    z-index: 10;
    background: rgba(0,0,0,.4);
    line-height: 40px;
    border-radius: 50%;
    font-size: 12px;
    color: #fff;
    text-align: center;

  .brand
    margin-top 45px
    margin-bottom 45px
    height 680px
    .box1
      height 200px
</style>
