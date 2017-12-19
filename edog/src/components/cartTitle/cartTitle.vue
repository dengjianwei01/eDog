<template>
  <div class="trend">
    <div class="trend_video">
      <img src="https://img2.epetbar.com/nowater/2017-12/13/13/c07935b6d02b84cf457c3eaa40f95677.jpg" alt="">
    </div>
    <more></more>
  </div>
</template>

<script>
  import more from '../more/more.vue'
  export default {
    components: {
      more
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .trend
    position relative
    padding-bottom 5px
    .trend_video
      img
        vertical-align middle
        max-width 50%
        max-height 73px
        margin 0 auto 0 10px
</style>
