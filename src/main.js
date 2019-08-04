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
        name: 'homeLink',
        component: Home
    },
    {
        path: '/menu',
        name: 'menuLink',
        component: Menu
    },
    {
        path: '/admin',
        name: 'adminLink',
        component: Admin,
        beforeEnter: (to, from, next) => {
            alert('This area is for authorised user only, please login to countinue.')
            next();
        }
    },
    {
        path: '/about',
        name: 'aboutLink',
        component: About,
        children: [{
                path: '/contact',
                name: 'contactLink',
                component: Contact
            },
            {
                path: '/history',
                name: 'historyLink',
                component: History
            },
            {
                path: '/delivery',
                name: 'deliveryLink',
                component: Delivery
            },
            {
                path: '/ordering-guide',
                name: 'orderingGuideLink',
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
    mode: 'history',
    // scrollBehavior(to, from, savedPosition) {
    //     return { x: 0, y: 200 }
    // }
    scrollBehavior(to, from, savedPosition) {
        // if (savedPosition) {
        //     return savedPosition
        // } else {
        //     return { x: 0, y: 0 }
        // }
        if (to.hash) {
            return {
                selector: to.hash
            }
        }
    }
})

// router.beforeEach((to, from, next) => {
//     if (to.path == '/menu') {
//         next()
//     } else {
//         next(false)
//     }
// })

// router.afterEach((to, from) => {
//     alert('After each')
// })

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})