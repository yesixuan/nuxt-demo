import { GetterTree, ActionContext, ActionTree, MutationTree } from 'vuex'
import axios from 'axios'
import { RootState } from './index'

export const types = {
  ADD: 'ADD'
}

export interface State {
  num: number
}

export const state = (): State => ({
  num: 0
})

export const getters: GetterTree<State, RootState> = {
  currentNum(state: RootState):number {
    return state.num
  }
}

export interface Actions<S, R> extends ActionTree<S, R> {
  // nuxt 提供的钩子，只在服务端自动被调用
  nuxtServerInit(context: ActionContext<S, R>): void
}

export const actions: Actions<State, RootState> = {
  async nuxtServerInit({ commit }) {
    // const response = await axios.get('https://www.baidu.com')
  },
  addAsync({ commit }, stepWidth:number) {
    setTimeout(() => {
      commit(types.ADD, stepWidth)
    }, 1000)
  }
}

export const mutations: MutationTree<State> = {
  [types.ADD](state:RootState, stepWidth:number = 1) {
    console.log(stepWidth)
    state.num += stepWidth
  }
}
