let mutations = {
    create_user(state, user) {
        state.users.unshift(user)
    },
    fetch_users(state, users) {
        return state.users = users
    },

    update_user(state, user) {
        let index =state.users.findIndex(item => item.id === user.id);
        state.users[index]=users
        return  user
    },

    fetch_user(state, user) {
        return state.user = user
    },
    delete_user(state, user) {
        let index = state.users.findIndex(item => item.id === user.id)
        state.users.splice(index, 1)
    }

}
export default mutations
