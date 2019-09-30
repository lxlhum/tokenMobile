<template>
  <div class="bank">
    <div class="theme-title">
      <h2>{{$t('page.bank')}}</h2>
    </div>
    <div class="item" v-for="(item, index) in list" :key="index">
      <Card :card="item" :idx="index"></Card>
    </div>
  </div>
</template>

<script>
import icon1 from 'assets/images/current.png'
import icon2 from 'assets/images/term.png'
import icon3 from 'assets/images/reward.png'
import icon4 from 'assets/images/loan.png'

export default {
  name: 'bank',
  computed: {
    list () {
      return [
        {
          imgSrc: icon1,
          title: this.$t('page.current'),
          text: this.$t('page.currentText'),
          bgcolor: '#FFF',
          order: 0,
          width: 299
        },
        {
          imgSrc: icon2,
          title: this.$t('page.term'),
          text: this.$t('page.termText'),
          bgcolor: '#F9F8FE',
          order: 1,
          width: 417
        },
        {
          imgSrc: icon3,
          title: this.$t('page.reward'),
          text: this.$t('page.rewardText'),
          bgcolor: '#FFF',
          order: 0,
          width: 280
        },
        {
          imgSrc: icon4,
          title: this.$t('page.loan'),
          text: this.$t('page.loanText'),
          bgcolor: '#F9F8FE',
          order: 1,
          width: 258
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .bank {
    padding-top: 40px;
    .theme-title {
      h2 {
        text-align: center;
        line-height: 68px;
        height: 48px;
        font-size: 20px;
        font-weight: bold;
        overflow: hidden;
        color: #313d57;
      }
    }

  }
</style>
