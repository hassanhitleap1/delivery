let actions = {
    create_driver({commit}, driver) {
        commit('create_driver', driver);
    },
    update_driver({commit}, driver) {
        commit('update_driver', driver);
    },
    fetch_drivers({commit}) {
        axios.get('/api/user/drivers')
            .then(res => {
                console.log( res.data)
                commit('fetch_drivers', res.data.data)
            }).catch(err => {
            console.log(err);
        })
    },
    fetch_driver({commit},id) {
        axios.get('/api/user/drivers/'+id)
            .then(res => {
                commit('fetch_driver', res.data.data)
            }).catch(err => {
            console.log(err);
        })
    },
    delete_driver({commit}, driver) {
        axios.delete(`/api/user/drivers/${driver.id}`)
            .then(res => {
                commit('delete_driver', driver)
            }).catch(err => {
            console.log(err);
        })
    }
}

export default actions;
