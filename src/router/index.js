import Vue from 'vue'
import Router from 'vue-router'
import TodoPage from '@/components/TodoPage'
import Example from '@/components/Example'
import Home from '@/components/Home'
import Join from '@/components/contents/Join'
import BoardWrite from '@/components/contents/BoardWrite'
import BoardList from '@/components/contents/BoardList'
import BoardContent from '@/components/contents/BoardContent'
import UserList from '@/components/contents/UserList'

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
      name: 'Example',
      component: Example
    },
    {
      path: '/userList',
      name: 'UserList',
      component: UserList
    },
    {
      path: '/join',
      name: 'Join',
      component: Join
    },
    {
      path: '/list',
      name: 'BoardList',
      component: BoardList
    },
    {
      path: '/write',
      name: 'BoardWrite',
      component: BoardWrite
    },
    {
      path: '/board',
      name: 'BoardContent',
      component: BoardContent
    }
  ]
})
