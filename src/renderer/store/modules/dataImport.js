const state = {
  stepList: [
    "ImportFormat",
    "ImportSelectSource"
  ],
  currentStep: {},
  wizardOption: {}

}
const getters = {
  //用法类似vue中的computed，不能直接修改数据，主要是对state数据的加工

}
const mutations = {
  /**
   * 初始化当前步骤的状态信息
   * @param {*} state 
   * @author zy
   */
  INIT_CURRENT_STEP(state) {
    state.currentStep = {
      index: 0,
      value: "ImportFormat",
      isTheLastStep: false
    }
  },
  /**
 * 进入下一步骤
 * @param {*} state 
 * @author zy
 */
  SET_STEP_NEXT(state) {
    state.currentStep.index++;
    if (state.currentStep.index >= state.stepList.length - 1) {
      state.currentStep.isTheLastStep = true
    }
    state.currentStep.value = state.stepList[state.currentStep.index]
  },
  /**
  * 进入上一步骤
  * @param {*} state 
  * @author zy
  */
  SET_STEP_PREVIOUS(state) {

    state.currentStep.index--;
    state.currentStep.isTheLastStep = false;
    state.currentStep.value = state.stepList[state.currentStep.index];
  },
  /**
   * 设置向导选项信息中的导入文本格式信息（如从excel导入）
   * @param {*} state 
   * @param {*} choosedFormat 当前选择的导入来源格式
   */
  SET_WIZARD_OPTION(state, { key, value = null }) {
    debugger
    if (key) {
      state.wizardOption[key] = value
    }
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
