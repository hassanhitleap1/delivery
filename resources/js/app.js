

require('./bootstrap');

window.Vue = require('vue');

import App from "./App.vue";

const app = new Vue({
    render: (h) => h(App),
    // store,
}).$mount("#app");



// import Echo from "laravel-echo"
//
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: '627b6a0bb17dace13a6f',
//     cluster: 'mt1',
//     encrypted: true
// });
