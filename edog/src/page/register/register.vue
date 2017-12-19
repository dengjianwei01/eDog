<template>
  <div class="register">
    <header>
      <div class="register_bg">
        <div class="head_top">
          <a class="back" @click="back"></a>
          <div class="login">
            <a href="">注册</a>
          </div>
        </div>
        <div class="my_logo">
          <img src="./logo.png" alt="">
        </div>
        <div class="es_por1">
          <ul class="tags">
            <li @click="selected1">
              <span>普通登录</span>
              <p :class='{on : sel1}'></p>
            </li>
            <li @click="selected2">
              <span>手机动态密码登录</span>
              <p :class='{on : sel2}'></p>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <div class="bgfff">
      <div class="mformBox">
        <div class="content">
          <form method="post">
            <ul class="mform" v-if="sel1">
              <li>
                <span class="mNameIco"></span>
                <input type="text" placeholder="手机号/邮箱/用户名" class="text" name="username" id="username" ref="username1">
              </li>
              <li>
                <span class="mpasswordIco"></span>
                <input type="password" placeholder="输入密码" class="text" name="password" id="password" ref="password1">
              </li>
            </ul>
          </form>
          <form method="post">
            <ul class="mform" v-if="sel2">
              <li>
                <span class="mNumIco"></span>
                <input type="text" placeholder="已注册的手机号" class="dttext" name="phone" id="bdphone" ref="phone">
              </li>
              <li>
                <span class="mpasswordIco"></span>
                <input type="text" placeholder="请输入图片内容" class="dttext" name="varify" id="varify" ref="varify">
                <span class="verification_code">
                  <img @click="refresh_img" :src="img_src"  name="varify" class="codevar">
                </span>
              </li>
              <li>
                <span class="mpasswordIco"></span>
                <input type="text" class="dttext" placeholder="动态密码" name="code" id="code" ref="code">
                <div class="get_phonepass" v-show="isPhone">短信已发送 {{time}}s</div>
                <a class="get_phonepass" id="scodebtn" @click="get_phonepass" v-if="!isPhone">获取动态密码</a>
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div class="ftc">
        <a href="https://wap.epet.com/login.html?do=findpassword" class="forget">忘记密码？</a>
      </div>
      <div class="btn_login">
        <a class="btn" @click="login">
          登录
        </a>
      </div>
      <div class="other_login">
        <div class="partners">
          <p>合作网站登录</p>
        </div>
        <ul class="uList1">
          <li>
            <a href="">
              <img src="./login_ico4.png" alt="">
            </a>
          </li>
          <li>
            <a href="">
              <img src="./login_ico2.png" alt="">
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        sel1: true,
        sel2: false,
        isPhone: false,
        time:60,
        img_src:'https://wap.epet.com/share/seccode.html?hash=0.8935207828182814&height=30&width=85'
      }
    },
    mounted(){
      this.img_src = `https://wap.epet.com/share/seccode.html?hash=${Math.random()}&height=30&width=85`
    },
    methods: {
      selected1 () {
         this.sel1 = true
         this.sel2 = false
      },
      selected2 () {
        this.sel1 = false
        this.sel2 = true
      },
      back () {
        this.$router.go(-1)
      },
      refresh_img (ev) {
        const url = `https://wap.epet.com/share/seccode.html?hash=${Math.random()}&height=30&width=85`
        ev.target.src=url

      },
      login () {
        if (this.sel1) {
          let username = this.$refs.username1.value;
          let password = this.$refs.password1.value;
          if(username.trim()==''||password.trim()==''){
            alert('qing')
          }else {
            console.log(username,password)
          }
        }else {
          let phone = this.$refs.phone.value
          let varify = this.$refs.varify.value
          let code = this.$refs.code.value
          if(phone.trim()==''||phone.trim()==''||code.trim()==''){
            alert('qing')
          }else {
            console.log(phone,varify,code)
          }
        }
      },
      get_phonepass(){
        this.time = 60
        this.timer = setInterval(()=>{
          this.time--
          if(this.time<=0){
            clearInterval(this.timer)
          }
        },1000)
        this.isPhone = false
        setTimeout(()=>{
          this.isPhone = false
        },60000)
        this.isPhone = !this.isPhone
        let phone= this.$refs.phone.value
        console.log(phone)
        axios.get(`api/sendcode?phone=${phone}`).then(response=>{
          const result = response.data
          console.log(result)
        })
      },

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  header
    .register_bg
      background url('2ac7b0a4f0ab1e4a63819e0668d1cb39.png') no-repeat
      background-size 100% 100%
      width 100%
      .head_top
        height 50px
        line-height 50px
        position relative
        padding 0 12px
        .back
          background url(./personal-bico3.png) no-repeat
          background-size 12px 17px
          display block
          width 22px
          height 20px
          position absolute
          margin-top 16px
        .login
          right: 10px
          position: absolute;
          top: 0
          font-size: 18px
          a
            color: #fff
      .my_logo
        padding 12px 0 24px 0
        img
          display block
          margin auto
          width 20%
      .es_por1
        background-color rgba(255, 255, 255, 0.3)
        ul
          overflow hidden
          li
            float left
            width 50%
            text-align center
            height 44px
            line-height 44px
            position relative
            span
              font-size 15px
              color #fff
              display block
            .on
              display block
              width 0
              height 0
              border-left 10px solid transparent
              border-right 10px solid transparent
              border-bottom 10px solid #fff
              position absolute
              bottom 0px
              left 0
              right 0
              margin auto

  .bgfff
    background #fff
    .mformBox
      background: #fff;
      border-radius: 6px;
      margin: 0 4% 12px 4%;
      padding: 0 1.6%
      .content
        .mform
          li
            border-bottom #e2e2e2 solid 1px
            padding 12px 0 12px 30px
            position relative
            .verification_code
              display block
              position absolute
              top 5px
              right 0px
            .get_phonepass
              background #fff
              color #ff4259
              border 1px solid #eb4c33
              position absolute
              right 0
              top 6px
              border-radius 3px
              width 100px
              text-align: center
              padding 8px 0
              box-sizing border-box
              font-size 12px
            .mNumIco
              float left
              display inline
              width 17px
              height 17px
              background url(ico1.png) no-repeat
              background-size contain
              margin 2px 0 0 -25px
            .mNameIco
              float left
              display inline
              width 17px
              height 21px
              background url(ico3.png) no-repeat
              background-size contain
              margin 1px 0 0 -25px
            input
              display block
              height 21px
              width 100%
              font-size 15px
              border none
              padding 0px
              color: #666
              font-family "Microsoft Yahei", tahoma, arial
              outline none
            .mpasswordIco
              float: left;
              display: inline;
              width: 17px;
              height: 20px;
              margin: 0px 0 0 -25px;
              background: url(ico4.png) no-repeat;
              background-size: contain
    .ftc
      padding-left 24px
      padding-right 24px
      box-sizing border-box
      overflow hidden
      a
        color #898989
        font-size 14px
        float right
    .btn_login
      padding-top 6px
      box-sizing border-box
      text-align center
      .btn
        display block
        letter-spacing 5px
        border-radius 5px
        background #2ec975
        font-size 15px
        padding .6em 0
        text-align center
        margin 0 4%
        color #fff
    .other_login
      overflow hidden
      margin-top 100px
      .partners
        color #d7d7d7;
        margin-top 6px
        font-size 12px
        text-align center
        p
          font-size 16px
      .uList1
        padding 18px 0
        overflow hidden
        li
          width 33.3%
          padding 0 10px
          float left
          display inline
          a
            display block
            img
              width 40%
              height auto
              display block
              margin auto
              max-width 176px
              vertical-align middle
</style>
