<template>
  <div class="header">
    <div class="search">
      <div class="search_box">
        <div class="e-search">
          <div class="location">
            <a>
              <span class="catordog">狗狗站</span>
              <span class="">|</span>
              <span class="myposition">重庆</span>
              <i></i>
            </a>
          </div>
          <p class="search_text">
            <a>
              <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
              <span class="serach_ico"></span>
            </a>
          </p>
          <a class="icon">
            <img src="./mydope.png">
          </a>
        </div>
      </div>
    </div>
    <div class="find_nav">
      <div class="dscroll" ref="dscroll">
          <ul class="dscroll-ul" >
            <li class="dscroll-li on">
              <router-link to="/home">
                <span class="rela"><span>首页</span><i></i></span>
              </router-link>
            </li>
            <li class="dscroll-li">
              <router-link to="/clothing">
                <span class="rela"><span>服饰城</span><i></i></span>
              </router-link>
            </li>
            <li class="dscroll-li">
              <a>
                <span class="rela"><span>狗狗主粮</span><i></i></span>
              </a>
            </li>
            <li class="dscroll-li">
              <a>
                <span class="rela"><span>医疗保健</span><i></i></span>
              </a>
            </li>
            <li class="dscroll-li">
              <a>
                <span class="rela"><span>零食玩具</span><i></i></span>
              </a>
            </li>
            <li class="dscroll-li">
              <a>
                <span class="rela"><span>日用外出</span><i></i></span>
              </a>
            </li>
            <li class="dscroll-li">
              <a>
                <span class="rela"><span>美容香波</span><i></i></span>
              </a>
            </li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    mounted () {
      this.$nextTick(()=>{
        new BScroll(this.$refs.dscroll,{
          click: true,
          scrollX: true
        })
      })
      this.$store.dispatch('getMenus')

    },
    computed: {
      ...mapState(['menus'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    position absolute
    top 0
    left 0
    width 100%
    z-index 100
    background white
    .search
      .search_box
        padding: 5px 10px
        box-sizing border-box
        .e-search
          padding: 8px 0
          background: #fff
          width: 100%
          position relative
          text-align: center
          display: -webkit-box
          -webkit-box-align: center
          box-sizing: border-box
          a
            color #333
          .icon
            position absolute
            img
              width: 25px;
              margin-left: 10px;
          .location
            vertical-align middle
            float left
            margin-right: 20px
            font-size: 14px
            a
              position relative
              vertical-align middle
              i
                position: absolute
                top: 10px
                right: -11px
                border-width: 4px
                font-size: 0
                line-height: 0
                border-style: solid solid dotted
                border-color: #898989 transparent transparent
            .catordog
              color: #898989
            .myposition
              color: #898989
              font-size: 13px
          .search_text
            float left
            width 60%
            position relative
            input
              width 100%
              border: 0
              height: 25px
              background: #e9e9e9
              border-radius: 4px
              color: #bcbcbc
              text-indent: 10px
              font-size: 13px
              outline: 0
            .serach_ico
              width: 11px
              height: 11px
              position: absolute
              right: 5px
              top: 0
              bottom: 0
              margin: auto 0
              background-position: 0 0
    .find_nav
      width: 100%
      height: 35px
      min-width: 320px
      overflow: hidden
      line-height 35px
      .dscroll
        width 100%
        .dscroll-ul
          white-space: nowrap
          display inline-block
          .dscroll-li
            display inline-block
            padding-right: 25px
            &.on
              i
                position: absolute;
                bottom: 1px;
                left: -10%;
                width: 120%;
                height: 2px;
                background: #459d36;
            &:nth-child(1)
              padding-left 25px
              .rela
                color: #459d36
                display: inline-block
            a
              display block
              width 100%
              height 100%
              line-height 36px
              font-size 14px
              text-align center
              color: #666
              position relative



</style>
