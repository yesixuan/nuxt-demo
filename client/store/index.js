/* 全局的应用状态以及各模块的整合 */

import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import * as moduleDemo from './moduleDemo'

Vue.use(Vuex)

const rootStore = {
  state: {
    counter: 0
  },
  mutations: {
    increment(state) {
      state.counter++
    }
  },
  getters: {
    counter(state) {
      return state.counter
    }
  }
}

const store = () =>
  new Vuex.Store({
    ...rootStore,
    modules: {
      moduleDemo
    },
    // 开启状态改变日志，开发模式下使用
    plugins: [createLogger()]
  })

export default store
