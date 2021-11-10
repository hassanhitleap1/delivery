let actions = {
    createContry({commit}, contry) {
        commit('CREATE_CONTRY', contry)
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
