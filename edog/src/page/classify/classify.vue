<template>
  <div>
    <div class="claTab">
      <div class="claTab1 claCom">
        <router-link to="/classify/tab1"><span>分类</span></router-link>
      </div>
      <div class="claTab2 claCom">
        <router-link to="/classify/tab2"><span>品牌</span></router-link>
      </div>
    </div>
    <router-view></router-view>
    <div class="mask" v-show="isMask">
      <div ref="mask" class="mask1">
        <div>
          <div class="mask_header">
            <div class="mask_back" @click="back"></div>
            <span class="pp">全部品牌</span>
            <span class="pull_right" @click="hiddenOrShow"></span>
          </div>
          <div class="nav_box" v-if="isShow">
            <a>
              <span class="icon1"></span>
              <p>首页</p>
            </a>
            <a>
              <span class="icon2"></span>
              <p>商品分类</p>
            </a>
            <a>
              <span class="icon3"></span>
              <p>购物车</p>
            </a>
            <a>
              <span class="icon4"></span>
              <p>我的e宠</p>
            </a>
          </div>
          <div class="allbrand" ref="brand">
            <div class="brand_item" v-for="(brand,index) in allBrand" :key="index">
              <div class="letter">
                {{brand.order}}
              </div>
              <div class="brand_content" v-for="(list,index) in brand.list" :key="index">
                <a>
                  <div class="brand_1">
                    <img :src="list.logo" alt="">
                  </div>
                  <div class="brand_2">
                    <p class="brand_2_1">{{list.name}}</p>
                    <p class="brand_2_2">{{list.address}}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="letter_a_z">
        <div class="l-wrapper">
          <div class="menu">
            <span v-for="(item,index) in letter" :key="index" :class="{on:index ===currentIndex}">{{item}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data () {
      return{
        isShow: false,
        tops: [],
        scrollY: 51,
        letter: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','Y','V','W','X','Y','Z']
      }
    },
    watch: {
      isMask: function () {
        setTimeout(()=>{
          this.mask.refresh()
          this._initTops()
        })
      }
    },
    mounted () {
      this.$store.dispatch('getAllBrand')
      this.mask = new BScroll(this.$refs.mask, {
        click: true,
        probeType: 3
      });
      this.mask.on('scroll', (event) => {
        this.scrollY = Math.abs(event.y) + 51
      })
      this.mask.on('scrollEnd', (event) => {
        console.log('scrollEnd', event.y)
        this.scrollY = Math.abs(event.y) +51
      })
    },
    methods: {
      hiddenOrShow () {
        this.isShow = !this.isShow
      },
      back () {
        this.$store.dispatch('setMask')
      },
      _initTops () {
        let list = this.$refs.brand.querySelectorAll('.letter')
        let height = 0
        for(let i=0;i<list.length;i++){
          let top1 = list[i].getBoundingClientRect().top
          this.tops.push(top1)
        }
        console.log(this.tops)
      },
    },
    computed: {
      ...mapState(['allBrand','isMask']),
      currentIndex () {
        const {scrollY, tops} = this
        console.log(scrollY)
        return tops.findIndex((top, index) => scrollY>=top && scrollY<tops[index+1])
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .claTab
    background-color white
    padding 0 15px
    border-bottom 1px solid #cbcbcb
    position fixed
    left 0
    right 0
    top 0
    height 40px
    z-index 109
    .claCom
      width: 45%
      height: 40px;
      line-height: 40px;
      float: left;
      font-weight: 700;
      font-size: 14px
      span
        color: #333;
        display: inline-block;
        height: 40px;
        padding: 0 4px;
        cursor: pointer;
    .claTab1
      height: 40px;
      line-height: 40px;
      text-align: right;
      padding-right: 5%;
    .claTab2
      height: 40px;
      line-height: 40px;
      padding-left: 5%;
    a
      &.router-link-active
        & > span
          color: #ed4044;
          border-bottom: 2px solid #ed4044;
  .mask
    position absolute
    z-index 1000
    top 0
    left 0
    bottom 0
    right 0
    background white
    .mask1
      height 100%
    .letter_a_z
      top 0
      bottom 0
      right 4px
      width 10px
      z-index 10
      position fixed
      text-align center
      .l-wrapper
        display table
        height 100%
        .menu
          display table-cell
          height 100%
          vertical-align middle
          span
            display block
            height 12px
            margin-top 2px
            font-size 12px
            &.on
              color: red
    .mask_header
      height 50px
      line-height 50px
      position relative
      padding 0 10px
      border-bottom 1px solid #f3f3f3
      text-align center
      .mask_back
        background url(footer.png) no-repeat
        background-size 234px 159px
        height 18px
        width 11px
        background-position -201px -10px
        position absolute
        margin-top 15px
        left 10px
      .pull_right
        background: url(footer.png) no-repeat;
        background-size: 234px 163px;
        height: 18px;
        width: 17px;
        background-position: -217px -10px;
        position: absolute;
        top: 15px;
        right: 10px;
        outline: 0
    .nav_box
      width 100%
      background #fff
      border-bottom 1px solid #d7d7d7
      overflow hidden
      padding 10px 0
      a
        display inline-block
        width 25%
        text-align center
        float left
        color #333
        font-size 14px
        span
          height 25px
          width 25px
          margin 0 auto
          display block
          background url(footer.png) no-repeat
          background-size 234px 163px
        .icon1
          background-size 234px 163px
          background-position -172px -7px
        .icon2
          background-position -172px -49px
        .icon3
          background-position -172px -90px
        .icon4
          background-position -172px -133px

    .allbrand
      width 100%
      .brand_item
        .letter
          text-indent 15px
          line-height 24px
          font-size 12px
          color #999
          background-color #eee
        .brand_content
          padding 10px
          border-bottom 1px solid #f3f4f5
          margin-right 20px
          box-sizing border-box
          overflow hidden
          a
            display block
            overflow hidden
          .brand_1
            width 30%
            max-width 150px
            padding 8px 0
            border 1px solid #f3f4f5
            float left
            box-sizing border-box
            height 50px
            position relative
            img
              max-width 90%
              height 40px
              margin 5px auto
              position absolute
              top 0
              left 0
              right 0
          .brand_2
            float left
            margin 5px 0 5px 20px
            box-sizing border-box
            .brand_2_1
              font-size 14px
              color #333
              line-height 1.6
            .brand_2_2
              font-size 12px
              color #999


</style>
