import { createApp } from 'vue'
import App from './App.vue'

import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';

const app = createApp(App);

app.component('ComponentA', ComponentA)
.component('ComponentB', ComponentB)
.mount('#app')
