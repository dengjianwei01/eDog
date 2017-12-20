<template>
  <div class="home">
    <div>
      <e_header></e_header>
    </div>
    <div class="home1" ref="home1">
      <div class="home2">
        <div class="home3">
          <carousel></carousel>
          <div class="home_nav">
            <ul>
              <li class="item" v-for="(nav,index) in navs" :key="index" @click="details(nav)">
                <img :src="nav.image">
              </li>
            </ul>
          </div>
          <div class="surprise_day">
            <div class="surprise">
              <div class="surprise_tit">
                <div class="titimg">
                  <img src="./suprice.png">
                </div>
                <div class="surprise_text">{{discounts.title}}</div>
                <!--<div class="fl surprise-time hide">1513409400</div>-->
                <div class="time">
                  <div class="time1">
                    <span class="time1-1">00</span>
                    <span class="time-zi">:</span>
                    <span class="time1-1">00</span>
                    <span class="time-zi">:</span>
                    <span class="time1-1">00</span>
                  </div>
                </div>
                <more></more>
              </div>
              <div class="surprise_box">
                <div class="wrapper" ref="wrapper">
                  <ul class="content">
                    <li v-for="(good,index) in discounts.goods" :key="index">
                      <a href="">
                        <div class="thispro-img">
                          <img class="img" :src="good.image.image">
                        </div>
                        <div class="cred">
                          <span class="qian">¥</span>
                          <span>{{good.sale_price}}</span>
                        </div>
                        <p class="discounts">{{good.little_price}}</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <split></split>
          <div class="group_buying">
            <div class="buying_box">
              <a href="">
                <img src="https://img2.epetbar.com/nowater/2017-12/15/13/42dc2731be284c68e0917d617b396fa1.jpg@!water" alt="">
              </a>
            </div>
          </div>
          <split></split>
          <div class="currency_adcon">
            <div class="currency_box">
              <div class="currency_box1">
                <a href="">
                  <img src="https://img2.epetbar.com/nowater/2017-12/13/09/1ec9379f83eb421db9a09195c9594e29.jpg@!water" alt="">
                </a>
              </div>
              <div class="currency_box2">
                <a href="">
                  <img src="https://img2.epetbar.com/nowater/2017-12/13/09/c023e6c441d726b0c1b1caafae8999f0.jpg@!water" alt="">
                </a>
                <a href="">
                  <img src="https://img2.epetbar.com/nowater/2017-12/13/10/35bb7f3bd146cb9a9e74a935803f0d9a.jpg@!water" alt="">
                </a>
              </div>
            </div>
          </div>
          <split></split>
          <div>
            <cartTitle></cartTitle>
            <my_video></my_video>
          </div>
          <div>
            <cartTitle></cartTitle>
            <div class="sale">
              <a href="">
                <img src="https://img2.epetbar.com/nowater/2017-12/14/14/0ef1597575070d85b63b4c224732b901.jpg@!water" alt="">
              </a>
              <split></split>
              <a href="">
                <img src="https://img2.epetbar.com/nowater/2017-12/14/14/0ef1597575070d85b63b4c224732b901.jpg@!water" alt="">
              </a>
              <split></split>
              <a href="">
                <img src="https://img2.epetbar.com/nowater/2017-12/14/14/0ef1597575070d85b63b4c224732b901.jpg@!water" alt="">
              </a>
            </div>
            <div>
              <cartTitle></cartTitle>
              <carousel></carousel>
            </div>
            <div>
              <cartTitle></cartTitle>
              <my_video></my_video>
            </div>
            <div>
              <cartTitle></cartTitle>
              <my_video></my_video>
            </div>
            <split></split>
            <div class="divimg">
              <a href="">
                <img src="https://img2.epetbar.com/nowater/2017-12/13/11/be84f01e893b0e631d8512566eb79117.jpg@!water" alt="">
              </a>
            </div>
            <div class="wap_footer_bar ">
              <div class="footer">
                <div class="ft">
                  <span>触屏版</span>
                  <span>
              <a href="https://wap.epet.com/app.html">手机客户端</a>
            </span>
                  <span>
              <a href="https://wap.epet.com/AboutEpet.html">关于我们</a>
            </span>
                  <span>
              <a href="https://wap.epet.com/faq.html">联系我们</a>
            </span>
                </div>
                <div style="text-align:center;margin:0 10px 0 10px; padding-bottom:25px; font-size:12px">
                  © wap.epet.com 版权：重庆易宠科技有限公司
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import carousel from '../../components/carousel/carousel.vue'
  import BScroll from 'better-scroll'
  import split from '../../components/split/split.vue'
  import more from '../../components/more/more.vue'
  import cartTitle from '../../components/cartTitle/cartTitle.vue'
  import my_video from '../../components/video/video.vue'
  import header from '../../components/header/header.vue'
  import {mapState} from 'vuex'
  export default {
    mounted () {
      let wrapper = this.$refs.wrapper
      new BScroll(wrapper, {
        click: true,
        scrollX: true
      })

      this.$nextTick(() => {
        new BScroll(this.$refs.home1, {
          click: true
        })
      })

      this.$store.dispatch('getNav')
      this.$store.dispatch('getDiscounts')
    },
    methods: {
      details(nav){
        self.location.href= nav.target.param
      }
    },
    components: {
      carousel,
      split,
      more,
      cartTitle,
      my_video,
      'e_header': header,
    },
    computed: {
      ...mapState(['navs','discounts'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixin.styl'
  .home
    height 100%
    .home1
      height 100%
      .home3
        padding-top 86px
  .home_nav
    clearFix()
    ul
      clearFix()
    .item
      width 20%
      float: left
      a
        display block
      img
        width 100%
  .surprise_day
    .surprise
      clearFix()
      .surprise_tit
        position: relative;
        padding: 10px
        box-sizing: border-box
        clearFix()
        .titimg
          float left
          img
            height: 24px;
            margin-left: -10px
      .surprise_text
        font-size 13px
        line-height 24px
        float left
        margin-left 10px
      .time
        line-height 24px
        float left
        margin-left 5px
        text-align center
        .time1
          display inline-block
          font-size 12px
          .time1-1
            border 1px solid #ddd
            padding 1px 2px
            font-size 13px
          .time-zi
            margin 0 3px
            font-weight 700
            font-size 12px
      .surprise_box
        padding-left: 5px
        margin-bottom: 10px
        .wrapper
          width: 100%;
          height: 100%
          margin: 0 auto;
          position: relative;
          overflow: hidden;
          z-index: 1
          .content
            white-space nowrap
            display inline-block
            li
              width 98px
              display inline-block
              .thispro-img
                img
                  width 100%
              .cred
                color red
                margin-top: 5px
                text-align: center
                .qian
                  font-size 12px
                  text-align: center
              .discounts
                color: #999
                font-size: 12px
                text-align: center
                margin-top 5px
  .group_buying
    .buying_box
      img
        width 100%
  .currency_adcon
    width 100%
    height
    .currency_box
      display: flex
      .currency_box1
        width 50.13%
        img
          width 100%
      .currency_box2
        width 49.87%
        img
         width 100%
  .trend
    position relative
    padding-bottom 5px
  .sale
    img
      width 100%
  .divimg
    img
      width 100%
  .wap_footer_bar
    .footer
      margin 1em 0 0
      font-size 14px
      padding-bottom 36px
      background #fff
      clear both
      .ft
        padding 15px 0 10px
        text-align center
        font-size 14px
        a
          color: #333
        span
          padding-right: 10px
</style>
