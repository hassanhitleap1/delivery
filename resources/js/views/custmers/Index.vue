<template>
<Layout name="LayoutDefault">
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <div>
                                <h3 class="card-title float-left">custmers</h3>
                                <router-link class="btn btn-primary float-right" :to="{'name':'custmers.create'}" >
                                    create custmers
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
                                <tr v-for="custmer in custmers.data" :key="custmer.id">
                                    <td>{{custmer.id}}</td>
                                    <td>{{custmer.name}}</td>
                                    <td>{{custmer.phone}}</td>
                                    <td>{{custmer.email}}</td>


                                    <td class="action">
                                        <router-link class="tag tag-success fas fa-edit"  :to="{'name':'custmers.edit',params:{'id':custmer.id}}" >
                                        </router-link>
                                        <span class="tag tag-success fas fa-trash-alt" @click="_delete(custmer)"></span>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <pagination align="center" :data="custmers" @pagination-change-page="get_all"></pagination>
                        </div>
                        <!-- /.card-body -->
                    </div>
                    <!-- /.card -->
                </div>
            </div>
        </div>
    </section>
</Layout>
</template>

<script>
import  * as services from '../../services/custmers';
import Swal from 'sweetalert2';
import AWN from "awesome-notifications";
import pagination from 'laravel-vue-pagination';
import {chkeckedAuthApi} from "../../common/jwt.service";
 import Layout from "../layouts/Layout";


export default {
    name: "Index",
    components:{
        pagination,Layout
    },
    data(){
        return {
            custmers:{
                type:Object,
                default:null
            },
            keywords:null,
        }
    },
    mounted(){
        this.get_all();
    },
    methods: {
        _delete(custmer) {
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
                    services._delete(custmer.id).then( response => {
                        this.get_all();
                        new AWN().success();
                    }).catch((error) => {
                        console.log("error",error)
                    });
                }
            })

        },
        search(){
            this.get_all();
        },
        get_all(page=1){
            services.get_all(page ,this.keywords).then(({data})=>{
                this.custmers = data
            }).catch(({response}) => {
                if(chkeckedAuthApi(response)){
                    this.get_all(1);
                    return ;
                }
            });
        }

    }

}
</script>

<style scoped>

</style>
