import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

// #app，想到选择器，肯定有个div id="app"
createApp(App).use(store).use(router).use(Antd).mount('#app');
