let actions = {
    createStatu({commit}, statu) {
        axios.post('/api/status', statu)
            .then(res => {
                commit('CREATE_STATU', res.data)
            }).catch(err => {
            console.log(err)
        })

    },
    fetchstatus({commit}) {
        axios.get('/api/status')
            .then(res => {
                console.log( res.data)
                commit('FETCH_STATUS', res.data.data)
            }).catch(err => {
            console.log(err)
        })
    },
    deleteStatu({commit}, statu) {
        axios.delete(`/api/status/${statu.id}`)
            .then(res => {
                if (res.data === 'ok')
                    commit('DELETE_STATU', statu)
            }).catch(err => {
            console.log(err);
        })
    }
}

export default actions;
