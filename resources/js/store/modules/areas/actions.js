let actions = {
    createArea({commit}, area) {
        axios.post('/api/areas', area)
            .then(res => {
                commit('CREATE_AREA', res.data)
            }).catch(err => {
            console.log(err)
        })

    },
    fetchareas({commit}) {
        axios.get('/api/areas')
            .then(res => {
                console.log( res.data)
                commit('FETCH_AREAS', res.data.data)
            }).catch(err => {
            console.log(err)
        })
    },
    deleteArea({commit}, area) {
        axios.delete(`/api/areas/${area.id}`)
            .then(res => {
                if (res.data === 'ok')
                    commit('DELETE_AREA', area)
            }).catch(err => {
            console.log(err);
        })
    }
}

export default actions;
