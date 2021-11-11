let actions = {
    createContry({commit}, contry) {
        commit('CREATE_CONTRY', contry)
    },
    updateContry({commit}, contry) {
        commit('UPDATE_CONTRY', contry)
    },
    fetchcountries({commit}) {
        axios.get('/api/countries')
            .then(res => {
                console.log("FETCH_COUNTRIES",res.data.data)

                commit('FETCH_COUNTRIES', res.data.data)
            }).catch(err => {
            console.log(err)
        })
    },
    deleteContry({commit}, contry) {
        commit('DELETE_CONTRY', contry)
    }
}

export default actions;
