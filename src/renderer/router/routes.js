import Login from '@/views/login/login'
import Home from '@/views/home'
import Platcase from '@/views/obj_management/managementcom/case/platcase.vue'
import Equipcase from '@/views/obj_management/managementcom/case/equipcase.vue'
import Chaincase from '@/views/obj_management/managementcom/case/chaincase.vue'



const routes = [{
		path: '/home',
		name: 'home',
		component: Home,
		children: [{
			//这里不能加/
			path: "plat/:id",
			name: 'Plat',
			component: Platcase
		}, {
			path: "equip/:id",
			name: "Equip",
			component: Equipcase
		}, {
			path: "chain/:id",
			name: "Chain",
			component: Chaincase
		}]
	},
	{
		path: '/',
		name: 'login',
		component: Login
	},
	{
		path: '*',
		redirect: '/home'
	}
]
export default routes
