let mutations = {
    create_custmer(state, custmer) {
        state.custmer.unshift(custmer)
    },
    fetch_custmers(state, custmers) {
        return state.custmers = custmers
    },

    update_custmer(state, custmer) {
        let index =state.custmers.findIndex(item => item.id === custmer.id);
        state.custmers[index]=custmers
        return  admin
    },

    fetch_custmer(state, admin) {
        return state.admin = admin
    },
    delete_custmer(state, custmer) {
        let index = state.custmers.findIndex(item => item.id === custmer.id)
        state.custmers.splice(index, 1)
    }

}
export default mutations
