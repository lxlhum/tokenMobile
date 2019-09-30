<template>
  <div class="main">
    <div class="title">
      <h2>{{$t('page.cooperate')}}</h2>
      <p>{{$t('page.cooperateText')}}</p>
    </div>
    <div class="list">
      <div class="item" v-for="(item, index) in imgList" :key="index">
        <img :src="item.src" alt="" :width="item.width">
      </div>
    </div>
  </div>
</template>

<script>
import coop1 from 'assets/images/cooper1.png'
import coop2 from 'assets/images/cooper2.png'
import coop3 from 'assets/images/cooper3.png'
import coop4 from 'assets/images/cooper4.png'
export default {
  name: 'cooperation',
  computed: {
    imgList () {
      return [
        {
          src: coop1,
          id: 1,
          width: 82
        },
        {
          src: coop2,
          id: 2,
          width: 88
        },
        // {
        //   src: coop3,
        //   id: 3,
        //   width: 76
        // },
        {
          src: coop4,
          id: 4,
          width: 130
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  .main {
    padding: 20px 18px;
    background: #f9f8fe;
    color: #666;
    .title {
      padding-top: 10px;
      margin-bottom: 20px;
      h2 {
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        color: #333;
        line-height: 50px;
      }
      p{
        line-height: 20px;
      }
    }
    .list {
      padding: 0 6px 0 15px;
      display: flex;
      align-items: center;
      /*flex-wrap: wrap;*/
      justify-content: center;
      flex-direction: column;
      .item {
        width: 48%;
        height: 78px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        border-radius: 4px;
        margin-bottom: 10px;
      }
    }
  }
</style>
