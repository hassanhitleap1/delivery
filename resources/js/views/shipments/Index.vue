<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">users</h3>
                    <router-link class="btn btn-primary" :to="{name:'create.user'}">
                        <i class="far fa-circle nav-icon"></i>
                        <p>create users</p>
                    </router-link>
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
                                <span class="tag tag-success fas fa-edit" @click="edit(shipment.id)"></span>
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
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        setup(){
            console.log("s")
        },
        name: "Index",
        mounted() {
            this.$store.dispatch('ShipmentModule/fetch_shipments');
        },

        computed: {
            ...mapGetters('ShipmentModule', ['shipments']),

        }

    }
</script>

<style scoped>

</style>
