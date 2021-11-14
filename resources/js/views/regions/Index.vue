<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <div>
                                <h3 class="card-title float-left">regions</h3>
                                <router-link class="btn btn-primary float-right" :to="{'name':'regions.create'}" >
                                    create region
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
                                    <th>county</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(region,index) in regions" :key="index">
                                    <td>{{region.id}}</td>
                                    <td>{{region.name}}</td>
                                    <td>{{(region.country===null)?'':region.country.name}}</td>
                                    <td class="action">
                                        <router-link class="tag tag-success fas fa-edit"  :to="{'name':'regions.edit',params:{'id':region.id}}" />
                                        <span class="tag tag-success fas fa-trash-alt" @click="_delete(region)"></span>
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
    export default {
        name: "Index",
        data(){
            return {
                keywords:null,
            }
        },
        mounted() {
            this.$store.dispatch('RegionModule/fetchregions');
        },
        computed: {
            ...mapGetters('RegionModule', ['regions']),
        },
        methods:{
            _delete(region){

                this.$store.dispatch('RegionModule/deleteregion',region);
            },
            search(){

            },
        }

    }
</script>

