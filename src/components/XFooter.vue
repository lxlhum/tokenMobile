<template>
  <div class="x-footer">
    <div class="token">
<!--      <img src="../assets/images/fine-logo-col1.png" alt="token">-->
      <img src="../assets/logo/logo-white-col.png" alt="">
    </div>
    <div class="cooperate">
      <a href="https://twitter.com/Fine_Wallet" target="_blank" rel="noopener noreferrer">
        <div class="bg">
          <img src="../assets/images/twiter.png" alt="twiter">
        </div>
      </a>
      <a href="https://t.me/joinchat/Mb3GERQ5gQJyhVDnXceVvQ" target="_blank" rel="noopener noreferrer">
        <div class="bg">
          <img src="../assets/images/Telegram.png" alt="Telegram">
        </div>
      </a>
      <el-tooltip popper-class="popper-item" effect="dark" content="support@fine.app" placement="top">
        <div class="bg">
          <img src="../assets/images/email.png" alt="email">
        </div>
      </el-tooltip>
    </div>
    <div class="a-link">
      <a href="#bank">{{$t('page.bank')}}</a>
      <a href="#trade">{{$t('page.sky')}}</a>
      <a href="#banner">{{$t('page.download')}}</a>
      <a href="#calculate">{{$t('page.contract')}}</a>
      <a href="#about">{{$t('page.aboutUs')}}</a>
<!--      <a href="#help">{{$t('page.help')}}</a>-->
    </div>
    <div class="copy-right">
      CopyRight &copy; 2019 Fine.app All Rights Reserved.
    </div>
  </div>
</template>

<script>
export default {
  name: 'XFooter',
  computed: {
    lang () {
      return this.$store.getters.setLanguage
    }
  }
}
</script>

<style lang="scss">
.popper-item {
  border: 1px solid #FFFFFF!important;
  background: #2C284A!important;
  color: #F8F8FA!important;
  font-size: 16px!important;
  .popper__arrow {
    &::before {
      content: "";
      display: block;
      border-left: 9px solid transparent;
      border-right: 9px solid transparent;
      border-top: 9px solid #FFF;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -3px;
    }
    &::after {
      border-width: 7px!important;
      left: -2px!important;
      bottom: -8px!important;
    }
  }
}
</style>

<style lang="scss" scoped>
.x-footer {
  background-color: #393558;
  padding: 36px 25px 0;
  .token {
    text-align: center;
    margin-bottom: 12px;
    img {
      height: 66px;
    }
  }
  .cooperate {
    padding: 0 70px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 30px;
    a {
      display: block;
    }
    .bg {
      width: 32px;
      height: 32px;
      line-height: 32px;
      background: linear-gradient(180deg,rgba(204,113,218,1) 0%,rgba(108,105,244,1) 100%);
      border-radius: 50%;
      text-align: center;
      img {
        width: 16px;
        height: 16px;
        vertical-align: middle;
      }
    }
  }
  .a-link {
    margin-bottom: 25px;
    a {
      display: inline-block;
      color: #F8F8FA;
      font-size: 12px;
      position: relative;
      margin-bottom: 15px;
      width: 33%;
      text-align: center;
    }
  }
  .copy-right {
    text-align: center;
    font-size: 12px;
    color: #EAEEF9;
    padding-bottom: 10px;
    transform: scale(0.8);
  }
}
</style>
