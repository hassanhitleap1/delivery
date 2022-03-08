<template>
    <Layout name="LayoutDefault">
        <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <div>
                                <h3 class="card-title float-left">wallet</h3>
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
                                    <th>custamer name</th>
                                    <th>wallet</th>

                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(wallet,index) in wallets.data" :key="index">
                                    <td>{{wallet.id}}</td>
                                    <td>{{wallet.custamer.name}}</td>
                                    <td>{{wallet.wallet}}</td>
                                    <td class="action">
                                        <router-link class="tag tag-success fas fa-edit"  :to="{'name':'wallets.edit',params:{'id':wallet.id}}" >
                                        </router-link>
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                            <pagination align="center" :data="admins" @pagination-change-page="get_wallets"></pagination>
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
import pagination from 'laravel-vue-pagination'
import  * as services from '../../services/wallet';
import Swal from 'sweetalert2';
import AWN from "awesome-notifications";
import Layout from "../layouts/Layout";
import {chkeckedAuthApi} from "../../common/jwt.service";

export default {
    name:"wallets",
    components:{
        pagination,
        Layout,
    },
    data(){
        return {
            wallets:{
                type:Object,
                default:null
            },
            keywords:null,

        }
    },
    mounted(){
        this.get_wallets();
    },
    methods:{
        get_wallets(page=1){
            services.get_wallets(page ,this.keywords).then(({data})=>{
                this.wallets = data
            }).catch(({response}) => {
                if(chkeckedAuthApi(response)){
                    // this.get_admins(1);
                    return ;
                }
            });
        },
        search(){
            this.get_wallets();
        },

    }
}
</script>

<style scoped>
.pagination{
    margin-bottom: 0;
}
</style>
