import Vue from 'vue'
import Router from 'vue-router'
import TodoPage from '@/components/TodoPage'
import Login from '@/components/contents/Login'
import Home from '@/components/Home'
import Join from '@/components/contents/Join'
import UserContent from '@/components/contents/UserContent'
import UserModify from '@/components/contents/UserModify'
import BoardWrite from '@/components/contents/BoardWrite'
import BoardList from '@/components/contents/BoardList'
import BoardContent from '@/components/contents/BoardContent'
import BoardModify from '@/components/contents/BoardModify'
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
      path: '/login',
      name: 'Login',
      component: Login
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
      path: '/userInfo',
      name: 'UserContent',
      component: UserContent
    },
    {
      path: '/userModify',
      name: 'UserModify',
      component: UserModify
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
    },
    {
      path: '/modify',
      name: 'BoardModify',
      component: BoardModify
    }
  ]
})
