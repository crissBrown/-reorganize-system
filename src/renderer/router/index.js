import Vue from 'vue'
import Router from 'vue-router'


import routes from './routes'
import history from './history'

//解决this.$router.push()必须添加回调的警告
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
	if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
	return originalPush.call(this, location).catch(err => err)
}


Vue.use(Router)
const ROUTER = new Router({
	routes
})
history.install(ROUTER);

export default ROUTER
