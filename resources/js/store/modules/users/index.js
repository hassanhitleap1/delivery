import state from '../users/state';
import getters from '../users/getters';
import mutations from '../users/mutations';
import actions from '../users/actions';
let UsersModule ={
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
export  default UsersModule;
