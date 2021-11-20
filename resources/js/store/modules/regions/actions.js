import {chkeckedAuthApi} from "../../../common/jwt.service";
import * as services from "../../../services/regions";

let actions = {
    createregion({commit}, statu) {
        axios.post('/api/regions', statu)
            .then(res => {
                commit('CREATE_REGION', res.data)
            }).catch(err => {
            console.log(err)
        })

    },
    updateRegion({commit}, region) {
        commit('UPDATE_REGION', region)
    },
    fetchregions({commit}) {
        services.get_all().then(({data})=>{
            commit('FETCH_REGIONS', data.data);
        }).catch(({response}) => {
            if(chkeckedAuthApi(response)){
                // services.get_all().then(({data})=>{
                //     commit('FETCH_REGIONS', data);
                // })
                return ;
            }
        });

    },
    deleteregion({commit}, region) {
        axios.delete(`/api/regions/${region.id}`)
            .then(res => {
                if (res.data === 'ok')
                    commit('DELETE_REGION', region)
            }).catch(err => {
            console.log(err);
        })
    }
}

export default actions;
