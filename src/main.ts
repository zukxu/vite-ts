import {createApp} from 'vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
// 引入uno.css
import 'virtual:uno.css'
import store from '@/store/index'
import router from '@/router/index'

import App from './App.vue'

const app = createApp(App);
app.use(store).use(router).use(PrimeVue, {ripple: true, theme: Aura})
app.mount('#app')
