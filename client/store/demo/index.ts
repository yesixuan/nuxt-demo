import { ActionTree, MutationTree, GetterTree, ActionContext } from 'vuex'
import { RootState } from '../index'
import { State, Actions } from '~/client/store/demo/interface.ts'

export const name = 'demo'

export const types = {
  ADD: 'ADD'
}

export const namespaced = true

export const state = (): State => ({
  num: 22
})

export const getters: GetterTree<State, RootState> = {
  num(state): number {
    return state.num
  }
}

export const actions: Actions<State, RootState> = {
  addAsync({ commit }, stepWidth: number = 1) {
    setTimeout(() => {
      commit(types.ADD, stepWidth)
    }, 1000)
  }
}

export const mutations: MutationTree<State> = {
  [types.ADD](state, stepWidth: number = 1) {
    state.num += stepWidth
  }
}
