
/**
 * router 全局运行钩子函数
 */

export default {
    install (router) {
        
      router.beforeEach((to, from, next) => {
       //每次路由跳转前，验证身份情况，待完善业务逻辑
        if (to.meta.auth) {
          next({
            path: '/login',
            query: {
              redirect: to.fullPath
            }
          })
        } else {
          next()
        }
      })
    }
  }
  