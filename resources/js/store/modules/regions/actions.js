let actions = {
    createregion({commit}, statu) {
        axios.post('/api/regions', statu)
            .then(res => {
                commit('CREATE_REGION', res.data)
            }).catch(err => {
            console.log(err)
        })

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
    deleteregion({commit}, statu) {
        axios.delete(`/api/regions/${statu.id}`)
            .then(res => {
                if (res.data === 'ok')
                    commit('DELETE_REGION', region)
            }).catch(err => {
            console.log(err);
        })
    }
}

export default actions;
