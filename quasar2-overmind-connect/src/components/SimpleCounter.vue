<template>
  <div class="q-pb-lg">
    <q-btn round color="primary" icon="add" @click="actions.inc"/>
    <span class="bg-gray-200 text-xl ml-3 mr-3 q-mx-sm text-h6">
      Counter: {{ state.counter }}
    </span>
    <q-btn round color="primary" icon="remove" @click="actions.dec"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { connect, Context } from '../overmind';

const Component = defineComponent({
  name: 'SimpleCounter',
  setup() {
    // const state = hooks.state();
    // const actions = hooks.actions();
    // return { state, actions };
  },
});

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export default connect((context: Context) => {
  return {
    state: context.state,
    actions: context.actions
  }
}, Component);
</script>
