<template>
  <div class="calculate">
    <div class="content">
      <h2 class="calc-title" align="center">{{$t('page.contract')}}</h2>
      <div class="calc-list">
        <div class="item">
          <h1>{{$t('page.pool')}}</h1>
          <span>
              {{$t('page.poolText')}}
            </span>
        </div>
        <div class="item">
          <h1>{{$t('page.mine')}}</h1>
          <span>
              {{$t('page.mineText')}}
            </span>
        </div>
        <div class="item">
          <h1>{{$t('page.mill')}}</h1>
          <span>
              {{$t('page.millText')}}
            </span>
        </div>
      </div>
      <div class="calc-img">
        <img src="../../../assets/images/calcu.png" alt="image">
      </div>
      <h1 class="second-title">{{$t('page.choose')}}</h1>
      <div class="table">
        <DataTable />
        <p class="tips">{{$t('page.note')}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import platform1 from 'assets/images/token.png'
import platform2 from 'assets/images/bit.png'
import platform3 from 'assets/images/rhy.png'
import DataTable from './table'
export default {
  name: 'calculate',
  components: { DataTable },
  computed: {
    lang () {
      return this.$store.getters.setLanguage === 'zh'
    },
    styles () {
      return {
        height: this.lang ? '86px' : '88px'
      }
    },
    hTop () {
      return {
        height: this.lang ? '54px' : '94px',
        paddingTop: this.lang ? '30px' : '30px'
      }
    },
    data () {
      return [
        {
          platform: platform1,
          type: this.$t('page.cheetah'),
          electric: '$0.091',
          fee: '1%',
          single: '$35.52',
          amount: '$67.28',
          btc: '0.0112943',
          profit: '$61.80',
          ratio: '91.85%'
        },
        {
          platform: platform2,
          type: this.$t('page.anmi'),
          electric: '$0.097',
          fee: '_',
          single: '$38.30',
          amount: '$73.22',
          btc: '0.0114084',
          profit: '$57.16',
          ratio: '78.81%'
        },
        {
          platform: platform3,
          type: this.$t('page.wht'),
          electric: '_',
          fee: '5%',
          single: '$101.43',
          amount: '$101.43',
          btc: '0.0108379',
          profit: '$22.41',
          ratio: '22.11%'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .calculate {
    padding: 32px 0 20px;
    background-color: #1C1064;
    .calc-title {
      font-size: 16px;
      font-weight: bold;
      color: #fff;
      line-height: 63px;
    }
    .calc-list {
      color: #fff;
      height: auto;
      .item {
        padding: 0 25px;
        h1 {
          position: relative;
          font-size: 14px;
          line-height: 40px;
          &:after {
            position: absolute;
            left: -10px;
            top: 18px;
            display: block;
            content: '';
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #fff;
          }
        }
        span {
          font-size: 12px;
          line-height: 24px;
          color: rgba(203,203,255,1);
        }
      }
    }
    .calc-img {
      text-align: center;
      img {
        width: 165px;
        height: 130px;
        margin-bottom: 46px;
      }
    }
    .second-title{
      text-align: center;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 15px;
    }
    .tips {
      text-align: center;
      line-height: 36px;
      color: #fff;
    }
  }
</style>
