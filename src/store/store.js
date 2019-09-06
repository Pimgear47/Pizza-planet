import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'
// import * as mutations from './mutations'
import menus from './modules/menus'
import orders from './modules/orders'
import users from './modules/users'

Vue.use(Vuex);

export const store = new Vuex.Store({
    // state: {

    // },
    // getters,
    // mutations,
    // actions


    // actions: { //แยกไปใช้ที่ actions.js แทน
    //     // setUser(context, user) {
    //     //     context.commit('userStatus', user)
    //     // }
    //     setUser({ commit }, user) { 
    //         commit('userStatus', user)
    //     }
    // }


    modules: {
        users,
        menus,
        orders
    }
})