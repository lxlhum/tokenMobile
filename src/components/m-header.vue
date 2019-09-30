<template>
  <div class="header">
    <cell-group class="content">
      <!--logo -->
      <cell>
        <router-link to="#navi">
          <img :src="changeLogo" alt="token-sky" height="44" width="149">
        </router-link>
      </cell>
      <cell>
        <img :src="changeLogo" alt="">
      </cell>
    </cell-group>
  </div>
</template>

<script>
import logo from 'assets/images/fine-logo-white.png'
import logo1 from 'assets/images/fine-logo-row.png'
import logoWhite from 'assets/logo/logo-white-row.svg'
import logoColor from 'assets/logo/logo-row.svg'
export default {
  name: 'mHeader',
  data () {
    return {
      changeLogo: logoWhite,
      bgStyle: {
        backgroundColor: '#2B206E'
      },
      aStyle: {
        color: '#F8F8FA',
        langColor: '#F8F8FA'
      },
      lineStyle: {
        backgroundColor: '#F8F8FA'
      },
      clickId: 0 // 点击的路由
    }
  },
  computed: {
    lang () {
      return this.$store.getters.setLanguage
    },
    routerList () {
      return [
        {
          id: '#bank',
          name: this.$t('page.bank'),
          path: '/bank'
        },
        {
          id: '#calculate',
          name: this.$t('page.contract'),
          path: '/calculate'
        },
        {
          id: '#trade',
          name: this.$t('page.sky'),
          path: '/trade'
        },
        {
          id: '#about',
          name: this.$t('page.aboutUs'),
          path: '/about'
        },
        {
          id: '#help',
          name: this.$t('page.help'),
          path: '/help'
        }
      ]
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll, false)
  },
  methods: {
    handleScroll () { // 滚动距顶导航栏背景色更改
      let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
      let naviBank = document.querySelector('#navi').offsetTop + document.querySelector('#navi').clientHeight
      if (scrollTop < naviBank) {
        this.bgStyle = {
          backgroundColor: '#2B206E',
          position: 'static',
          marginBottom: '0'
        }
        this.changeLogo = logoWhite
        // a标签样式
        this.aStyle = {
          color: '#F8F8FA'
        }
      } else {
        this.bgStyle = {
          color: '#333',
          backgroundColor: '#FFF',
          boxShadow: '0px 3px 18px rgba(125,0,249,0.16)',
          position: 'fixed'
        }
        // a标签样式
        this.aStyle = {
          color: '#676767',
          bgColor: '#fff',
          langColor: '#674AFA'
        }
        // 底部横线样式
        this.lineStyle = {
          backgroundColor: '#333'
        }
        // 改变logo图标
        this.changeLogo = logoColor
      }
      let navi = document.querySelector('#navi').offsetTop + document.querySelector('#navi').clientHeight - 45
      // 获取#bank距离顶部的距离
      let bank = document.querySelector('#bank').offsetTop + document.querySelector('#bank').clientHeight - 200
      // 获取#calculate距离顶部的距离
      let calculate = document.querySelector('#calculate').offsetTop + document.querySelector('#calculate').clientHeight - 200
      let trade = document.querySelector('#trade').offsetTop + document.querySelector('#trade').clientHeight - 200
      let cooperate = document.querySelector('#cooperate').offsetTop + document.querySelector('#cooperate').clientHeight - 200
      let about = document.querySelector('#about').offsetTop + document.querySelector('#about').clientHeight - 200

      if (scrollTop > navi && scrollTop <= bank) {
        this.clickId = '#bank' // clickId 是表示高亮，用作顶栏菜单
      } else if (scrollTop > bank && scrollTop <= calculate) {
        this.clickId = '#calculate'
      } else if (scrollTop > calculate && scrollTop <= trade) {
        this.clickId = '#trade'
      } else if (scrollTop > trade && scrollTop <= about) {
        this.clickId = '#about'
      } else if (scrollTop > about && scrollTop <= cooperate) {
        this.clickId = '#cooperate'
      } else {
        this.clickId = '#navi'
      }
    },
    handleRouter (path, id) { // 路由处理
      this.clickId = id
      this.$router.push('/' + id)
    }
  }
}
</script>

<style scoped lang="less">
  .header {
    height: 88px;
  }
</style>
