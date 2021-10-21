let actions = {
    create_user({commit}, user) {
        commit('create_user', user);
    },
    update_user({commit}, user) {
        commit('update_user', user);
    },
    fetch_users({commit}) {
        axios.get('/api/user/users')
            .then(res => {
                console.log( res.data)
                commit('fetch_users', res.data.data)
            }).catch(err => {
            console.log(err);
        })
    },
    fetch_user({commit},id) {
        axios.get('/api/user/users/'+id)
            .then(res => {
                commit('fetch_user', res.data.data)
            }).catch(err => {
            console.log(err);
        })
    },
    delete_user({commit}, user) {
        axios.delete(`/api/user/users/${user.id}`)
            .then(res => {
                commit('delete_user', user)
            }).catch(err => {
            console.log(err);
        })
    }
}

export default actions;
