import Vue from 'vue'
import Router from 'vue-router'
import article from '../components/Article'
import postList from '../components/PostList'
import UserInfo from '../components/UserInfo'
import SideBar from '../components/SideBar'
import Login from '../components/Login'
import Register from "../components/Register"
import Guide from "../components/Guide"
import Api from "../components/Api"
import About from "../components/About"

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'root',
      path: '/',//指定要跳转的路径 
      components: {
        main: postList//指定要跳转的组件
      }
    },
    {
      name: 'post_content',
      path: '/topic/:id&&author=:name',//指定要跳转的路径 
      components: {
        main: article,//指定要跳转的组件,
        side: SideBar
      }
    },
    {
      name: 'user',
      path: '/User/:name',//指定要跳转的路径 
      components: {
        main: UserInfo//指定要跳转的组件
      }
    },
    {
      name: 'login',
      path: '/login',//指定要跳转的路径 
      components: {
        main: Login//指定要跳转的组件
      }
    },
    {
      name: 'register',
      path: '/register',//指定要跳转的路径 
      components: {
        main: Register//指定要跳转的组件
      }
    },
    {
      name: 'guide',
      path: '/getstart',//指定要跳转的路径 
      components: {
        main: Guide//指定要跳转的组件
      }
    },
    {
      name: 'api',
      path: '/api',//指定要跳转的路径 
      components: {
        main: Api//指定要跳转的组件
      }
    },
    {
      name: 'about',
      path: '/about',//指定要跳转的路径 
      components: {
        main: About//指定要跳转的组件
      }
    }
  ]
})
