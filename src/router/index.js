import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import shouye from '@/components/shouye'
import zhuce from '@/components/zhuce'
import denglu from '@/components/denglu'
import guanyu from '@/components/guanyu'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shouye',
      component: shouye
    },
    /*{
      path: '/login',
      name: 'login',
      component: login
    },*/
    {
      path: '/zhuce',
      name: 'zhuce',
      component: zhuce
    },
    {
      path: '/denglu',
      name: 'denglu',
      component: denglu
    },
    {
      path: '/guanyu',
      name: 'guanyu',
      component: guanyu
    }
  ]
})
