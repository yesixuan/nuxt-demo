import { ActionTree, MutationTree, GetterTree, ActionContext } from 'vuex'

export interface State {
  num: number
}

export interface Actions<S, R> extends ActionTree<S, R> {
  addAsync(context: ActionContext<S, R>, stepWidth: number): void
}
