<template>
  <div class="page">
    <span class="lang" @click="setLang">{{langText}}</span>
    <div class="banner">
      <p class="logo">
<!--        <img src="../../assets/images/fine-down-logo.png" alt="">-->
        <img src="../../assets/images/download-info-logo.png" alt="">
      </p>
      <p class="row">
        <span v-show="!download" @click="startDown" class="btn">{{btnText}} <i class="el-icon-loading" v-show="loading"></i></span>
        <a v-show="download" :href="doneLink" class="btn">{{trustBtn}}</a>
      </p>
    </div>
    <p class="info">
      <img :src="imgSrc" alt="">
    </p>
    <div class="mask" @touchstart.stop v-show="showTips">
      <img :src="tipSrc" alt="">
    </div>
  </div>
</template>

<script>
/*
* 描述文件
* https://app.tokensky.io/download/tokensky.mobileprovision
* */
/* APP
* itms-services://?action=download-manifest&url=https://app.tokensky.io/download/manifest.plist
*  */
import infoZh from '../../assets/images/download-info-zh.png'
import infoEn from '../../assets/images/download-info-en.png'
import tipZh from '../../assets/images/download-tips-zh.png'
import tipEn from '../../assets/images/download-tips-en.png'
// APP下载链接
const PLIST_LINK = 'itms-services://?action=download-manifest&url=https://tokensky.fine.app/download/manifest.plist'
// 描述文件链接
const PROVISION_LINK = 'https://tokensky.fine.app/download/tokensky.mobileprovision'
export default {
  name: 'IOSDownload',
  data () {
    return {
      download: false,
      loading: false,
      showTips: false,
      doneLink: PROVISION_LINK
    }
  },
  mounted () {
    if (!this.isSafari) {
      this.showTips = true
    }
  },
  methods: {
    startDown () {
      if (!this.isSafari) {
        this.showTips = true
        return false
      }
      if (this.loading) {
        return false
      }
      location.href = PLIST_LINK
      this.loading = true
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        this.download = true
        this.loading = false
      }, 10000)
    },
    setLang () {
      let lang = this.$store.getters.setLanguage === 'zh' ? 'en' : 'zh'
      this.$i18n.locale = lang
      this.$store.dispatch('setLanguage', lang)
    }
  },
  computed: {
    tipSrc () {
      return this.$store.getters.setLanguage === 'zh' ? tipZh : tipEn
    },
    isSafari () {
      return /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)
    },
    imgSrc () {
      return this.$store.getters.setLanguage === 'zh' ? infoZh : infoEn
    },
    langText () {
      return this.$store.getters.setLanguage === 'zh' ? 'English' : '简体中文'
    },
    btnText () {
      if (!this.loading) {
        return this.$store.getters.setLanguage === 'zh' ? '下载安装' : 'Download'
      } else {
        return this.$store.getters.setLanguage === 'zh' ? '下载中' : 'Downloading'
      }
    },
    trustBtn () {
      return this.$store.getters.setLanguage === 'zh' ? '安装描述文件' : 'Install DescriptionFile'
    }
  }
}
</script>

<style lang="scss" scoped>
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
.lang {
  position: absolute;
  top: 20px;
  right: 20px;
  display: inline-block;
  width: 80px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  font-size: 16px;
  color: #fff;
  z-index: 99;
  border: 1px solid #efedf8;
  border-radius: 4px;
  background: transparent;
}
.banner {
  position: relative;
  box-sizing: border-box;
  padding-top: 80px;
  width: 100%;
  height: 330px;
  background-image: url("../../assets/images/download-bg.png");
  background-size: 100% 100%;
  .logo {
    text-align: center;
    img {
      width: 100px;
    }
  }
  .row {
    text-align: center;
    .btn {
      display: inline-block;
      width: 195px;
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      color: #fff;
      background-image: url("../../assets/images/download-btn.png");
      background-size: 100% 100%;
      margin-top: 20px;
    }
  }
}
.info {
  padding: 0 10px 10px;
  img {
    width: 100%;
  }
}
</style>
