let actions = {
    create_shipment({commit}, shipment) {
        axios.post('/api/shipment', shipment)
            .then(res => {
                commit('create_shipment', res.data)
            }).catch(err => {
            console.log(err)
        })

    },
    fetch_shipments({commit}) {
        axios.get('/api/shipments')
            .then(res => {
                console.log( res.data)
                commit('fatch_shipments', res.data.data)
            }).catch(err => {
            console.log(err)
        })
    },
    delete_shipment({commit}, user) {
        axios.delete(`/api/shipments/${shipment.id}`)
            .then(res => {
                if (res.data === 'ok')
                    commit('delete_shipment', shipment)
            }).catch(err => {
            console.log(err);
        })
    }
}

export default actions;
