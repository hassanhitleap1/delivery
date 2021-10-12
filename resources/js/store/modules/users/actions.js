let actions = {
    createUser({commit}, users) {
        axios.post('/api/users', users)
            .then(res => {
                commit('CREATE_USER', res.data)
            }).catch(err => {
            console.log(err)
        })

    },
    fetchusers({commit}) {
        axios.get('/api/userss')
            .then(res => {
                console.log( res.data)
                commit('FETCH_USERS', res.data.data)
            }).catch(err => {
            console.log(err)
        })
    },
    deleteUser({commit}, users) {
        axios.delete(`/api/userss/${users.id}`)
            .then(res => {
                if (res.data === 'ok')
                    commit('DELETE_USER', users)
            }).catch(err => {
            console.log(err);
        })
    }
}

export default actions;
