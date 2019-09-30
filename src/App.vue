<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  name: 'app',
  created () {
    let isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
    if (!isMobile) {
      window.location.replace('http://fine.app/')
    }
  }
}
</script>

<style lang="scss">
  body {
    letter-spacing: 0.2px;
  }
</style>
