import Vue from 'vue';
import VueRouter from 'vue-router';

// import store from '../store'

import Login from '../views/Login';
import Register from '../views/Register';
import Index from "../pages/Index";

Vue.use(VueRouter);

const route =  new VueRouter({
    mode: 'history',
    linkActiveClass: "active",
    routes: [
        {
            path: '/',
            name: 'home',
            component: Index,
            meta: {
                requiresAuth: false,
                hideForAuth: false,
            }
        },
        {
            path: '/',
            name: 'status',
            component: ()=>import("../views/status/Index"),
            children: [
                {
                    path: 'create',
                    component: ()=>import("../views/status/Create"),
                    name:"create_status"
                },
                {
                    path: ':id',
                    component: ()=>import("../views/status/Update"),
                    name:"" +
                        "update_status"
                }
           ]
        },

        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                requiresAuth: false,
                hideForAuth: true,
            }
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
            meta: {
                requiresAuth: false,
                hideForAuth: true,
            }
        }
    ]
});


// router.beforeEach((to, from, next) => {
//     if(to.meta.requiresAuth && !store.getters.isAuthenticated){
//         next('/login');
//     } else if(to.meta.hideForAuth && store.getters.isAuthenticated){
//         next('/');
//     } else {
//         next();
//     }
// });



// router.beforeEach((to, from, next) =>
//     Promise.all([store.dispatch("auth/checkAuth")]).then(next)
// );


export default route;
