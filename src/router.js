import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

export default new VueRouter({

  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
        path: '/login',
        name: 'login',
        component: () => import ('./pages/LoginPage'),
        props: true
    },

    {
        path: '/registro',
        name: 'registro',
        component: () => import('./pages/RegistroPage'),
        props: true
    },

    {
        path: '/main',
        name: 'main',
        component: () => import('./pages/MainPage'),
        props: true
    },

    {
        path: '/admin',
        name: 'admin',
        component: () => import('./pages/AdminPage'),
        props: true
    },

    {
        path: '/admin/:id',
        name: 'editar',
        component: () => import('./pages/EditarPage'),
        props: true
    },
    {
        path: '/carrito/:id',
        name: 'carrito',
        component: () => import ('../src/pages/CarritoPage')
    },

    ]
  }
);