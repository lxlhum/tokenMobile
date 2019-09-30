<template>
  <transition
    :duration="{enter: 100, leave: 100}"
    enter-active-class="animated fadeInRight"
    leave-active-class="animated fadeOutRight"
  >
    <div class="content" v-show="isShow" @touchstart.stop>
      <div class="bg"> </div>
      <div class="main">
        <div class="menu-header">
<!--          <img src="../../../assets/images/logo1.png" alt="" class="logo">-->
          <img class="logo" src="../../../assets/logo/logo-row.png" alt="">
          <img src="../../../assets/images/close.png" alt="" class="close" @click="hide">
        </div>
        <div class="menu-list">
          <div
              v-for="item in routerList"
              :key="item.id"
              :class="{'normal': true, 'is-active': item.id === clickId}">
            <div @click="handleRouter(item.path, item.id)">
              <router-link :to="item.id" :style="aStyle" class="link-tab">{{item.name}}</router-link>
            </div>
          </div>
        </div>
        <div class="lang-button">
          <LangSelector @changeLang="hide"/>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import LangSelector from './langSelector'
export default {
  name: 'mMenu',
  data () {
    return {
      isShow: false,
      bgStyle: {
        backgroundColor: '#2B206E'
      },
      aStyle: {
        color: '#000',
        langColor: '#000'
      },
      lineStyle: {
        backgroundColor: '#F8F8FA'
      },
      clickId: 0 // 点击的路由
    }
  },
  components: { LangSelector },
  methods: {
    show () {
      this.isShow = true
    },
    hide () {
      this.isShow = false
    },
    handleRouter (path, id) { // 路由处理
      this.hide()
      setTimeout(() => {
        this.clickId = id
        this.$router.push('/' + id)
      }, 50)
    }
  },
  computed: {
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
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
  .content {
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    z-index: 100;
    background: #fff;
    .bg {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 346px;
      background: linear-gradient(#efedf8, #fff);
    }
    .main {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      text-align: center;
      .menu-header {
        padding: 0 20px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .logo {
          height: 30px;
        }
        .close {
          width: 16px;
          height: 16px;
        }
      }
      .menu-list{
        padding: 80px 0 30px;
        .normal {
          line-height: 74px;
          font-weight: bold;
          font-size: 14px;
        }
      }
    }
  }
</style>
