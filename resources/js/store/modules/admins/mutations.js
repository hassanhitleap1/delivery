let mutations = {
    create_admin(state, admin) {
        state.admins.unshift(admin)
    },
    fetch_admins(state, admins) {
        return state.admins = admins
    },

    update_admin(state, admin) {

        let index =state.admins.findIndex(item => item.id === admin.id);
        console.log("state.admins",state.admins[index])
        state.admins[index]=admins

    },

    fetch_admin(state, admin) {
        return state.admin = admin
    },
    delete_admin(state, admin) {
        let index = state.admins.findIndex(item => item.id === admin.id)
        state.admins.splice(index, 1)
    }

}
export default mutations
