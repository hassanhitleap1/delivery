<template>
    <Layout name="LayoutDefault">
        <section class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                                <div>
                                    <h3 class="card-title float-left">shipments</h3>
                                    <router-link class="btn btn-primary float-right" :to="{name:'shipments.create'}" >
                                        create shipment
                                    </router-link>
                                </div>
                                <div class="card-tools">
                                    <div class="input-group input-group-sm" style="width: 150px;">
                                        <input type="text" name="table_search" class="form-control float-right" placeholder="Search">

                                        <div class="input-group-append">
                                            <button type="submit" class="btn btn-default"><i class="fas fa-search"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /.card-header -->
                            <div class="card-body table-responsive p-0">
                                <table class="table table-hover">
                                    <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>shipment id </th>
                                        <th>driver </th>
                                        <th>country </th>
                                        <th>region </th>
                                        <th>areas </th>
                                        
                                        <th>address </th>
                                        <th>phone </th>
                                        <th>other_phone </th>
                                    
                                        <th>required amount </th>
                                        <th>delivery amount</th>
                                        <th>note</th>
                                        <th>action </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="shipment in shipments.data" :key="shipment.id">
                                        <td>{{shipment.id}}</td>
                                        <td>{{shipment.policy_number}}</td>
                                          <td>{{(shipment.driver==null)? '': shipment.driver.name}}</td>
                                        <td>{{(shipment.country==null)? '':shipment.country.name }}</td>
                                        <td>{{ (shipment.region==null)? '':shipment.region.name}}</td>
                                        <td>{{(shipment.areas==null)? '':shipment.areas.name}}</td>
                                        <td>{{shipment.address}}</td>
                                        <td>{{shipment.phone}}</td>
                                        <td>{{shipment.other_phone}}</td>
                                        <td>{{shipment.required_amount}}</td>
                                        <td>{{shipment.delivery_amount}}</td>
                                        <td>{{shipment.note}}</td>

                                        <td class="action">
                                            <router-link class="tag tag-success fas fa-edit" :to="{name:'shipments.edit',params:{'id':shipment.id}}" >
                                            </router-link>
                                            <span class="tag tag-success fas fa-trash-alt" @click="deletePost(shipment.id)"></span>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                 <pagination align="left" :paginateTo="10" :data="shipments" @pagination-change-page="get_all">
                                     <span slot="prev-nav">&lt; Previous</span>
                                        <span slot="next-nav">Next &gt;</span>
                                 </pagination>
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
    import  * as services from '../../services/shipments';
    import Layout from "../layouts/Layout";
    export default {
        name: "Index",
         components:{
            Layout,
        },
        data(){
            return {
                keywords:null,
                shipments:{
                     type:Object,
                    default:null
                }
            }
        },
        mounted() {
                this.get_all();
        },
        methods:{
              get_all(page=1){
                services.get_all(page ,this.keywords).then(({data})=>{
                    this.shipments = data
                }).catch(({response}) => {
                    if(chkeckedAuthApi(response)){
                        // this.get_admins(1);
                        return ;
                    }
            });
            }
       
        }



    }
</script>

<style scoped>

</style>
