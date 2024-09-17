import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import store from './components/store'
import product_store from './components/product_store'

import './assets/style.css'

createApp(App).use(store).use(product_store).use(router).mount('#app')


