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
        },

        {
            path: '/custmers',
            name: 'users',
            component: ()=>import("../views/custmers/Index"),
        },

        {
            path: '/stats',
            component:  ()=>import("../views/status/Index"),
            children: [{
                name: 'stats.create',
                path: 'create',
                component:  ()=>import("../views/status/Create"),
            }, {
                path: ':id',
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
