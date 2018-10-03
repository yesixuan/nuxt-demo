import { GetterTree, ActionContext, ActionTree, MutationTree } from 'vuex'
import axios from 'axios'
import { RootState } from './index'
import * as people from './modules/people'

export const types = {}

export interface State {}

export const state = (): State => ({})

export const getters: GetterTree<State, RootState> = {}

export interface Actions<S, R> extends ActionTree<S, R> {
  nuxtServerInit(context: ActionContext<S, R>): void
}

export const actions: Actions<State, RootState> = {
  async nuxtServerInit({ commit }) {
    const response = await axios.get('https://www.baidu.com')
    console.log(response.data)
    // const staticPeople = response.data.slice(0, 10)
    // commit(`${people.name}/${people.types.SET}`, staticPeople, { root: true })
  }
}

export const mutations: MutationTree<State> = {}