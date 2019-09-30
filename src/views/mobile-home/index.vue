<template>
  <div class="home-page">
    <mBanner id="banner"/>
    <section>
      <Bank id="bank"/>
      <Calculate id="calculate"/>
      <Trade id="trade"/>
      <About id="about"/>
      <Cooperate id="cooperate"/>
    </section>
    <x-footer id="footer"/>
  </div>
</template>

<script>
import mBanner from './components/mBanner'
import Bank from './components/bank'
import Calculate from './components/calculate'
import Trade from './components/trade'
import About from './components/about'
import Cooperate from './components/cooperation'
export default {
  name: 'mobile-home',
  components: { mBanner, Bank, Calculate, Trade, About, Cooperate }
}
</script>

<style lang="scss" scoped>
  section {
    min-height: 500px;
    height: auto;
    width: 100%;
    .lang {
      position: fixed;
      left: 0;
      top: 0;
      width: 100px;
      height: 40px;
      background: #0B0833;
      color: #fff;
      z-index: 999;
    }
  }
</style>
