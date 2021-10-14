let mutations = {
    create_admin(state, admin) {
        state.admins.unshift(admin)
    },
    fetch_admins(state, admins) {
        return state.admins = admins
    },
    delete_admin(state, driver) {
        let index = state.admins.findIndex(item => item.id === admin.id)
        state.admins.splice(index, 1)
    }

}
export default mutations
