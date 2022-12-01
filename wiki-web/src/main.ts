import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import * as Icons from '@ant-design/icons-vue';

// #app，想到选择器，肯定有个div id="app"
const app = createApp(App);
app.use(store).use(router).use(Antd).mount('#app');

// 使用全局图标
const icons: any=Icons;
for (const i in icons) {
    app.component(i,icons[i]);
}
