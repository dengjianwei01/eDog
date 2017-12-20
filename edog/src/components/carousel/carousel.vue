<template>
  <div class="carousel">
    <div class="swiper1 swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in carousel" :key="index">
          <img :src="item.image" alt="">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  export default {
    mounted () {
      this.$nextTick(()=>{
        this.mySwiper = new Swiper('.swiper1', {
          loop: true,
          observer:true,
          observeParents:true,
          autoplay: {
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        })
      })
      this.$store.dispatch('getCarousel')
    },
    computed: {
      ...mapState(['carousel'])
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .carousel
    width 100%
    margin-top 1px
    img
      width 100%
</style>
