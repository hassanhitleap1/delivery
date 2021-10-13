let actions = {
    createContry({commit}, contry) {
        axios.post('/api/countries', contry)
            .then(res => {
                commit('CREATE_CONTRY', res.data)
            }).catch(err => {
            console.log(err)
        })

    },
    fetchcountries({commit}) {
        axios.get('/api/countries')
            .then(res => {
                console.log( res.data)
                commit('FETCH_COUNTRIES', res.data.data)
            }).catch(err => {
            console.log(err)
        })
    },
    deleteContry({commit}, contry) {
        axios.delete(`/api/countries/${contry.id}`)
            .then(res => {
                if (res.data === 'ok')
                    commit('DELETE_CONTRY', contry)
            }).catch(err => {
            console.log(err);
        })
    }
}

export default actions;
