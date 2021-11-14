let actions = {
    createregion({commit}, statu) {
        axios.post('/api/regions', statu)
            .then(res => {
                commit('CREATE_REGION', res.data)
            }).catch(err => {
            console.log(err)
        })

    },
    updateRegion({commit}, region) {
        commit('UPDATE_REGION', region)
    },
    fetchregions({commit}) {
        axios.get('/api/regions')
            .then(res => {
                console.log(res.data.data)
                commit('FETCH_REGIONS', res.data.data);

            }).catch(err => {
            console.log(err)
        })
    },
    deleteregion({commit}, region) {
        axios.delete(`/api/regions/${region.id}`)
            .then(res => {
                if (res.data === 'ok')
                    commit('DELETE_REGION', region)
            }).catch(err => {
            console.log(err);
        })
    }
}

export default actions;
