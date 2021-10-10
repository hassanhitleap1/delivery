require('./bootstrap');
window.Vue = require('vue');
import router from "./router";
import App from "./App.vue";
Vue.prototype.$site_url ="http://localhost:8080";
Vue.prototype.$api_url ="http://localhost:8080/api";
import store from './store/index';
const app = new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");



// import Echo from "laravel-echo"
//
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: '627b6a0bb17dace13a6f',
//     cluster: 'mt1',
//     encrypted: true
// });
