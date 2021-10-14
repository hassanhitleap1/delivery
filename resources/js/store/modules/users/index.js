import state from '../users/state';
import getters from '../users/getters';
import mutations from '../users/mutations';
import actions from '../users/actions';
let UserModule ={
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
export  default UserModule;
