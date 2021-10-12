let mutations = {
    CREATE_AREA(state, area) {
        state.areas.unshift(area)
    },
    FETCH_AREAS(state, areas) {
        return state.areas = areas
    },
    DELETE_AREA(state, area) {
        let index = state.areas.findIndex(item => item.id === area.id)
        state.areas.splice(index, 1)
    }

}
export default mutations
