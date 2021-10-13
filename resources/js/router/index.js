import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login';
import Register from '../views/Register';
import Index from "../pages/Index";

// import { languages } from '../plugins/i18n';
import store from '../store/index';
Vue.use(VueRouter);

const route =  new VueRouter({
    mode: 'history',
    linkActiveClass: "active",
    // beforeEnter(to, from, next) {
    //     let lang = to.params.lang
    //     if (languages.includes(lang)) {
    //         if (store.state.locale !== lang) {
    //             store.dispatch('changeLocale', lang)
    //         }
    //         return next()
    //     }
    //     return next({ path: store.state.locale })
    // },
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
            path: '/status',
            component:  ()=>import("../views/status/Index"),
            children: [{
                    name: 'status.create',
                    path: 'create',
                    component:  ()=>import("../views/status/Create"),
                }, {
                    path: ':id/edit',
                    name: 'status.update',
                    components:  ()=>import("../views/status/Update"),
                }, {
                    path: 'view',
                    name: 'status.create',
                    component:()=>import("../views/status/Create"),

                }]
            },
        {
            path: '/countries',
            component:  ()=>import("../views/countries/Index"),
            children: [{
                name: 'countries.create',
                path: 'create',
                component:  ()=>import("../views/countries/Create"),
            }, {
                path: ':id/edit',
                name: 'countries.update',
                components:  ()=>import("../views/countries/Update"),
            }, {
                path: 'view',
                name: 'countries.create',
                component:()=>import("../views/countries/Create"),

            }]
        },
        {
            path: '/regions',
            component:  ()=>import("../views/regions/Index"),
            children: [{
                name: 'regions.create',
                path: 'create',
                component:  ()=>import("../views/regions/Create"),
            }, {
                path: ':id/edit',
                name: 'regions.update',
                components:  ()=>import("../views/regions/Update"),
            }, {
                path: 'view',
                name: 'regions.create',
                component:()=>import("../views/regions/Create"),

            }]
        },
        {
            path: '/areas',
            component:  ()=>import("../views/areas/Index"),
            children: [{
                name: 'areas.create',
                path: 'create',
                component:  ()=>import("../views/areas/Create"),
            }, {
                path: ':id/edit',
                name: 'areas.update',
                components:  ()=>import("../views/areas/Update"),
            }, {
                path: 'view',
                name: 'areas.create',
                component:()=>import("../views/areas/Create"),

            }]
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
