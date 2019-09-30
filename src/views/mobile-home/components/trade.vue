<template>
  <div class="trade">
    <div class="main-title">
      <h2>{{$t('page.sky')}}</h2>
      <h3>{{$t('page.tradePlatform')}}</h3>
    </div>
    <div class="list">
      <div class="item" v-for="(item, idx) in list" :key="idx">
        <img :src="item.imgSrc" :style=getImgStyle(idx) alt="" class="item-img">
        <div class="item-main">
          <h3 class="item-title">{{item.title}}</h3>
          <p class="item-desc">{{item.text}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import trade01 from 'assets/images/trade01.png'
import trade02 from 'assets/images/trade02.png'
import trade03 from 'assets/images/trade03.png'
export default {
  name: 'trade',
  computed: {
    list () {
      return [
        {
          imgSrc: trade01,
          title: this.$t('page.fast'),
          text: this.$t('page.fastText'),
          width: 102
        },
        {
          imgSrc: trade02,
          title: this.$t('page.safe'),
          text: this.$t('page.safeText'),
          width: 96
        },
        {
          imgSrc: trade03,
          title: this.$t('page.control'),
          text: this.$t('page.controlText'),
          width: 105
        }
      ]
    }
  },
  methods: {
    getImgStyle (idx) {
      if (idx === 0) {
        return 'width:30px; height: 50px'
      }
      if (idx === 1) {
        return 'width:34px; height: 37px'
      }
      if (idx === 2) {
        return 'width:38px; height: 38px'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.trade {
  background: #f9f8fe;
  padding-top: 40px;
  .main-title {
    text-align: center;
    padding: 10px 15px 22px;
    h2 {
      font-size: 16px;
      font-weight: bolder;
      color: #333;
    }
    h3 {
      font-size: 14px;
      line-height: 44px;
      color: #666;
    }
  }
  .list {
    padding: 6px 15px 20px;
    .item {
      padding: 25px 25px 27px 30px;
      display: flex;
      align-items: center;
      background: #fff;
      border-radius: 4px;
      box-shadow: 0 3px 8px rgba(93, 0, 255, .16);
      margin-bottom: 10px;
      .item-img {
        margin-right: 20px;
      }
      .item-title {
        font-size: 14px;
        line-height: 20px;
        font-weight: bold;
      }
      .item-desc {
        color: #666;
        line-height: 16px;
      }
    }
  }
}
</style>
