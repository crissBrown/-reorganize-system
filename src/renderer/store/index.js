import Vue from 'vue'
import Vuex from 'vuex'

import { createPersistedState, createSharedMutations } from 'vuex-electron'

import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  plugins: [
    createPersistedState(),
    // createSharedMutations()   去掉这个插件解决commit、dispatch不能使用的问题
  ],
  strict: process.env.NODE_ENV !== 'production'
})
