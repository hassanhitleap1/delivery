let actions = {
    createdriver({commit}, driver) {
        axios.post('/api/driver/drivers', driver)
            .then(res => {
                commit('create_driver', res.data)
            }).catch(err => {
            console.log(err)
        })

    },
    fetchdrivers({commit}) {
        axios.get('/api/driver/drivers')
            .then(res => {
                console.log( res.data)
                commit('fatch_drivers', res.data.data)
            }).catch(err => {
            console.log(err)
        })
    },
    deletedriver({commit}, driver) {
        axios.delete(`/api/driver/drivers/${driver.id}`)
            .then(res => {
                if (res.data === 'ok')
                    commit('delete_driver', driver)
            }).catch(err => {
            console.log(err);
        })
    }
}

export default actions;
