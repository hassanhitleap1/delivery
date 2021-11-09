import  * as services from '../../../services/status';
let actions = {
    createStatu({commit}, statu) {
        commit('CREATE_STATU', statu)
    },
    updateStatu({commit}, statu) {
        commit('UPDATE_STATU', statu)
    },
    fetchstatus({commit}) {
        services.get_all().then(res => {
            commit('FETCH_STATUS', res.data.data)
        }).catch(err => {
                console.log(err)
        })
    },
    deleteStatu({commit}, statu) {
        services._delete(statu.id).then(res => {
            commit('DELETE_STATU', statu)
        }).catch(err => {
            console.log(err)
        })
    }
}
export default actions;
