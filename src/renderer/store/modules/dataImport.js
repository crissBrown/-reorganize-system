const state = {
  stepList: [
    "ImportFormat",
    "ImportSelectSource"
  ],
  currentStep: null
}
const getters = {
  //用法类似vue中的computed，不能直接修改数据，主要是对state数据的加工
  currentStepName(state){
    debugger
    if(!state.currentStep||!state.currentStep.value){
      return null
    }
    return state.currentStep.value
  }
}
const mutations = {

  INIT_CURRENT_STEP(state) {
    debugger
    state.currentStep = {
      index: 0,
      value: "ImportFormat",
      isTheLastStep: false
    }
  },
  SET_STEP_NEXT(state) {
    state.currentStep.index++;
    if (state.currentStep.index >= state.stepList.length - 1) {
      state.currentStep.isTheLastStep = true
    }
    state.currentStep.value = state.stepList[state.currentStep.index]
  },
  SET_STEP_PREVIOUS(state) {

    state.currentStep.index--;
    state.currentStep.isTheLastStep = false;
    state.currentStep.value = state.stepList[state.currentStep.index];
  }

}

const actions = {

}

export default {
  state,
  getters,
  mutations,
  actions,
}
