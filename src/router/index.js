import Vue from 'vue'
import Router from 'vue-router'
import TodoPage from '@/components/TodoPage'
import Home from '@/components/Home'
import Join from '@/components/contents/Join'
import Board from '@/components/contents/Board'
import List from '@/components/contents/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/example',
      name: 'example',
      component: Example
    },
    {
      path: '/todos',
      name: 'TodoPage',
      component: TodoPage
    },
    {
      path: '/join',
      name: 'Join',
      component: Join
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/board',
      name: 'board',
      component: Board
    }
  ]
})
