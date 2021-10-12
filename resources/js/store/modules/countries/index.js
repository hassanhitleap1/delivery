// import Vue from 'vue'
// import Vuex from 'vuex'
import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';


const ContryModule ={
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
export  default ContryModule;
