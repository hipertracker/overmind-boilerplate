<template>
  <div class="pt-3 pb-3">
    <DecBtn @click="actions.dec" />
    <span class="bg-gray-200 text-xl ml-3 mr-3">
      Counter: {{ state.counter }}
    </span>
    <IncBtn @click="actions.inc" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IncBtn from "./IncBtn.vue";
import DecBtn from "./DecBtn.vue";
import { hooks} from "../overmind";

export default defineComponent({
  name: "SimpleCounter",
  components: {
    IncBtn,
    DecBtn,
  },
  setup() {
    const state = hooks.state();
    const actions = hooks.actions();
    return { state, actions}
  },
});
</script>
