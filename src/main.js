import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import { store } from './store/store'
import App from './App.vue'
import Accounting from 'accounting-js'

Vue.use(VueRouter)

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

Vue.filter('currency', function(val) {
    return Accounting.formatMoney(val)
})


new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})