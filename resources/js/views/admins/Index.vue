<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <div>
                                <h3 class="card-title float-left">admins</h3>
                                <router-link class="btn btn-primary float-right" :to="{name:'admins.create'}" >
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
                                <tr v-for="admin in admins" :key="admin.id">
                                    <td>{{admin.id}}</td>
                                    <td>{{admin.name}}</td>

                                    <td class="action">
                                        <router-link class="tag tag-success fas fa-edit" :to="{name:'admins.edit',params:{'id':admin.id}}" >
                                        </router-link>
                                        <span class="tag tag-success fas fa-trash-alt" @click="delete_admin(admin.id)"></span>
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
            this.$store.dispatch('AdminModule/fetch_admins');
        },
        methods: {
            delete_admin(admin) {
                this.$store.dispatch('delete_admin',admin)
            }
        },
        computed: {
            ...mapGetters('AdminModule', ['admins']),

        }

    }
</script>

<style scoped>

</style>
