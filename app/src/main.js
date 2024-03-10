import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import axios from 'axios';

import Home from './views/HomeView.vue';

axios.defaults.baseURL = 'http://localhost:8000/api';

const router = createRouter({
  history: createWebHistory(),
  // Criando as rotas
  routes: [
    { path: '/', name: 'home', component: Home },
  ],
});

// Criando o app e passando as rotas
const app = createApp(App);
app.use(router);
app.mount('#app');
