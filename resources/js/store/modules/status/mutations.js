let mutations = {
    CREATE_STATU(state, statu) {
        state.status.unshift(statu)
    },
    FETCH_STATUS(state, status) {
        return state.status = status
    },
    UPDATE_STATU(state, statu) {
        let index = state.status.findIndex(item => item.id === statu.id)
        state.status[index]=statu;
    },
    DELETE_STATU(state, statu) {
        let index = state.status.findIndex(item => item.id === statu.id)
        state.status.splice(index, 1)
    }

}
export default mutations
