import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "bootstrap"
import * as Popper from "@popperjs/core"
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
