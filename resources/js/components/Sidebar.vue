<template>
    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <!-- Brand Logo -->
        <router-link to="#"  class="brand-link" >

            <img :src="`${this.$site_url}/AdminLTE/dist/img/AdminLTELogo.png`" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
                 style="opacity: .8">
            <span class="brand-text font-weight-light">{{getUser.name}}</span>
            </router-link>

        <!-- Sidebar -->
        <div class="sidebar">
            <!-- Sidebar user panel (optional) -->
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                    <img :src="`${this.$site_url}/AdminLTE/dist/img/user2-160x160.jpg`" class="img-circle elevation-2" alt="User Image">
                </div>
                <div class="info">
                    <a href="#" class="d-block">{{getUser.name}}</a>
                </div>
            </div>

            <!-- Sidebar Menu -->
            <nav class="mt-2">
              <AdminRightNavbar v-if="true" />
                <DriverRightNavbar v-else-if="true" />
                <DriverRightNavbar v-else />
            </nav>
            <!-- /.sidebar-menu -->
        </div>
        <!-- /.sidebar -->
    </aside>

</template>

<script>
    import  AdminRightNavbar from "./admin/RightNavbar";
    import  DriverRightNavbar from "./driver/RightNavbar";
    import  CustomerRightNavbar from "./customer/RightNavbar";
    import {getUser} from "../common/jwt.service"
    export default {
        name: "Sidebar",
        components: {AdminRightNavbar,DriverRightNavbar,CustomerRightNavbar},
        methods:{
            logout (){
                localStorage.removeItem("expires_in");
                localStorage.removeItem("token_type");
                  localStorage.removeItem("token");
                  this.$router.push({ name: 'login' });
            }
        }
    }
</script>

<style scoped>

</style>
