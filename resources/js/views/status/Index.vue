<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">users</h3>

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
                        <tr v-for="stat in posts" :key="stat.id">
                            <td>{{stat.id}}</td>
                            <td>{{stat.name}}</td>
                            <td class="action"> <span class="tag tag-success">Approved</span></td>
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
    import { site_url, api_url } from '../../globals';
    export default {
        name: "Index",
        mounted() {
            this.$store.dispatch('fetchPosts');
            console.log(this.posts)
        },
        methods: {
            deletePost(post) {
                this.$store.dispatch('deletePost',post)
            }

        },
        computed: {
            ...mapGetters([
                'posts'
            ]),

        }

    }
</script>

<style scoped>

</style>
