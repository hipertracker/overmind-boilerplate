<template>
  <div class="q-pb-lg">
    <q-btn round color="primary" icon="add" @click="increment"/>
    <span class="bg-gray-200 text-xl ml-3 mr-3 q-mx-sm text-h6">
      Counter: {{ counter }}
    </span>
    <q-btn round color="primary" icon="remove" @click="decrement"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { connect, Context } from '../overmind';

const Component = defineComponent({
  name: 'SimpleCounter',
});

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export default connect((context: Context) => {
  return {
    counter: context.state.counter,
    increment: context.actions.inc,
    decrement: context.actions.dec,
  }
}, Component);
</script>
