<!--suppress ALL -->
<template>
  <div class="user">
    <div class="user-img" :style="{display: isLogin ? 'none' : 'flex'}">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      <button @click="goLogin(isPhone = true)">手机号快捷登录</button>
      <button @click="goLogin(isPhone = false)">邮箱账号登录</button>
    </div>
    <div class="login" :style="{display: isLogin ? 'flex' : 'none'}">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">

      <form class="phone" :style="{display: isPhone ? 'block' : 'none'}">
        <section class="">
          <input v-validate="'required|mobile'" name="phone" v-model="phone" type="text" placeholder="请输入手机号码">
          <button @click.prevent="clearVal(phone)">xx</button>
          <div class="line"></div>
          <span v-show="errors.has('phone')">{{errors.first('phone')}}</span>
        </section>
        <section>
          <input v-validate="'required'" name="note" v-model="note" type="password" placeholder="请输入短信验证码">
          <button :disabled="!isPoneRule|| time>0" class="getNote" @click.prevent="getNote">{{time > 0 ? `(${time}s)后重发`
            : '获取验证码'}}
          </button>
          <div class="line"></div>
          <span style="color:red" v-show="errors.has('note')">{{errors.first('note')}}</span>
        </section>
        <div class="issue">
          <p>遇见问题</p>
          <button>使用密码验证登录</button>
        </div>
        <button class="form-login" @click.prevent="login">登录</button>
      </form>


      <form class="account" :style="{display: isPhone ? 'none' : 'block'}">
        <section class="">
          <input name="account" v-model="account" type="text" placeholder="邮箱账号">
          <button @click.prevent="clearVal(account)">xx</button>
          <div class="line"></div>
          <span style="color:red" v-show="errors.has('account')">{{errors.first('account')}}</span>
        </section>
        <section>
          <input name="psw" v-model="psw" type="password" placeholder="密码">
          <button @click.prevent="clearVal(psw)">xx</button>
          <div class="line"></div>
          <span style="color:red" v-show="errors.has('psw')">{{errors.first('psw')}}</span>
        </section>
        <div class="issue">
          <p>注册账号</p>
          <button>忘记密码</button>
        </div>
        <button class="form-login" @click.prevent="login">登录</button>

      </form>


      <button class="login-way" @click.prevent="isLogin = false">其他登录方式 &gt;</button>
    </div>

  </div>
</template>

<script>
  import LoginHttp from '@api/Login';
  import {mapActions} from 'vuex';

  const OK = 0;
  export default {
    name: "User",
    data() {
      return {
        isPhone: true,
        isLogin: false,
        time: 0,
        phone: '',
        note: '',
        account: '',
        psw: '',

      }
    },
    computed: {
      isPoneRule() {
        return /^[1][3456789][0-9]{9}$/.test(this.phone)
      },
    },
    methods: {
      ...mapActions(['userUpdate']),
      clearVal(val) {
        switch (val) {
          case this.phone:
            return this.phone = '';
          case this.account:
            return this.account = '';
          case this.psw:
            return this.psw = '';
        }
      },
      async getNote() {
        this.time = 30;
        const timer = setInterval(() => {
          if (this.time === 0) {
            clearInterval(timer)
          }
          this.time--;
        }, 1000)
        const res = await LoginHttp.sendCode({
          phone: this.phone
        });
        if (res.code === OK) this.time = 0
      },
      goLogin(isPhone) {
        this.isLogin = true;
        this.isPhone = isPhone;
      },
      async login() {
        console.log(this.isPhone)
        if (this.isPhone) {
          const success = await this.$validator.validateAll(['phone', 'note'])
          this.userUpdate({
            user: {
              phone: this.phone,
              code: this.note,
            }
          })
        } else {
          const success = await this.$validator.validateAll(['account', 'psw'])
          this.userUpdate({
            user: {
              account: this.account,
              psw: this.psw,
            }
          })
        }
      }
    },

  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/css/mixin.styl";
  @import '../../common/css/extendss.styl';
  .user
    width 100%
    height rem(1142)
    background-color #F2F5F4
    .user-img
      @extend .flex
      justify-content center
      flex-wrap wrap
      white-space nowrap
      width 100%
      height rem(702)
      padding rem(160) rem(40) 0
      img
        width rem(268)
        height rem(90)
        margin-bottom rem(232)
      button
        all unset
        @extend .flex-center
        margin-bottom rem(32)
        border-radius rem(4)
        font(14)
        text-align center
        width 100%
        height rem(94)
        color #fff
        background-color #DD1A21
        &:last-child
          color #DD1A21
          background-color transparent
          border rem(1) solid #DD1A21

    .login
      @extend .flex
      justify-content center
      flex-flow wrap
      align-content flex-start
      width 100%
      height 100%
      padding rem(64) rem(40) 0
      background-color #fff
      img
        width rem(192)
        height rem(64)
        margin-bottom rem(40)
      input, button
        all unset
      .phone, .account
        width 100%
        height rem(578)
        .line
          position relative
          flex-shrink 0
          width 100%
          height rem(1)
          z-index 99
          background-color #eee
        span
          font(26)
          height rem(26)
          width 100%
          color #DD1A21
        section
          @extend .flex-center
          flex-flow wrap

          input
            font(30)
            flex 1
            height rem(64)
            padding rem(15) rem(20)
          button
            height rem(30)
            padding rem(10) rem(15)
            font(30)
          .getNote
            border rem(5) solid #ddd
            border-radius rem(10)
        .issue
          @extend .flex
          width 100%
          justify-content space-between
          padding rem(42) 0
          font(30)
        .form-login
          background-color #DD1A21
          width 100%
          color #fff
          font(30)
          line-height rem(92)
          border-radius rem(8)
          text-align center

      .login-way
        font(28)

</style>