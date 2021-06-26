import { createOvermind } from 'overmind';
import { withOvermind } from 'overmind-vue/vue3';
import { createApp } from 'vue';

import App from './App.vue';
import { config } from './overmind';

const overmind = createOvermind(config);
createApp(withOvermind(overmind, App)).mount("#app");
