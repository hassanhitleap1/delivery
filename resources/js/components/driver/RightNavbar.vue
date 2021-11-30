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
                    <router-link class="nav-link " :to="{'name':'custmers'}"  exact>
                        <i class="far fa-circle nav-icon"></i>
                        <p>custumer</p>
                    </router-link>
                </li>

            </ul>
        </li>




        <li class="nav-item">
        <li class="nav-link " @click="logout" exact>
            <i class="far fa-circle nav-icon"></i>
            <p>logout</p>
        </li>
        </li>

    </ul>
</template>

<script>
export default {
    name: "RightNavbar"
}
</script>

<style scoped>

</style>
