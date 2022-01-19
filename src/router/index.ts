import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Money from '@/views/Money.vue'
import Labels from '@/views/Labels.vue'
import Statistics from '@/views/Statistics.vue'
import NotFound from '@/views/NotFound.vue';
import EditLabel from '@/views/EditLabel.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {//设置默认路径为money
    path: '/',
    redirect: '/money'

  },
  {
    path: '/money',
    component: Money
  },
  {
    path: '/Labels',
    component: Labels
  },
  {
    path: '/statistics',
    component: Statistics
  },
  {
    path: '/Labels/edit/:id',
    component: EditLabel
  },
  {
    // 除了上面的指定路径剩余的所有路径
    path: '*',
    component: NotFound
  },
]

const router = new VueRouter({
  routes
})

export default router
