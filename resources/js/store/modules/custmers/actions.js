let actions = {
    createcustomer({commit}, customer) {
        axios.post('/api/user/customers', customer)
            .then(res => {
                commit('create_customer', res.data)
            }).catch(err => {
            console.log(err)
        })

    },
    fetchcustomers({commit}) {
        axios.get('/api/user/customers')
            .then(res => {
                console.log( res.data)
                commit('fatch_customers', res.data.data)
            }).catch(err => {
            console.log(err)
        })
    },
    deletecustomer({commit}, customer) {
        axios.delete(`/api//user/customers/${customer.id}`)
            .then(res => {
                if (res.data === 'ok')
                    commit('delete_customer', customer)
            }).catch(err => {
            console.log(err);
        })
    }
}

export default actions;
