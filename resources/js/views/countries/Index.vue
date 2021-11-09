<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <div>
                                <h3 class="card-title float-left">countries</h3>
                                <router-link class="btn btn-primary float-right" :to="{'name':'countries.create'}" >
                                    create countries
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
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(country,index) in countries" :key="index">
                                    <td>{{country.id}}</td>
                                    <td>{{country.name}}</td>

                                    <td class="action">
                                        <router-link class="tag tag-success fas fa-edit"  :to="{'name':'countries.edit',params:{'id':country.id}}" />
                                        <span class="tag tag-success fas fa-trash-alt" @click="_delete(country)"></span>
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
            this.$store.dispatch('ContryModule/fetchcountries');
        },

        computed: {
            ...mapGetters('ContryModule', ['countries']),

        },
        methods:{
            _delete(country){
                this.$store.dispatch('ContryModule/_delete',country);
            },
            search(){

            },
        }

    }
</script>

<style scoped>

</style>
