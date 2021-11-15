import Vue from 'vue';
import VueRouter from 'vue-router';

function loggedIn(){
    return localStorage.getItem('token')
}

Vue.use(VueRouter);

const route =  new VueRouter({
    mode: 'history',
    linkActiveClass: "active",
    routes: [
        {
            path: '/',
            name: 'home',
            component: ()=>import("../views/Home"),
        },
        {
            path: '/shipments',
            name: 'shipments',
            component: ()=>import("../views/shipments/Index"),
        },
        {
            name: 'shipments.create',
            path: 'shipments/create',
            component:  ()=>import("../views/shipments/Create"),
        },
        {
            path: 'shipments/:id/edit',
            name: 'shipments.update',
            components:  ()=>import("../views/shipments/Update"),
        },
        {
            path: 'shipments/view',
            name: 'shipments.view',
            component:()=>import("../views/shipments/View"),
        },
        {
            path: '/user/drivers',
            name: 'drivers',
            component: ()=>import("../views/drivers/Index"),

        },
        {
            path: '/user/drivers',
            name: 'drivers.index',
            component: ()=>import("../views/drivers/Index"),
        },
        {
            name: 'drivers.create',
            path: '/user/drivers/create',
            component:  ()=>import("../views/drivers/Create"),
        },
        {
            name: 'drivers.edit',
            path: '/user/drivers/:id/edit',
            component:  ()=>import("../views/drivers/Edit"),
        },

        {
            path: '/user/users',
            name: 'users',
            component: ()=>import("../views/users/Index"),

        },
        {
            path: '/user/users',
            name: 'users.index',
            component: ()=>import("../views/users/Index"),
        },
        {
            name: 'users.create',
            path: '/user/users/create',
            component:  ()=>import("../views/users/Create"),
        },
        {
            name: 'users.edit',
            path: '/user/users/:id/edit',
            component:  ()=>import("../views/users/Edit"),
        },


        {
            path: '/user/admins',
            name: 'admins',
            component: ()=>import("../views/admins/Index"),
            meta: {requiresAuth: true}

        },
        {
            path: '/user/admins',
            name: 'admins.index',
            component: ()=>import("../views/admins/Index"),
            meta: {requiresAuth: true}

        },
        {
            name: 'admins.create',
            path: '/user/admins/create',
            component:  ()=>import("../views/admins/Create"),
            meta: {requiresAuth: true}
        },
        {
            name: 'admins.edit',
            path: '/user/admins/:id/edit',
            component:  ()=>import("../views/admins/Edit"),
            meta: {requiresAuth: true}
        },


        {
            path: '/user/custmers',
            name: 'custmers',
            component: ()=>import("../views/custmers/Index"),
            meta: {requiresAuth: true}

        },
        {
            path: '/user/custmers',
            name: 'custmers.index',
            component: ()=>import("../views/custmers/Index"),
            meta: {requiresAuth: true}

        },
        {
            name: 'custmers.create',
            path: '/user/custmers/create',
            component:  ()=>import("../views/custmers/Create"),
            meta: {requiresAuth: true}
        },
        {
            name: 'custmers.edit',
            path: '/user/custmers/:id/edit',
            component:  ()=>import("../views/custmers/Edit"),
            meta: {requiresAuth: true}
        },

        {
            path: '/status',
            component:  ()=>import("../views/status/Index"),
            name:'status',
            meta: {requiresAuth: true}
        },
        {
            name: 'status.create',
            path: '/status/create',
            component:  ()=>import("../views/status/Create"),
            meta: {requiresAuth: true}
        },

        {
            name: 'status.edit',
            path: '/status/:id/edit',
            component:  ()=>import("../views/status/Edit"),
            meta: {requiresAuth: true}
        },

        {
            path: '/countries',
            component:  ()=>import("../views/countries/Index"),
            name:'countries',
            meta: {requiresAuth: true}
        },
        {
            name: 'countries.create',
            path: '/countries/create',
            component:  ()=>import("../views/countries/Create"),
            meta: {requiresAuth: true}
        },
        {
            name: 'countries.edit',
            path: '/countries/:id/edit',
            component:  ()=>import("../views/countries/Edit"),
            meta: {requiresAuth: true}
        },
        {
            path: '/regions',
            component:  ()=>import("../views/regions/Index"),
            name:'regions',
            meta: {requiresAuth: true}
        },
        {
            name: 'regions.create',
            path: '/regions/create',
            component:  ()=>import("../views/regions/Create"),
            meta: {requiresAuth: true}
        },

        {
            name: 'regions.edit',
            path: '/regions/:id/edit',
            component:  ()=>import("../views/regions/Edit"),
            meta: {requiresAuth: true}
        },
        {
            path: '/areas',
            component:  ()=>import("../views/areas/Index"),
            name:'areas',
            meta: {requiresAuth: true}
        },
        {
            name: 'areas.create',
            path: '/areas/create',
            component:  ()=>import("../views/areas/Create"),
            meta: {requiresAuth: true}
        },
        {
            name: 'areas.edit',
            path: '/areas/:id/edit',
            component:  ()=>import("../views/areas/Edit"),
            meta: {requiresAuth: true}
        },
        {
            path: 'areas/view',
            name: 'areas.create',
            component:()=>import("../views/areas/View"),
            meta: {requiresAuth: true}
        },
        {
            path: 'login',
            name: 'login',
            component:()=>import("../views/Login"),
        },
        {
            path: 'register',
            name: 'register',
            component:()=>import("../views/Register"),
            meta: {guest: true}


        }
    ]
});

route.beforeEach((to, from, next) => {

    if (to.matched.some(record => record.meta.requiresAuth)) {

        if (!loggedIn()) {
            next({
                name: 'login',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else if(to.matched.some(record => record.meta.guest)) {
        if (loggedIn()) {
            next({
                path: '/',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next() // make sure to always call next()!
    }
});
export default route;
