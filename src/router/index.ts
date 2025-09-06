import { createRouter, createWebHashHistory } from 'vue-router'
import home from '@/components/home.vue'
import more from '@/components/more.vue'
import layout from '@/components/layout.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path:'/',
      name:'layout',
      component:layout,
      redirect: '/home', // 添加重定向，使默认打开home页面
      children:[
        {
          path:'/home',
          name:'home',
          component:home
        },
        {
          path:'/more',
          name:'more',
          component:more
        }
      ]
    }
  ],
})

export default router
