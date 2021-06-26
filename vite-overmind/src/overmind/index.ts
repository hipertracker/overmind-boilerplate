import { IContext } from 'overmind';
import { createActionsHook, createStateHook } from 'overmind-vue/vue3';

import * as actions from './actions';
import { state } from './state';

export const config = {
  state,
  actions
}

export type Context = IContext<typeof config>

export const hooks = {
  state: createStateHook<Context>(),
  actions: createActionsHook<Context>(),
}


