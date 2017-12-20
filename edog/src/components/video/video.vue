<template>
  <div class="fashion">
    <div class="fashion_img">
      <div class="img_pos">
        <a href="">
          <img src="https://img1.epetbar.com/2017-12/13/13/bf5a66590af3b4c59f7bc0de38cb8060.jpg@!500w0h" alt="">
          <span class="cmallPlayIco"></span>
        </a>
      </div>
      <div class="fashion_footer">
        <div class="fashion_footer_text">
          KIWI KITCHENS狗罐头 一罐装下93%鲜肉
        </div>
        <div class="div_text">
          <span class="span_img"></span>
          <span>15502</span>
          <span>|</span>
          02:15
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .fashion
    .fashion_img
      .img_pos
        position relative
      .cmallPlayIco
        background: url(./play.png) 0 0 no-repeat;
        background-size: contain;
        width: 20px;
        height: 20px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -10px;
        margin-top: -10px;
      img
        width 100%
      .fashion_footer
        color #999
        font-size 12px
        padding 10px
        text-align: center
        .fashion_footer_text
          color: #333
          overflow: hidden;
          white-space: nowrap;
          word-wrap: normal;
          text-overflow: ellipsis
        .div_text
          color: #999
          font-size: 12px
          margin-top 5px
          .span_img
            display: inline-block;
            width: 10px;
            height: 9px;
            background: url(./view-black.png) 0 0 no-repeat;
            background-size: contain;
            margin-right: 3px;
</style>
