import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store ({
    state: {
        isLoggedIn: false,
        user: {
            name: '',
            fullName: ''
        },
        tokenId: ''
    },
    mutations: {
        createUserSession (state, userData){
            state.isLoggedIn = true
            state.user.name = userData.name
            state.user.fullName = userData.fullName
            state.tokenId = userData.tokenId
            localStorage.setItem('user', JSON.stringify(state.user))
            localStorage.setItem('tokenId', state.tokenId)
        },
        authLogout (state) {
            state.isLoggedIn = false
            state.user.name = ''
            state.user.fullName = ''
            state.tokenId = ''
            localStorage.removeItem('user')
            localStorage.removeItem('tokenId')
        }
    },
    actions: {
        authorizeUser( { commit }, userData) {
            commit('createUserSession', userData)
        },
        logout({ commit }){
            commit('authLogout')
        }
    },
    getters: {

    }
})