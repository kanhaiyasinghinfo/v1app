import Vue from 'vue'
import Router from 'vue-router'
import vueResource from 'vue-resource'

import Home from '@/components/Home'
import AboutUs from '@/components/About-us'
import ContactUs from '@/components/Contact-us'
import SignIn from '@/components/Login-page'
//Layout
import LoginLayout from '@/LoginLayout'
import HomeLayout from '@/Home-layout'

Vue.use(Router)
Vue.use(vueResource)

export default new Router({
  mode: 'history',
  routes: [
    {
    path: '/',
    component: HomeLayout,
    children:[
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about-us',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/contact-us',
      name: 'ContactUs',
      component: ContactUs
    }
  ]
},
    {
      path: '/',
      component: LoginLayout,
      children:[{
        path: '/login',
        name: 'SignIn',
        component: SignIn
      }
      ]
    }
  ]
})
