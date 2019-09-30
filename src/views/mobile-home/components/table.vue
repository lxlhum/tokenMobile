<template>
  <div class="table" :style='{paddingTop: paddingHeight}'>
    <div class="table-header" :style='{height: headerHeight}'>
      <div class="head-block" >
        <h2 >{{$t('page.platform')}}</h2>
      </div>
      <div class="head-block">
        <h2>Fine Wallet</h2>
      </div>
      <div class="head-block">
        <h2>BITDEER</h2>
      </div>
      <div class="head-block">
        <h2>RHY</h2>
      </div>
    </div>
    <div class="table-content">
      <div class="table-col" v-for="(item, idx) in list" :key="idx" :class=getClass(idx)>
        <p class="data-type">
          {{item.type}}
        </p>
        <p class="data-elec">
          {{item.electric}}
        </p>
        <p class="data-manage">
          {{item.manage}}
        </p>
        <p class="data-single">
          {{item.single}}
        </p>
        <p class="data-amount">
          {{item.amount}}
        </p>
        <p class="data-btc">
          {{item.btc}}
        </p>
        <p class="data-profit">
          {{item.profit}}
        </p>
        <p class="data-ratio">
          {{item.ratio}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import platform1 from 'assets/images/token.png'
import platform2 from 'assets/images/bit.png'
import platform3 from 'assets/images/rhy.png'
const px2rem = (px) => {
  let rem = window.rem || 37.5
  return px / rem + 'rem'
}
export default {
  name: 'dataTable',
  data () {
    return {}
  },
  methods: {
    getClass (idx) {
      let className = ''
      if (idx % 2 === 0) {
        className += 'bg'
      }
      if (idx === 0) {
        className += ' color'
      }
      return className
    }
  },
  computed: {
    lang () {
      return this.$store.getters.setLanguage === 'zh'
    },
    list () {
      return [
        {
          platform: platform1,
          type: this.$t('page.machine'), // 矿机型号
          electric: this.$t('page.fee'), // 电费
          manage: this.$t('page.manage'), // 管理费
          single: this.$t('page.unit'), // 单价
          amount: this.$t('page.total'), // 总成本
          btc: this.$t('page.income'), // 理论收益
          profit: this.$t('page.profit'), // 净利润
          ratio: this.$t('page.rate') // 收益率
        },
        //  猎豹F5I
        {
          platform: platform1,
          type: this.$t('page.cheetah'),
          electric: '$0.066',
          manage: '-',
          single: '$30.48',
          amount: '$54.19',
          btc: '0.00994356',
          profit: '$40.28',
          ratio: '74.34%'
        },
        //  蚂蚁S15
        {
          platform: platform2,
          type: this.$t('page.anmi'),
          electric: '$0.097',
          manage: '_',
          single: '$38.30',
          amount: '$73.22',
          btc: '0.010044',
          profit: '$22.20',
          ratio: '30.32%'
        },
        // 神马M10
        {
          platform: platform3,
          type: this.$t('page.wht'),
          electric: '_',
          manage: '5%',
          single: '$97.14',
          amount: '$97.14',
          btc: '0.0095418',
          profit: '$6.50',
          ratio: '-6.69%'
        }
      ]
    },
    headerHeight () {
      return this.lang ? px2rem(40) : px2rem(58)
    },
    paddingHeight () {
      return this.lang ? px2rem(36) : px2rem(54)
    }
  }
}
</script>

<style scoped lang="less">
  .table {
    position: relative;
    padding: 40px 15px 0;
    color: #fff;
    overflow: hidden;
    .table-header {
      position: absolute;
      top: 0;
      width: calc(100% - 30px);
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 44px;
      border-radius: 4px;
      background: #5b3cbb;
      .head-block {
        width: 25%;
        text-align: center;
        h2 {
          font-size: 14px;
          font-weight: bold;
        }
        img {
          width: 70px;
        }
      }
    }
    .table-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 4px;
      overflow: hidden;
      .table-col {
        padding-top: 10px;
        width: 25%;
        background: #fff;
        color: #333;
        &.bg {
          background: #f9f8ff;
        }
        &.color {
          color: #58439e;
        }
        p {
          text-align: center;
          font-weight: bold;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
</style>
