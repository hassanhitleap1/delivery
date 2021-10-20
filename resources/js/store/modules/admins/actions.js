let actions = {
    create_admin({commit}, admin) {
        axios.post('/api/user/admins', admin)
            .then(res => {
                commit('create_admin', res.data);
                return res;
            }).catch(err => {
                console.log(err);
            })

    },
    fetch_admins({commit}) {
        axios.get('/api/user/admins')
            .then(res => {
                console.log( res.data)
                commit('fetch_admins', res.data.data)
            }).catch(err => {
            console.log(err);
        })
    },
    delete_admin({commit}, admin) {
        axios.delete(`/api/user/admins/${admin.id}`)
            .then(res => {
                if (res.data === 'ok')
                    commit('delete_admin', admin)
            }).catch(err => {
            console.log(err);
        })
    }
}

export default actions;
