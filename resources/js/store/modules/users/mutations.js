let mutations = {
    create_user(state, user) {
        state.users.unshift(user)
    },
    fatch_users(state, users) {
        return state.users = users
    },
    delete_user(state, user) {
        let index = state.users.findIndex(item => item.id === user.id)
        state.users.splice(index, 1)
    }

}
export default mutations
