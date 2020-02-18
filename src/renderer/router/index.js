import Vue from 'vue'
import Router from 'vue-router'


import routes from './routes'
import history from './history'

Vue.use(Router)
const ROUTER = new Router({
  routes
})
history.install(ROUTER);

export default ROUTER
