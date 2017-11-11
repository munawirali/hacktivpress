import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ArticleDetail from '@/components/ArticleDetail'
import Admin from '@/components/Admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/articles/:id',
      component: ArticleDetail,
      props: true
    },
    {
      path: '/admin',
      component: Admin
    }
  ]
})
