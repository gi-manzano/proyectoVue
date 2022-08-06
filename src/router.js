import Vue from 'vue'
import router from 'vue-router'

import LoginPageVue from './pages/LoginPage.vue';
import ResigstroPage from './pages/RegistroPage.vue'
import HomePageVue from './pages/HomePage.vue';
import AdminPageVue from './pages/AdminPage.vue';
import CreatePageVue from './pages/CreatePage.vue';
import EditarPageVue from './pages/EditarPage.vue';


Vue.use(router);

export default new router({

  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '/', redirect: '/login'},
    {path: '/login',component: LoginPageVue, props: true},
    {path: '/registro',component: ResigstroPage, props: true},
    {path: '/home',component: HomePageVue ,props: true},
    {path: '/home/:id',component: HomePageVue ,props: true},
    {path: '/admin', component: AdminPageVue, props: true},
    {path: '/admin/create', component: CreatePageVue, props: true},
    {path: '/admin/edit/:id', component: EditarPageVue, props: true},
    
    ]
  }
);