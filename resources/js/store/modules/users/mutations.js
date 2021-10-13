let mutations = {
    create_customer(state, customer) {
        state.customers.unshift(customer)
    },
    featch_customers(state, customers) {
        return state.customers = customers
    },
    delete_customer(state, customer) {
        let index = state.customers.findIndex(item => item.id === customer.id)
        state.customers.splice(index, 1)
    }

}
export default mutations
