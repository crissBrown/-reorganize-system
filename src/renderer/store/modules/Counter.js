const state = {
  main: 0
}

const getters = {
  //用法类似vue中的computed，不能直接修改数据，主要是对state数据的加工
  mainPlus(state){
    return state.main++
  }
}
const mutations = {
  DECREMENT_MAIN_COUNTER (state) {
    state.main--
  },
  INCREMENT_MAIN_COUNTER (state) {
    state.main++
  }
}

const actions = {
  someAsyncTask ({ commit }) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER')
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
