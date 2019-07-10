import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'


import Home from './components/Home'
import Menu from './components/Menu'
import About from './components/About'
import Admin from './components/Admin'
import Contact from './components/Contact'
import History from './components/History'
import Delivery from './components/Delivery'
import OrderingGuide from './components/OrderingGuide'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: Home
    },
    {
        path: '/menu',
        component: Menu
    },
    {
        path: '/admin',
        component: Admin
    },
    {
        path: '/about',
        component: About,
        children: [{
                path: '/contact',
                component: Contact
            },
            {
                path: '/history',
                component: History
            },
            {
                path: '/delivery',
                component: Delivery
            },
            {
                path: '/ordering-guide',
                component: OrderingGuide
            },
        ]
    },
    {
        path: '*',
        redirect: '/'
    },
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})