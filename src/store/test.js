// 模块化
export default {
  state: {
    count: 0
  },
  getters: {
    // 计算属性
    doubleCount(state) {
      return state.count * 2
    }
  },
  mutations: {
    // 只能存放同步操作
    add(state) {
      state.count++
    },
    decrease(state) {
      state.count--
    }
  },
  actions: {
    // 只能放异步操作
    delayAdd(context) {
      setTimeout(() => {
        context.commit('add')
      }, 1000);
    }
  }
}