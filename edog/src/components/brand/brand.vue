<template>
  <div>
    <div class="bandsbox" v-for="(item,index) in brand" :key="index">
      <div class="brand-list">
        <div class="recom">
          <div class="title"><span class="c999">—— {{item.title}} ——</span></div>
          <div class="list">
            <ul>
              <li v-for="(lis,index) in item.list" :key="index">
                <a href="" class="block">
                  <div>
                    <img :src="lis.logo">
                  </div>
                  <p class="name">{{lis.name}}</p>
                  <p class="address">{{lis.address}}</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Bscroll from 'better-scroll'
  export default {
    computed: {
      ...mapState(['brand'])
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .brand-list
    background: #f3f4f5;
    .recom
      padding-bottom: 15px;
      margin-bottom: 10px;
      background: #fff;
      .title
        padding-top: 20px;
        font-size: 12px;
        color: #999;
        text-align: center;
      .list
        padding: 0 5px;
        li
          position: relative;
          margin-top: 20px;
          width: 30%;
          padding: 0 5px;
          float: left;
          a
            display: block;
            color: #333;
            div
              box-sizing border-box
              position: relative;
              border: 1px solid #e2e2e2;
              text-align: center;
              padding: 50px 10px 10px;
              height: 50px;
              img
                position: absolute;
                top: 0;
                left: 0;
                max-width: 90%;
                margin: 10px auto 0;
                height: 40px;
                right: 0;
            .name
              height: 20px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-size: 13px;
              margin-top: 5px;
              text-align: center;
            .address
              height: 20px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-size: 12px;
              color: #999;
              text-align: center;
</style>

