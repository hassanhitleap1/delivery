<template>
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
                                    <th>name   </th>
                                    <th>action </th>

                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="shipment in shipments" :key="shipment.id">
                                    <td>{{shipment.id}}</td>
                                    <td>{{shipment.id}}</td>

                                    <td class="action">
                                        <router-link class="tag tag-success fas fa-edit" :to="{name:'shipments.edit',params:{'id':shipment.id}}" >
                                        </router-link>
                                        <span class="tag tag-success fas fa-trash-alt" @click="deletePost(shipment.id)"></span>
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
    import  * as services from '../../services/shipments';
    export default {
        name: "Index",
        data(){
            return {
                shipments:[]
            }
        },
        mounted() {
            services.get_all().then( ({data}) => {
                this.shipments=data.data;
            }).catch((error) => {
              console.log(error)
            });
        },



    }
</script>

<style scoped>

</style>
