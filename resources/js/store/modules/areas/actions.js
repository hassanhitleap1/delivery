let actions = {
    createArea({commit}, area) {
        commit('CREATE_AREA', area)

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
    updateArea({commit}, area) {
        commit('UPDATE_AREA', area)
    },
    deleteArea({commit}, area) {
        commit('DELETE_AREA', area)
    }
}

export default actions;
