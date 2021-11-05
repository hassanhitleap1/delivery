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
            meta: {
                auth: true
            }

        },
        {
            name: 'admins.create',
            path: '/user/admins/create',
            component:  ()=>import("../views/admins/Create"),
            meta: {
                auth: true
            }
        },
        {
            name: 'admins.edit',
            path: '/user/admins/:id/edit',
            component:  ()=>import("../views/admins/Edit"),
            meta: {
                auth: true
            }
        },


        {
            path: '/user/custmers',
            name: 'custmers',
            component: ()=>import("../views/custmers/Index"),
            meta: {
                auth: true
            }

        },
        {
            path: '/user/custmers',
            name: 'custmers.index',
            component: ()=>import("../views/custmers/Index"),
            meta: {
                auth: true
            }

        },
        {
            name: 'custmers.create',
            path: '/user/custmers/create',
            component:  ()=>import("../views/custmers/Create"),
            meta: {
                auth: true
            }
        },
        {
            name: 'custmers.edit',
            path: '/user/custmers/:id/edit',
            component:  ()=>import("../views/custmers/Edit"),
            meta: {
                auth: true
            }
        },

        {
            path: '/status',
            component:  ()=>import("../views/status/Index"),
            name:'status',
            meta: {
                auth: true
            }
        },
        {
            name: 'status.create',
            path: 'status/create',
            component:  ()=>import("../views/status/Create"),
            meta: {
                auth: true
            }
        },
        {
            path: 'status/:id/edit',
            name: 'status.update',
            components:  ()=>import("../views/status/Update"),
            meta: {
                auth: true
            }
        },
        {
            path: 'status/view',
            name: 'status.create',
            component:()=>import("../views/status/View"),
            meta: {
                auth: true
            }

        },
        {
            path: '/countries',
            component:  ()=>import("../views/countries/Index"),
            name:'countries',
            meta: {
                auth: true
            }
        },
        {
            name: 'countries.create',
            path: 'countries/create',
            component:  ()=>import("../views/countries/Create"),
        },
        {
            path: 'countries/:id/edit',
            name: 'countries.update',
            components:  ()=>import("../views/countries/Update"),
        },
        {
            path: 'countries/view',
            name: 'countries.view',
            component:()=>import("../views/countries/View"),
        },
        {
            path: '/regions',
            component:  ()=>import("../views/regions/Index"),
            name:'regions',
        },
        {
            name: 'regions.create',
            path: 'create',
            component:  ()=>import("../views/regions/Create"),
        },
        {
            path: 'regions/:id/edit',
            name: 'regions.update',
            components:  ()=>import("../views/regions/Update"),
        },
        {
            path: 'regions/view',
            name: 'regions.create',
            component:()=>import("../views/regions/View"),
        },
        {
            path: '/areas',
            component:  ()=>import("../views/areas/Index"),
            name:'areas'
        },
        {
            name: 'areas.create',
            path: 'areas/create',
            component:  ()=>import("../views/areas/Create"),
        },
        {
            path: 'areas/:id/edit',
            name: 'areas.update',
            components:  ()=>import("../views/areas/Update"),
        },
        {
            path: 'areas/view',
            name: 'areas.create',
            component:()=>import("../views/areas/View"),
        },
        {
            path: 'login',
            name: 'login',
            component:()=>import("../views/Login"),
            // meta: {guest: true}
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
        // this route requires auth, check if logged in
        // if not, redirect to login page.
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
