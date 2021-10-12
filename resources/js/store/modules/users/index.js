import state from '../status/state';
import getters from '../status/getters';
import mutations from '../status/mutations';
import actions from '../status/actions';
let UsersModule ={
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
export  default UsersModule;
