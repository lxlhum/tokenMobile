<template>
  <div class="card" :class="cardClass">
    <img :src="card.imgSrc" alt="" class="card-icon" :style="imgStyle">
    <h2 class="card-title">{{card.title}}</h2>
    <p class="card-detail">{{card.text}}</p>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    card: {
      type: Object,
      required: true
    },
    idx: {
      type: Number,
      default: 0
    }
  },
  computed: {
    imgStyle () {
      let idx = this.idx
      switch (idx) {
        case 0 :
          return 'width: 96px; height: 74px;'
        case 1 :
          return 'width: 117px; height: 73px;'
        case 2 :
          return `width： 85px; height: 79px;`
        case 3 :
          return `width: 85px; height: 108px`
        default :
          return 'width: 96px; height: 74px;'
      }
    },
    cardClass () {
      return this.idx % 2 !== 0 ? 'bg' : ''
    }
  }
}
</script>

<style scoped lang="less">
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 10px;
    &.bg {
      background: #f9f8fe;
    }
    .card-icon {
      margin-bottom: 10px;
    }
    .card-title {
      line-height: 40px;
      font-size: 18px;
      color: #313d57;
      font-weight: bold;
    }
    .card-detail{
      display: inline-block;
      white-space: pre-line;
      color: #627097;
      font-size: 12px;
      line-height: 30px;
      text-align: center;
    }
  }
</style>
