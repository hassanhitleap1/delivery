<template>
    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        <li class="nav-item">
            <router-link class="nav-link " to="/">
                <i class="far fa-circle nav-icon"></i>
                <p>Dashboard</p>
            </router-link>
        </li>
        <li class="nav-item has-treeview">

            <a href="#" class="nav-link">
                <i class="nav-icon fas fa-copy"></i>
                <p>
                    users
                    <i class="fas fa-angle-left right"></i>

                </p>
            </a>
            <ul class="nav nav-treeview">

                <li class="nav-item">
                    <router-link class="nav-link " :to="{name:'admins'}" exact>
                        <i class="far fa-circle nav-icon"></i>
                        <p>admins</p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link " :to="{'name':'users'}" exact>
                        <i class="far fa-circle nav-icon"></i>
                        <p>user</p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link " :to="{'name':'custmers'}"  exact>
                        <i class="far fa-circle nav-icon"></i>
                        <p>custumer</p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link " to="/user/drivers" exact>
                        <i class="far fa-circle nav-icon"></i>
                        <p>drivers</p>
                    </router-link>
                </li>
            </ul>
        </li>
        <li class="nav-item">

            <router-link class="nav-link " to="/status">
                <i class="far fa-circle nav-icon"></i>
                <p>status</p>
            </router-link>
        </li>

        <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
                <i class="nav-icon fas fa-chart-pie"></i>
                <p>
                    canteries and aras
                    <i class="right fas fa-angle-left"></i>
                </p>
            </a>
            <ul class="nav nav-treeview">

                <li class="nav-item">
                    <router-link class="nav-link " to="/countries">
                        <i class="far fa-circle nav-icon"></i>
                        <p>countries</p>
                    </router-link>
                </li>

                <li class="nav-item">
                    <router-link class="nav-link " to="/regions">
                        <i class="far fa-circle nav-icon"></i>
                        <p>regions</p>
                    </router-link>
                </li>

                <li class="nav-item">
                    <router-link class="nav-link " to="/areas">
                        <i class="far fa-circle nav-icon"></i>
                        <p>areas</p>
                    </router-link>
                </li>


            </ul>
        </li>
        <li class="nav-item">
            <router-link class="nav-link " to="/shipments" exact>
                <i class="far fa-circle nav-icon"></i>
                <p>shipments</p>
            </router-link>
        </li>

        <li class="nav-item">
            <a class="nav-link " @click.prevent="logout()" >
                <i class="far fa-circle nav-icon"></i>
                <p>logout</p>
            </a>
        </li>
    </ul>
</template>

<script>
   import auth from "../common/jwt.service"
export default {
    name: "RightNavbar",
     methods:{
            logout (){
                auth.logout()
            }
        }
}
</script>

