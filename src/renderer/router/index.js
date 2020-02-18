import Vue from 'vue'
import Router from 'vue-router'
import fileHomePage from '@/filesystem/file_homePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'fileHomePage',
      component: fileHomePage
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
