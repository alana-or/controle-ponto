import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Teste from '@/components/Teste'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/teste',
      name: 'Teste',
      component: Teste
    }
  ]
})
