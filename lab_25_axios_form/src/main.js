import { createApp } from 'vue'
import App from './App.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

import 'bootstrap/dist/css/bootstrap.css'

const VueApp =createApp(App);
VueApp.use(VueAxios, axios).mount('#app')
