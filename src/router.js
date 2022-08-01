import Vue from 'vue'
import VueRouter from 'vue-router'

import LoginPage from './components/LoginPage'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/login',
            name: 'login',
            component: LoginPage,
            props: true
        },
        {
            path: '/registro',
            name: 'registro',
            component: () => import('./components/RegistroPage'),
            props: true
        },
        {
            path: '/main',
            name: 'main',
            component: () => import('./components/MainPage'),
            props: true
        },
        {
            path: '/admin',
            name: 'admin',
            component: () => import('./components/AdminPage'),
            props: true
        },
        {
            path: '/admin/:id',
            name: 'editar',
            component: () => import('./components/EditarPage'),
            props: true
        },
    ]
})