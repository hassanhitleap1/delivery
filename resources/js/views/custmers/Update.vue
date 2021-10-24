<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <!-- left column -->
                <div v-if="errors">
                    <div v-for="(v, k) in errors" :key="k">
                        <p v-for="error in v" :key="error" class="alert alert-danger" role="alert">
                            {{ error }}
                        </p>
                    </div>
                </div>
                <div class="col-md-12">
                    <!-- general form elements -->
                    <div class="card card-primary">
                        <div class="card-header">
                            <h3 class="card-title float-left">create new admin</h3>
                        </div>
                        <!-- /.card-header -->



                        <form role="form" @submit.prevent="update_custmer(custmer,id)" >
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="name">name</label>
                                    <input type="text" class="form-control" id="name" placeholder="Enter name" v-model="custmer.name">
                                </div>
                                <div class="form-group">
                                    <label for="phone">phone</label>
                                    <input type="text" class="form-control" id="phone" placeholder="Enter phone" v-model="custmer.phone">
                                </div>
                                <div class="form-group">
                                    <label for="email">email</label>
                                    <input type="text" class="form-control" id="email" placeholder="Enter email" v-model="custmer.email">
                                </div>

                                <div class="form-group">
                                    <label for="name">address</label>
                                    <input type="text" class="form-control" id="address" placeholder="Enter address" v-model="custmer.address">
                                </div>
                            </div>
                            <!-- /.card-body -->

                            <div class="card-footer">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                    <!-- /.card -->

                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {mapGetters} from 'vuex';
    import  * as services from '../../services/custmer';
    export default {
        name: "Update",
        data(){
            return {
                errors: [],
                success : false,
                id:null,
            }
        },
        mounted() {
            this.$store.dispatch('CustmerModule/fetch_custmer',this.$route.params.id);
            this.id=this.$route.params.id;

        },computed: {
            ...mapGetters('CustmerModule', ['custmer']),

        },methods:{

            update_custmer(admin,id) {
                services.update_custmer(admin,id).then( response => {
                    this.errors = [];
                    this.success = true;
                    this.$store.dispatch('CustmerModule/update_custmer', admin);
                    this.$router.push({ name: 'admins' });
                }).catch((error) => {
                    this.errors = error.response.data.errors;
                    this.success = false;
                });

            }
        },


    }
</script>


