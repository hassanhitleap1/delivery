// import Vue from 'vue';
// import Vuex from 'vuex';
//
// import auth from './modules/auth';
//
// import createPersistedState from 'vuex-persistedstate';
//
// import _ from 'lodash';
//
// const modules = {
//     auth
// };
//
// Vue.use(Vuex);
//
// export default new Vuex.Store({
//     mutations: {
//         resetState(state) {
//             _.forOwn(modules, (value, key) => {
//                 state[key] = _.cloneDeep(value.state);
//             });
//         },
//     },
//     modules,
//     plugins: [
//         createPersistedState({
//             paths: ['auth'],
//         }),
//     ]
// });

import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import i18n, { selectedLocale } from '../plugins/i18n'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        locale: selectedLocale
    },
    mutations: {
        updateLocale(state, newLocale) {
            state.locale = newLocale
        }
    },
    actions: {
        changeLocale({ commit }, newLocale) {
            i18n.locale = newLocale // important!
            commit('updateLocale', newLocale)
        }
    },
    plugins: [createPersistedState()]
})
