import Vuex from 'vuex'
import * as root from './root'
import * as demo from './demo'
import * as demoInterface from './demo/interface'
interface ModulesStates {
  demo: demoInterface.State
}

export type RootState = root.State & ModulesStates

const createStore = () => {
  return new Vuex.Store({
    state: root.state(),
    getters: root.getters,
    mutations: root.mutations,
    actions: root.actions,
    modules: {
      [demo.name]: demo
    }
  })
}

export default createStore

