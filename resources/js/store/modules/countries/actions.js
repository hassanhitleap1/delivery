import * as services from "../../../services/countries";
import {chkeckedAuthApi} from "../../../common/jwt.service";

let actions = {
    createContry({commit}, contry) {
        commit('CREATE_CONTRY', contry)
    },
    updateContry({commit}, contry) {
        commit('UPDATE_CONTRY', contry)
    },
    fetchcountries({commit}) {
        services.get_all().then(({data})=>{
            commit('FETCH_COUNTRIES', data)
        }).catch(({response}) => {
            if(chkeckedAuthApi(response)){
                services.get_all().then(({data})=>{
                    commit('FETCH_COUNTRIES', data)
                });
            }
        });
    },
    deleteContry({commit}, contry) {
        commit('DELETE_CONTRY', contry)
    }
}

export default actions;
