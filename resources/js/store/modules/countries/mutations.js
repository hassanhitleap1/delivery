let mutations = {
    CREATE_CONTRY(state, statu) {
        state.countries.unshift(statu)
    },
    FETCH_COUNTRIES(state, countries) {
        return state.countries = countries
    },
    DELETE_CONTRY(state, countrY) {
        let index = state.countries.findIndex(item => item.id === statu.id)
        state.countries.splice(index, 1)
    }

}
export default mutations
