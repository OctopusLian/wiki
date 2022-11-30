import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// #app，想到选择器，肯定有个div id="app"
createApp(App).use(store).use(router).mount('#app')
