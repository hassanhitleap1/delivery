import * as services from "../../../services/areas";
import {chkeckedAuthApi} from "../../../common/jwt.service";

let actions = {
    createArea({commit}, area) {
        commit('CREATE_AREA', area)

    },
    fetchareas({commit}) {
        services.get_all().then(({data})=>{
            commit('FETCH_AREAS', data.data);
        }).catch(({response}) => {
            if(chkeckedAuthApi(response)){
                // services.get_all().then(({data})=>{
                //     commit('FETCH_AREAS', data);
                // })
                return ;
            }
        });
    },
    updateArea({commit}, area) {
        commit('UPDATE_AREA', area)
    },
    deleteArea({commit}, area) {
        commit('DELETE_AREA', area)
    }
}

export default actions;
