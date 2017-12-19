<template>
  <div v-if="classify[num]">
    <div class="recom">
      <div class="recom-inner">
        <a href="javascript:;">
          {{classify[num].cate_list[0].title}}
          <img class="arrowL" src="https://static.epetbar.com/static_wap/appmall/lib/goods/cate_right_img.png" >
        </a>
        <ul>
          <li class="fl mt10" v-for="(lis,index) in classify[num].cate_list[0].list">
            <a href="https://wap.epet.com/goodslist.html?id_param=cateid_10&amp;fw=0" class="db">
              <div class="rela">
                <img :src="lis.photo">
              </div>
              <p>{{lis.name}}</p>
            </a>
          </li>
        </ul>
      </div>
      <div class="small-line"></div>
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
  .recom
    background: #fff;
    .recom-inner
      border-top: 1px solid #f3f4f5;
      padding: 15px 5px 20px;
      box-sizing border-box
      a
        font-size: 12px;
        color: #999;
        padding-left: 5px;
        display: block;
        margin-top: 10px;
        .arrowL
          height: 10px;
          float: right;
      ul
        overflow hidden
        li
          width: 29.33%;
          padding: 0 5px;
          margin-top: 10px;
          float: left;
          .db
            display: block;
            color: #333;
            text-decoration: none;
            -webkit-tap-highlight-color: rgba(0,0,0,0);
            .rela
              position: relative;
              img
                width: 100%;
            &>p
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              height: 20px;
              font-size: 12px;
              color: #333;
              margin-top: 10px;
              text-align: center;



    .small-line
      width: 100%
      height: 5px
      border-top: 1px solid rgba(7, 17, 27, 0.1)
      background: #f3f5f7
</style>
