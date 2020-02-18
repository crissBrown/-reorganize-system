


import Login from '@/views/login/login'
import Home from '@/views/home'



const routes =
    [
        {
            path: '/home',
            name: 'home',
            component: Home
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
