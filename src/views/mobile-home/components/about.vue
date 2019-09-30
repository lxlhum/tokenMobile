<template>
  <div class="main">
    <div class="about-header">
      <h2 class="about-title">{{$t('page.aboutUs')}}</h2>
      <p class="about-desc">{{$t('page.aboutText')}}</p>
    </div>
    <div class="about-list">
      <div class="card" v-for="(item, idx) in list" :key="idx">
        <div class="card-icon">
          <img :src="item.imgSrc" alt="" :style="item.imgStyle">
        </div>
        <div class="card-title">{{item.title}}</div>
        <p class="card-detail">{{item.text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import icon1 from 'assets/images/about01.png'
import icon2 from 'assets/images/about02.png'
import icon3 from 'assets/images/about03.png'
export default {
  name: 'about',
  computed: {
    list () {
      return [
        {
          imgSrc: icon1,
          imgStyle: 'width: 35px; height: 40px;',
          title: this.$t('page.safety'),
          text: this.$t('page.safetyText'),
          width: 82
        },
        {
          imgSrc: icon2,
          imgStyle: 'width: 47px; height: 40px;',
          title: this.$t('page.convenience'),
          text: this.$t('page.convenienceText'),
          width: 100
        },
        {
          imgSrc: icon3,
          imgStyle: 'width: 23px; height: 34px;',
          title: this.$t('page.profession'),
          text: this.$t('page.professionText'),
          width: 54
        }
      ]
    },
    styles () {
      return {
        padding: this.$store.getters.setLanguage === 'zh' ? '80px 20px 0' : '40px 20px'
        // height: this.$store.getters.setLanguage === 'zh' ? '350px' : '430px'
        // top: this.$store.getters.setLanguage === 'zh' ? '-20px' : '-40px'
      }
    }
  }
}
</script>

<style scoped lang="less">
  .main {
    padding: 0 20px 20px;
    .about-header {
      padding: 40px 0 18px;
      h2 {
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        line-height: 39px;
      }
      p {
        line-height: 20px;
        color: #666;
        white-space: pre-line;
      }
    }
    .about-list {
      padding: 40px 54px 10px 60px;
      background: #f4f2ff;
      border-radius: 4px;
      .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 30px;
        .card-title{
          font-size: 14px;
          font-weight: bold;
          line-height: 30px;
        }
        .card-detail{
          line-height: 20px;
          color: #666;
        }
      }
    }
  }
</style>
