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
            path: '/users',
            name: 'users',
            component: ()=>import("../views/users/Index"),
            children: [{
                name: 'users.create',
                path: 'create',
                component:  ()=>import("../views/users/Create"),
            }, {
                path: ':id/edit',
                name: 'users.update',
                components:  ()=>import("../views/users/Update"),
            }, {
                path: 'view',
                name: 'users.create',
                component:()=>import("../views/users/Create"),

            }]
        },
        {
            path: '/shipments',
            name: 'shipments',
            component: ()=>import("../views/shipments/Index"),
            children: [{
                name: 'shipments.create',
                path: 'create',
                component:  ()=>import("../views/shipments/Create"),
            }, {
                path: ':id/edit',
                name: 'shipments.update',
                components:  ()=>import("../views/shipments/Update"),
            }, {
                path: 'view',
                name: 'shipments.create',
                component:()=>import("../views/shipments/Create"),

            }]
        },

        {
            path: '/custmers',
            name: 'users',
            component: ()=>import("../views/custmers/Index"),
            children: [{
                name: 'custmers.create',
                path: 'create',
                component:  ()=>import("../views/custmers/Create"),
            }, {
                path: ':id/edit',
                name: 'custmers.update',
                components:  ()=>import("../views/custmers/Update"),
            }, {
                path: 'view',
                name: 'custmers.create',
                component:()=>import("../views/custmers/Create"),

            }]
        },

        {
            path: '/stats',
            component:  ()=>import("../views/status/Index"),
            children: [{
                    name: 'stats.create',
                    path: 'create',
                    component:  ()=>import("../views/status/Create"),
                }, {
                    path: ':id/edit',
                    name: 'stats.update',
                    components:  ()=>import("../views/status/Update"),
                }, {
                    path: 'view',
                    name: 'stats.create',
                    component:()=>import("../views/status/Create"),

                }]
            },


        // {
        //     path: '/status',
        //     name: 'status',
        //     component: ()=>import("../views/status/Index"),
        //     children: [
        //         {
        //             path: '/status/create',
        //             component: SstatusCreate,
        //             name:"create_status"
        //         },
        //         {
        //             path: '/status/:id',
        //             component: ()=>import("../views/status/Update"),
        //             name:"update_status"
        //
        //         }
        //    ]
        // },

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
