import state from '../drivers/state';
import getters from '../drivers/getters';
import mutations from '../drivers/mutations';
import actions from '../drivers/actions';
let DriversModule  ={
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
export  default DriversModule;
