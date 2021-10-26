<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <div>
                                <h3 class="card-title float-left">admins</h3>
                                <router-link class="btn btn-primary float-right" :to="{'name':'admins.edit'}" >
                                    create users
                                </router-link>
                            </div>

                            <div class="card-tools mt-4">
                                <div class="input-group input-group-sm" style="width: 150px;">
                                    <input type="text" name="table_search" class="form-control float-right" placeholder="Search">

                                    <div class="input-group-append">
                                        <button type="submit" class="btn btn-default"><i class="fas fa-search"></i></button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body table-responsive p-2">
                            <table class="table table-hover">
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>name</th>
                                    <th>phone</th>
                                    <th>email </th>
                                    <th>action </th>

                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="admin in admins" :key="admin.id">
                                    <td>{{admin.id}}</td>
                                    <td>{{admin.name}}</td>
                                    <td>{{admin.phone}}</td>
                                    <td>{{admin.email}}</td>
                                    

                                    <td class="action">
                                        <router-link class="tag tag-success fas fa-edit" :to="{name:'admins.edit',params:{'id':admin.id}}" >
                                        </router-link>
                                        <span class="tag tag-success fas fa-trash-alt" @click="delete_admin(admin)"></span>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- /.card-body -->
                    </div>
                    <!-- /.card -->
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {mapGetters} from 'vuex';
        import Swal from 'sweetalert2';
    import AWN from "awesome-notifications";
    export default {
        name: "Index",
        mounted() {
            this.$store.dispatch('AdminModule/fetch_admins');
        },
        methods: {
            delete_admin(admin) {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.$store.dispatch('AdminModule/delete_admin',admin);
                        new AWN().success()

                    }
                })

            }
        },
        computed: {
            ...mapGetters('AdminModule', ['admins']),
        }

    }
</script>

<style scoped>

</style>
