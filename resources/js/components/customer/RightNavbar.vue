<template>
    <div>
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li class="nav-item">
                <router-link class="nav-link " to="/">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Dashboard</p>
                </router-link>
            </li>

            <li class="nav-item">
                <router-link class="nav-link " to="/shipments" exact>
                    <i class="far fa-circle nav-icon"></i>
                    <p>shipments</p>
                </router-link>
            </li>

            <li class="nav-item">
                <li class="nav-link " @click="logout" >
                    <i class="far fa-circle nav-icon"></i>
                    <p>logout</p>
                </li>
            </li>

        </ul>
    </div>

</template>

<script>
export default {
    name: "RightNavbar"
}
</script>

<style scoped>

</style>
