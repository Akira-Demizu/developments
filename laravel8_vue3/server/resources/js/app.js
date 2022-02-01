require('./bootstrap');

import { createApp } from 'vue'
import TestVue from './components/TestVue.vue';

const app = createApp({})
app.component('test-vue', TestVue);
app.mount('#app')
