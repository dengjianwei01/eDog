<template>
  <div class="sort-recom" v-if="classify[num].cate_list[1]">
    <div class="hot-recom">
      <a href="javascript:;" class="title">
       {{classify[num].cate_list[1].title}}
      </a>
      <ul>
        <li class="llogo" v-for="(lis,index) in classify[num].cate_list[1].list">
          <a href="https://wap.epet.com/brand/bd495.html?fw=0" class="db">
          <div class="box-img">
            <img class="image" :src="lis.logo" lazy="loaded">
          </div>
          <p class="ftc">{{lis.name}}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    props:['num'],
    computed: {
      ...mapState(['classify'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .sort-recom
    background #fff
    .hot-recom
      padding: 15px 5px 20px
      border-top: 1px solid #f3f4f5
      .title
        font-size: 12px
        color: #999
        display: block
        padding-left: 5px
        margin-top: 10px
      ul
        width 100%
        overflow hidden
        .llogo
          padding: 0 5px
          width: 45%!important
          position: relative
          margin-top: 10px
          float: left
          .db
            display: block
            color: #333
          .box-img
            border: 1px solid #f3f4f5;
            text-align: center;
            padding: 55px 10px 10px;
            background-size: 120px auto
            position: relative
            .image
              left: 0;
              right: 0;
              top 0
              margin: 0 auto;
              margin-top: 10px
              position absolute
              height: 45px;
              max-width: 100%
          .ftc
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            height: 20px
            font-size: 12px
            margin-top: 10px
            text-align: center
</style>
