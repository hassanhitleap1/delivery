<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <div>
                                <h3 class="card-title float-left">areas</h3>
                                <router-link class="btn btn-primary float-right" :to="{'name':'areas.create'}" >
                                    create area
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
                                    <th>region id</th>
                                    <th>region</th>
                                    <th>country</th>

                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(area,index) in areas" :key="index">
                                    <td>{{area.id}}</td>
                                    <td>{{area.name}}</td>
                                    <td>{{area.region_id}}</td>
                                    <td>{{area.region.name}}</td>
                                    <td>{{area.country.name}}</td>
                                    <td class="action">
                                        <router-link class="tag tag-success fas fa-edit"  :to="{'name':'areas.edit',params:{'id':area.id}}" />
                                        <span class="tag tag-success fas fa-trash-alt" @click="_delete(area)"></span>
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
    import {mapGetters} from 'vuex'
    import * as services from "../../services/areas";
    export default {
        name: "Index",
        data(){
            return {
                keywords:null,
            }
        },
        mounted() {
            this.$store.dispatch('AreaModule/fetchareas');
        },

        computed: {
            ...mapGetters('AreaModule', ['areas']),

        }, methods:{
            _delete(area){
                services._delete(area.id).then( response => {
                    this.$store.dispatch('AreaModule/deleteArea',area);
                }).catch((error) => {
                    console.log("error",error)
                });

            },
            search(){

            },
        }

    }
</script>

<style scoped>

</style>
