<template>
  <div class="lang" @click="changeLanguage">
    <span class="gradient"></span>
    <span class="button">
      {{langText}}
    </span>
  </div>
</template>

<script>
export default {
  name: 'langSelector',
  methods: {
    changeLanguage () {
      let lang = this.language === 'zh' ? 'en' : 'zh'
      this.$i18n.locale = lang
      this.$store.dispatch('setLanguage', lang)
      this.$emit('changeLang', lang)
    }
  },
  computed: {
    language () {
      return this.$store.getters.setLanguage
    },
    langText () {
      return this.language === 'zh' ? 'English' : '中文'
    }
  }
}
</script>

<style lang="less" scoped>
  .lang {
    position: relative;
    width: 100%;
    height: 44px;
  }
  .button {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 123px;
    height: 40px;
    line-height: 40px;
    border-radius: 4px;
    background: #fff;
    color: #3a89ff;
    font-size: 14px;
  }
  .gradient {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    &::after {
      display: block;
      content: "";
      width: 128px;
      height: 44px;
      background: #bd328f;
      background: linear-gradient(160deg,rgba(204,113,218,1) 0%,rgba(108,105,244,1) 100%);
      border-radius: 4px
    }
  }
</style>
