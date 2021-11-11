let mutations = {
    CREATE_CONTRY(state, country) {
        state.countries.unshift(country)
    },
    UPDATE_CONTRY(state, country) {
        let index = state.countries.findIndex(item => item.id === country.id)
        state.countries[index]=country;
    },
    FETCH_COUNTRIES(state, countries) {
        return state.countries = countries
    },
    DELETE_CONTRY(state, country) {
        let index = state.countries.findIndex(item => item.id === country.id)
        state.countries.splice(index, 1)
    }

}
export default mutations
