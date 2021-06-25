import { createOvermind, IContext } from 'overmind';
import { createConnect } from 'overmind-vue';

import * as actions from './actions';
import { state } from './state';

// import { createHooks } from 'overmind-vue/vue3';

export const config = {
  state,
  actions
}
export type Config = {
  state: typeof config.state;
  actions: typeof config.actions;
  // effects: typeof config.effects;
};

// Due to circular typing we have to define an
// explicit typing of state, actions and effects since
// TS 3.9 using a TYPE (not INTERFACE)
export type Context = IContext<Config>

// export const hooks = createHooks()

const overmind = createOvermind(config, { devtools: false });
export const connect = createConnect(overmind)