import Vue from 'vue'
import Vuex from 'vuex'
import CustmerModule from './modules/custmers/index';
import ShipmentModule from './modules/shipments/index';
import StatusModule from './modules/status/index';
import UserModule from './modules/users/index';
import RegionModule from './modules/regions/index';
import ContryModule from './modules/countries/index';
import AreaModule from './modules/areas/index';
import PriceModule from './modules/prices/index';
import DriverModule from './modules/drivers/index';

Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        CustmerModule: CustmerModule,
        ShipmentModule: ShipmentModule,
        StatusModule: StatusModule,
        UserModule: UserModule,
        DriverModule: DriverModule,
        RegionModule:RegionModule,
        ContryModule:ContryModule,
        AreaModule:AreaModule,
        PriceModule:PriceModule,
    }
})
