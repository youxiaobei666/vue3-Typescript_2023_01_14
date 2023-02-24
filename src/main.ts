import { createApp } from 'vue';

// i18n
import i18n from '@/i18n';

import App from './App.vue';
const app = createApp(App);
import router from './router';
import store from './store';

// 导入 element
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// 注册 所有的 el 图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

import components from '@tomiaa/vue3-components';

// 引入公共样式
import '@/scss/index.scss';

app
  .use(i18n)
  .use(store)
  .use(router)
  .use(ElementPlus)
  .use(components)
  .mount('#app');
