import Vue from 'vue'
import Router from 'vue-router'
import MIndex from 'views/mobile-home/index'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '',
      name: 'index',
      redirect: '/',
      component: () => import('views/index'),
      children: [
        {
          path: '/',
          name: 'home',
          component: MIndex
        },
        {
          path: '/iosDownload',
          name: 'iosDown',
          component: () => import('views/IOSDownload')
        }
      ]
    }
  ],
  scrollBehavior (to) { // 滚动行为只有在history模式下才能有用
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})
