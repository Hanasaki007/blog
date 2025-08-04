import { createRouter, createWebHashHistory } from 'vue-router'
import home from '@/components/home.vue'
import more from '@/components/more.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name:'home',
      path:'/',
      component: home,
    },
    {
      name:'more',
      path:'/more',
      component: more,
    }
  ],
})

export default router
