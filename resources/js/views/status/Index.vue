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
                        <tr v-for="stat in status" :key="stat.id">
                            <td>{{stat.id}}</td>
                            <td>{{stat.name}}</td>

                            <td class="action">
                                <span class="tag tag-success fas fa-edit" @click="edit(stat.id)"></span>
                                <span class="tag tag-success fas fa-trash-alt" @click="deletePost(stat.id)"></span>
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
        name: "Index",
        mounted() {
            this.$store.dispatch('StatusModule/fetchstatus');
        },

        computed: {
            ...mapGetters('StatusModule', ['status']),

        }

    }
</script>

<style scoped>

</style>
