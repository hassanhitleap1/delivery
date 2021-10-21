let mutations = {
    create_driver(state, driver) {
        state.drivers.unshift(driver)
    },
    fetch_drivers(state, drivers) {
        return state.drivers = drivers
    },

    update_driver(state, driver) {
        let index =state.drivers.findIndex(item => item.id === driver.id);
        state.drivers[index]=drivers
        return  driver
    },

    fetch_driver(state, driver) {
        return state.driver = driver
    },
    delete_driver(state, driver) {
        let index = state.drivers.findIndex(item => item.id === driver.id)
        state.drivers.splice(index, 1)
    }

}
export default mutations
