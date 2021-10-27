<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <div>
                                <h3 class="card-title float-left">users</h3>
                                <router-link class="btn btn-primary float-right" :to="{'name':'users.create'}" >
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
                                <tr v-for="user in users" :key="user.id">
                                    <td>{{user.id}}</td>
                                    <td>{{user.name}}</td>
                                    <td>{{user.phone}}</td>
                                    <td>{{user.email}}</td>


                                    <td class="action">
                                        <router-link class="tag tag-success fas fa-edit"  :to="{'name':'users.edit',params:{'id':user.id}}" >
                                        </router-link>
                                        <span class="tag tag-success fas fa-trash-alt" @click="_delete(user)"></span>
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
    import  * as services from '../../services/users';
    import Swal from 'sweetalert2';
    import AWN from "awesome-notifications";
    export default {
        name: "Index",
        data(){
            return {
                users: [],
            }
        },
        mounted() {
            this.get_all()
        },
        methods: {
            _delete(user) {
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
                        services.delete_user(user.id).then( response => {
                            this.get_all();
                            new AWN().success();
                        }).catch((error) => {
                            console.log("error",error)
                        });
                    }
                })

            },
            get_all(){
                services.get_all().then( response => {
                    this.users =response.data.data;
                }).catch((error) => {
                    console.log("error",error)
                });
            }

        }

    }
</script>

<style scoped>

</style>
