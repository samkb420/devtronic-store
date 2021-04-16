export const state = {
    loggedInUser: JSON.parse(localStorage.getItem('loggedInUser')),
}

export const mutations = {
    SET_CURRENT_USER: (state, newValue) => {
        state.loggedInUser = newValue
        if(newValue) window.localStorage.setItem('loggedInUser', JSON.stringify(newValue))
        else window.localStorage.removeItem('loggedInUser')
    },
}

export const getters = {
    loggedInUser: (state) => state.loggedInUser,
    loggedIn: (state) => !!state.loggedInUser,
    userType: (state) => state.loggedInUser ? state.loggedInUser.type : null,
    apiToken: (state) => state.loggedInUser ? state.loggedInUser.api_token : null,
    roles: (state) => state.loggedInUser ? state.loggedInUser.roles : [],
}

export const actions = {
    setLoggedInUser: ({ commit }, user) => commit('SET_CURRENT_USER', user),
    removeLoggedInUser: ({ commit }) => commit('SET_CURRENT_USER', null),
}

export default {
    state,
    mutations,
    getters,
    actions,
 }