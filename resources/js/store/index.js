import Vue from 'vue'
import Vuex from 'vuex'
import CustmerModule from './modules/custmers/index';
import ShipmentModule from './modules/shipments/index';
import StatusModule from './modules/status/index';
import UsersModule from './modules/users/index';
import RegionModule from './modules/regions/index';
import ContryModule from './modules/countries/index';
import AreaModule from './modules/areas/index';
import PriceModule from './modules/prices/index';
import DriversModule from './modules/drivers/index';

import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import state from "./state";

Vue.use(Vuex);




export default new Vuex.Store({
    modules: {
        CustmerModule: CustmerModule,
        ShipmentModule: ShipmentModule,
        StatusModule: StatusModule,
        UsersModule: UsersModule,
        DriversModule: DriversModule,
        RegionModule:RegionModule,
        ContryModule:ContryModule,
        AreaModule:AreaModule,
        PriceModule:PriceModule
    },
    state,
    mutations,
    getters,
    actions
})
