<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <div>
                                <h3 class="card-title float-left">admins</h3>
                                <router-link class="btn btn-primary float-right" :to="{'name':'admins.create'}" >
                                    create users
                                </router-link>
                            </div>

                            <div class="card-tools mt-4">
                                <div class="input-group input-group-sm" style="width: 150px;">
                                    <input type="text" name="table_search" class="form-control float-right" placeholder="Search" v-model="keywords" @keyup="search">

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
                                <tr v-for="(admin,index) in admins.data" :key="index">
                                    <td>{{admin.id}}</td>
                                    <td>{{admin.name}}</td>
                                    <td>{{admin.phone}}</td>
                                    <td>{{admin.email}}</td>
                                    <td class="action">
                                        <router-link class="tag tag-success fas fa-edit"  :to="{'name':'admins.edit',params:{'id':admin.id}}" >
                                        </router-link>
                                        <span class="tag tag-success fas fa-trash-alt" @click="delete_admin(admin)"></span>
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                            <pagination align="center" :data="admins" @pagination-change-page="get_admins"></pagination>
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
import pagination from 'laravel-vue-pagination'
import  * as services from '../../services/admin';
import Swal from 'sweetalert2';
import AWN from "awesome-notifications";

export default {
    name:"users",
    components:{
        pagination
    },
    data(){
        return {
            admins:{
                type:Object,
                default:null
            },
            keywords:null,

        }
    },
    mounted(){
        this.get_admins();
    },
    methods:{
        get_admins(page=1){
            services.get_admins(page ,this.keywords).then(({data})=>{
                this.admins = data
            }).catch((error) => {
                console.log("error",error)
            });
        },
        search(){
            this.get_admins();
        },
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
                    services.delete_admin(admin.id).then( response => {
                        this.get_admins();
                        new AWN().success();
                    }).catch((error) => {
                        console.log("error",error)
                    });
                }
            })

        },
    }
}
</script>

<style scoped>
.pagination{
    margin-bottom: 0;
}
</style>
