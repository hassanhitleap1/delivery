<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <div>
                                <h3 class="card-title float-left">custmers</h3>
                                <router-link class="btn btn-primary float-right" :to="{name:'custmers.create'}" >
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
                                    <th>name   </th>
                                    <th>action </th>

                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="custmer in custmers" :key="custmer.id">
                                    <td>{{custmer.id}}</td>
                                    <td>{{custmer.name}}</td>

                                    <td class="action">
                                        <router-link class="tag tag-success fas fa-edit" :to="{name:'custmers.edit',params:{'id':custmer.id}}" >
                                        </router-link>
                                        <span class="tag tag-success fas fa-trash-alt" @click="delete_custmer(custmer.id)"></span>
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
    import {mapGetters} from 'vuex';
    export default {
        name: "Index",
        mounted() {
            this.$store.dispatch('CustmerModule/fetch_custmers');
        },
        methods: {
            delete_custmer(custmer) {
                this.$store.dispatch('CustmerModule/delete_custmer',custmer)
            }
        },
        computed: {
            ...mapGetters('CustmerModule', ['custmers']),

        }

    }
</script>

<style scoped>

</style>
