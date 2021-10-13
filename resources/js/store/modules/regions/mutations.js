let mutations = {
    CREATE_REGION(state, region) {
        state.status.unshift(region)
    },
    FETCH_REGIONS(state, regions) {
        return state.regions = regions
    },
    DELETE_REGION(state, regions) {
        let index = state.regions.findIndex(item => item.id === region.id)
        state.status.splice(index, 1)
    }

}
export default mutations
