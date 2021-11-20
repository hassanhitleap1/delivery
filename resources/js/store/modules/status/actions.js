import  * as services from '../../../services/status';
import {chkeckedAuthApi} from "../../../common/jwt.service";
let actions = {
    createStatu({commit}, statu) {
        commit('CREATE_STATU', statu)
    },
    updateStatu({commit}, statu) {
        commit('UPDATE_STATU', statu)
    },
    fetchstatus({commit}) {
        services.get_all().then(({data})=>{
            commit('FETCH_STATUS', data.data)
        }).catch(({response}) => {
            if(chkeckedAuthApi(response)){
                services.get_all().then(({data})=>{
                    commit('FETCH_STATUS', data)
                })
                return ;
            }
        });
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
