let mutations = {
    CREATE_REGION(state, region) {
        state.status.unshift(region)
    },
    FETCH_REGIONS(state, regions) {
        return state.regions = regions
    },
    UPDATE_REGION(state, region) {
        let index = state.regions.findIndex(item => item.id === region.id)
        state.regions[index]=region;
    },
    DELETE_REGION(state, regions) {
        let index = state.regions.findIndex(item => item.id === region.id)
        state.regions.splice(index, 1)
    }

}
export default mutations
