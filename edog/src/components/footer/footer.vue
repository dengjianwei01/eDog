<template>
  <div class="footernav">
    <ul class="footernav_ul ">
      <li class="dogon">
        <router-link to="/home"><span class="home"></span></router-link>
      </li>
      <li class="type-a">
        <router-link to="/classify"><span class="classify"></span></router-link>
      </li>
      <li class="cart-a">
        <span></span>
      </li>
      <li class="myepet-a">
        <router-link to="/register"><span class="login"></span></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footernav
    height 45px
    line-height 45px
    position fixed
    bottom 0
    left 0
    width 100%
    z-index 103
    border-top 1px solid #e7e7e7
    background #fff
    li
      float: left;
      width: 25%;
      height: 55px
      text-align center
      a
        display block
    .dogon
      .router-link-active
        .home
          background-position 0 0 !important
      span
        display inline-block
        background url(./footer.png) no-repeat
        background-size 234px 163px
        margin 0 auto
        height 40px
        width 42px
        margin-top 2px
        background-position -86px 0
    .type-a
      span
        display inline-block
        background url(./footer.png) no-repeat
        background-size 234px 163px
        background-position -85px -41px
        margin 0 auto
        height 40px
        width 42px
        margin-top 2px
      .router-link-active
        .classify
          background-position 0 -40px !important
    .cart-a
      span
        display inline-block
        background: url(./footer.png) no-repeat;
        background-size: 234px 163px;
        background-position: -85px -81px
        margin: 0 auto;
        height: 40px;
        width: 42px;
        margin-top: 2px;
    .myepet-a
      span
        display inline-block
        background: url(./footer.png) no-repeat;
        background-size: 234px 163px;
        background-position: -85px -122px
        margin: 0 auto;
        height: 40px;
        width: 42px;
        margin-top: 2px;
      .router-link-active
        .login
          background-position -128px -122px !important
</style>
