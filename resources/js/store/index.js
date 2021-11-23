import Vue from 'vue'
import Vuex from 'vuex'
import StatusModule from './modules/status/index';
import RegionModule from './modules/regions/index';
import ContryModule from './modules/countries/index';
import AreaModule from './modules/areas/index';
import PriceModule from './modules/prices/index';


Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        StatusModule: StatusModule,
        RegionModule:RegionModule,
        ContryModule:ContryModule,
        AreaModule:AreaModule,
        PriceModule:PriceModule,
    }
})
