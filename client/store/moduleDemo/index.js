import { test } from '../../apis/demo'

// 定义 mutation 名字
const types = {
  ADD: 'ADD',
  ADD2: 'ADD2',
  TEST_API: 'TEST_API'
}

// 定义初始化状态
export const state = () => ({
  count1: 100,
  res: { data: '初始值' }
})

// 定义获取状态快捷入口
export const getters = {
  count1(state) {
    return state.count1
  },
  res({ res }) {
    return res
  }
}

// 定义 mutation
export const mutations = {
  [types.ADD](state) {
    state.count1++
  },
  [types.ADD2](state, payload) {
    state.count1 += payload
  },
  [types.TEST_API](state, payload) {
    console.log('*******************', payload)
    state.res = payload
  }
}

// 定义 action 封装异步逻辑以及聚合 mutation
export const actions = {
  addAsync({ commit, state }, payload) {
    setTimeout(() => {
      commit(types.ADD2, payload)
    }, 1000)
  },
  async testApi({ commit, state }) {
    const res = await test()
    // const res = await { test: 'Vic' }
    commit(types.TEST_API, res.data)
    return res
  }
}

export const namespaced = true
