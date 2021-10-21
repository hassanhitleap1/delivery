let actions = {
    create_custmer({commit}, custmer) {
        commit('create_custmer', custmer);
    },
    update_custmer({commit}, admin) {
        commit('update_custmer', admin);
    },
    fetch_custmers({commit}) {
        axios.get('/api/user/custmers')
            .then(res => {
                console.log( res.data)
                commit('fetch_custmers', res.data.data)
            }).catch(err => {
            console.log(err);
        })
    },
    fetch_custmer({commit},id) {
        axios.get('/api/user/custmers/'+id)
            .then(res => {
                commit('fetch_custmer', res.data.data)
            }).catch(err => {
            console.log(err);
        })
    },
    delete_custmer({commit}, custmer) {
        axios.delete(`/api/user/custmers/${custmer.id}`)
            .then(res => {
                commit('delete_custmer', custmer)
            }).catch(err => {
            console.log(err);
        })
    }
}

export default actions;
