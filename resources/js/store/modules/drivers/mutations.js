let mutations = {
    create_driver(state, driver) {
        state.drivers.unshift(driver)
    },
    featch_drivers(state, drivers) {
        return state.drivers = drivers
    },
    delete_driver(state, driver) {
        let index = state.drivers.findIndex(item => item.id === driver.id)
        state.drivers.splice(index, 1)
    }

}
export default mutations
