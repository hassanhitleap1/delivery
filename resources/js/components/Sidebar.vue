<template>
    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <!-- Brand Logo -->
        <router-link to="#"  class="brand-link" >

            <img :src="`${this.$site_url}/AdminLTE/dist/img/AdminLTELogo.png`" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
                 style="opacity: .8">
            <span class="brand-text font-weight-light">AdminLTE 3</span>
            </router-link>

        <!-- Sidebar -->
        <div class="sidebar">
            <!-- Sidebar user panel (optional) -->
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                    <img :src="`${this.$site_url}/AdminLTE/dist/img/user2-160x160.jpg`" class="img-circle elevation-2" alt="User Image">
                </div>
                <div class="info">
                    <a href="#" class="d-block">Alexander Pierce</a>
                </div>
            </div>

            <!-- Sidebar Menu -->
            <nav class="mt-2">
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
                                <router-link class="nav-link " to="/user/users" exact>
                                    <i class="far fa-circle nav-icon"></i>
                                    <p>user</p>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link " to="/user/custumers" exact>
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
                </ul>
            </nav>
            <!-- /.sidebar-menu -->
        </div>
        <!-- /.sidebar -->
    </aside>

</template>

<script>
    export default {
        name: "Sidebar"
    }
</script>

<style scoped>

</style>
