let actions = {
    createContry({commit}, contry) {
        axios.post('/api/contries', contry)
            .then(res => {
                commit('CREATE_CONTRY', res.data)
            }).catch(err => {
            console.log(err)
        })

    },
    fetchcontries({commit}) {
        axios.get('/api/contries')
            .then(res => {
                console.log( res.data)
                commit('FETCH_CONTRIES', res.data.data)
            }).catch(err => {
            console.log(err)
        })
    },
    deleteContry({commit}, contry) {
        axios.delete(`/api/contries/${contry.id}`)
            .then(res => {
                if (res.data === 'ok')
                    commit('DELETE_CONTRY', contry)
            }).catch(err => {
            console.log(err);
        })
    }
}

export default actions;
