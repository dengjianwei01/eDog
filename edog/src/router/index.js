import Vue from 'vue'
import Router from 'vue-router'
import home from '../page/home/home.vue'
import clothing from '../page/clothing/clothing.vue'
import classify from '../page/classify/classify.vue'
import register from '../page/register/register.vue'
import tab1 from '../page/tab1/tab1.vue'
import tab2 from  '../page/tab2/tab2.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/clothing',
      component: clothing
    },
    {
      path: '/classify',
      component: classify,
      children: [
        {
          path: '/classify/tab1',
          component: tab1
        },
        {
          path: '/classify/tab2',
          component: tab2
        },
        {
          path: '/classify',
          redirect: '/classify/tab1'
        }
      ]
    },
    {
      path: '/register',
      component: register
    },
  ]
})
