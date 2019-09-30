<template>
  <div class="container">
    <div class="header" :style="changeStyle" id="navHeader">
      <img :src="logoSrc" alt="" class="logo">
      <img :src="menuSrc" alt="" class="menu-icon" @click="toggleMenu">
    </div>
    <section class="content">
      <div class="mobile">
        <img src="../../../../src/assets/images/mobile.png" alt="" class="mobile-icon">
      </div>
      <div class="nav-text">
        <h1>Fine Wallet</h1>
        <span>{{$t('page.investment')}} &nbsp;&nbsp;{{$t('page.controlAssets')}}</span>
      </div>
      <div class="download">
        <div class="down-block down-ios" @click="downloadIos">
          <img src="../../../../src/assets/images/ios.png" alt="" class="down-icon">
          <span class="down-text">iOS</span>
        </div>
        <div class="down-block down-andriod" @click="downloadAndriod">
          <img src="../../../../src/assets/images/android.png" alt="" class="down-icon">
          <span class="down-text">Andriod</span>
        </div>
      </div>
    </section>
    <mMenu ref="mMenu"></mMenu>
    <div class="mask" @click="showWechat = false" v-show="showWechat">
      <img :src="tipSrc" alt="">
    </div>
  </div>
</template>

<script>
// import logo from 'assets/images/fine-logo-white.png'
import logo from 'assets/logo/logo-white-row.png'
import menu from 'assets/images/menu.png'
import mMenu from './menu'
import tipZh from '../../../assets/images/andriod-tips-zh.png'
import tipEn from '../../../assets/images/andriod-tips-en.png'
export default {
  name: 'mBanner',
  components: { mMenu },
  data () {
    return {
      logoSrc: logo,
      menuSrc: menu,
      showWechat: false,
      changeStyle: {
        background: 'transparent'
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll, false)
  },
  methods: {
    downloadIos () {
      if (this.isIos) {
        this.$router.push('/iosDownload')
      }
    },
    downloadAndriod () {
      if (this.isAnd) {
        if (this.isWechat) {
          this.showWechat = true
        } else {
          let link = 'https://tokensky.fine.app/download/fine-wallet.apk'
          let a = document.createElement('a')
          a.target = '_blank'
          a.download = 'fine-wallet.apk'
          a.href = link
          a.click()
        }
      }
    },
    toggleMenu () {
      this.$refs.mMenu.show()
    },
    handleScroll () {
      let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
      // let banner = document.querySelector('#banner').offsetTop + document.querySelector('#banner').clientHeight
      let header = document.querySelector('#navHeader').clientHeight
      if (scrollTop > header * 2) {
        this.changeStyle = { background: '#4a3499', 'box-shadow': '0 3px 8px rgba(93,0,255,.16)' }
      } else {
        this.changeStyle = { background: 'transparent' }
      }
    }
  },
  computed: {
    tipSrc () {
      return this.$store.getters.setLanguage === 'zh' ? tipZh : tipEn
    },
    isIos () {
      let u = navigator.userAgent
      return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    },
    isAnd () {
      let u = navigator.userAgent
      return u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
    },
    isWechat () {
      let ua = navigator.userAgent
      return !!ua.match(/MicroMessenger/i)
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped lang="scss">
  .container{
    position: relative;
    width: 100%;
    background: url('../../../assets/images/bg_navi.png') no-repeat center top;
    background-size: 100% 100%;
    height: 466px;
    .mask {
      width: 100%;
      height: 100%;
      position: fixed;
      left: 0;
      top: 0;
      z-index: 99;
      background: rgba(0, 0, 0, .6);
      img {
        width: 100%;
      }
    }
    .header {
      position: fixed;
      left: 0;
      top: 0;
      padding: 0 15px 0 36px;
      height: 46px;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: background linear .1s;
      z-index: 90;
      .logo {
        height: 30px;
      }
      .menu-icon {
        width: 16px;
        height: 16px;
      }
    }
    .mobile {
      padding-top: 60px;
      margin-bottom: 10px;
      display: flex;
      justify-content: center;
      img {
        width: 123px;
        height: 254px;
      }
    }
    .nav-text {
      text-align: center;
      color: #fff;
      margin-bottom: 12px;
      h1 {
        font-size: 20px;
        font-weight: bold;
        line-height: 1;
      }
      span {
        display: inline-block;
        line-height: 24px;
        font-size: 10px;
        transform: scale(0.8);
      }
    }
    .download {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      .down-ios {
        margin-right: 6px;
      }
      .down-block {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 84px;
        height: 32px;
        background: #0B0833;
        border-radius: 4px;
        .down-icon {
          width: 16px;
          height: 16px;
          margin-right: 4px;
        }
        span {
          display: inline-block;
          transform: scale(0.8);
        }
      }
    }
  }
</style>
