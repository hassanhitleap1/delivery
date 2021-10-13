let actions = {
    createuser({commit}, user) {
        axios.post('/api/user/users', user)
            .then(res => {
                commit('create_user', res.data)
            }).catch(err => {
            console.log(err)
        })

    },
    fetchusers({commit}) {
        axios.get('/api/user/users')
            .then(res => {
                console.log( res.data)
                commit('fatch_users', res.data.data)
            }).catch(err => {
            console.log(err)
        })
    },
    deleteuser({commit}, user) {
        axios.delete(`/api/user/users/${user.id}`)
            .then(res => {
                if (res.data === 'ok')
                    commit('delete_user', user)
            }).catch(err => {
            console.log(err);
        })
    }
}

export default actions;
