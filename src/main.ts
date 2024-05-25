import "@/assets/global.scss"
import '@fortawesome/fontawesome-free/css/all.css';
import 'primevue/resources/themes/aura-dark-noir/theme.css'
import "./plugins/axios"

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';

const app = createApp(App)

app.use(router)
app.use(PrimeVue);
app.use(ToastService);
app.mount('#app')
