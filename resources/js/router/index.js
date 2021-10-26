import Vue from 'vue';
import VueRouter from 'vue-router';

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
            path: 'user/users',
            name: 'users',
            component: ()=>import("../views/users/Index"),

        },
        {
            name: 'users.create',
            path: 'user/users/create',
            component:  ()=>import("../views/users/Create"),
        },
        {
            path: 'users/:id/edit',
            name: 'users.update',
            components:  ()=>import("../views/users/Update"),
        },
        {
            path: 'user/users/view',
            name: 'users.create',
            component:()=>import("../views/users/View"),
        },
        {
            path: '/user/admins',
            name: 'admins',
            component: ()=>import("../views/admins/Index"),

        },
        {
            name: 'admins.create',
            path: '/user/admins/create',
            component:  ()=>import("../views/admins/Create"),
        },
        {
            name: 'admins.edit',
            path: '/user/admins/:id/edit',
            component:  ()=>import("../views/admins/Edit"),
        },

        {
            path: '/user/custmers',
            name: 'custmers',
            component: ()=>import("../views/custmers/Index"),
        },
        {
            name: 'custmers.create',
            path: '/user/custmers/create',
            component:  ()=>import("../views/custmers/Create"),
        },
        {
            path: '/user/custmers/:id/edit',
            name: 'custmers.update',
            components:  ()=>import("../views/custmers/Update"),
        },
        {
            path: '/user/custmers/view',
            name: 'custmers.create',
            component:()=>import("../views/custmers/View"),

        },
        {
            path: '/status',
            component:  ()=>import("../views/status/Index"),
            name:'status'
        },
        {
            name: 'status.create',
            path: 'status/create',
            component:  ()=>import("../views/status/Create"),
        },
        {
            path: 'status/:id/edit',
            name: 'status.update',
            components:  ()=>import("../views/status/Update"),
        },
        {
            path: 'status/view',
            name: 'status.create',
            component:()=>import("../views/status/View"),

        },
        {
            path: '/countries',
            component:  ()=>import("../views/countries/Index"),
            name:'countries'
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

        }
    ]
});



export default route;
