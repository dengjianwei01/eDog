<template>
  <div>
    <div class="t1Wrap">
      <div class="t1Left" ref="listWrap">
        <div class="t1List">
          <ul v-if="classify[0]">
            <li @click="select(index)" :class="{on: isFirst===index}" v-for="(category,index) in classify[0].categorys" :key="index">{{category.name}}</li>
          </ul>
        </div>
      </div>
      <div class="t1Right" ref="goodsWrap">
        <div>
          <goods :num="num"/>
          <hot_brand v-if="classify[0]" :num="num"></hot_brand>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  import goods from '../../components/goods/goods.vue'
  import hot_brand from '../../components/hot_brand/hot_brand.vue'
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
        isFirst: 0,
        num: 1
      }
    },
    mounted () {
      this.$nextTick(() => { //更新界面后回调
        this.scroll = new Bscroll(this.$refs.listWrap, {
          click: true
        });
        this.goodsScroll = new Bscroll(this.$refs.goodsWrap,{
          click:true
        })
      })
      this.$store.dispatch('getClassify')
    },
    methods: {
      select (item) {
        this.num = item+1
        let lists = document.querySelectorAll('.t1List li')
        for(let i=0; i<lists.length; i++ ){
          lists[i].removeAttribute('class','')
        }
        lists[item].setAttribute('class','on')
        if(item == this.isFirst){
          return
        }
        this.isFirst = -1
      }
    },
    computed: {
      ...mapState(['classify'])
    },
    components: {
      goods,
      hot_brand
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .t1Wrap
    margin-top 43px
    .t1Left
      background-color white
      overflow hidden
      position: fixed;
      top: 46px;
      left: 0;
      bottom: 0;
      padding-bottom: 45px;
      .t1List
        height 720px
        li
           color black
           line-height 50px
           text-align center
           border-bottom: 1px solid #f3f4f5;
           width: 70px;
           height: 50px;
           font-size: 13px;
           text-overflow: ellipsis;
           white-space: nowrap;
           overflow: hidden;
         .on
           background: #f3f4f5
           color red
    .t1Right
      clearFix()
      margin-left: 75px;
      position: absolute;
      top 43px
      bottom 45px



</style>
