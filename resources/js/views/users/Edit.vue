<template>
    <layout name="LayoutDefault">
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
                            <h3 class="card-title float-left">create new user</h3>
                        </div>
                        <!-- /.card-header -->



                        <form role="form" @submit.prevent="update(user,id)" >
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="name">name</label>
                                    <input type="text" class="form-control" id="name" placeholder="Enter name" v-model="user.name">
                                </div>
                                <div class="form-group">
                                    <label for="phone">phone</label>
                                    <input type="text" class="form-control" id="phone" placeholder="Enter phone" v-model="user.phone">
                                </div>
<!--                                <div class="form-group">-->
<!--                                    <label for="email">email</label>-->
<!--                                    <input type="text" class="form-control" id="email" placeholder="Enter email" v-model="user.email">-->
<!--                                </div>-->


                                <div class="form-group">
                                    <label for="name">address</label>
                                    <input type="text" class="form-control" id="address" placeholder="Enter address" v-model="user.address">
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
    </layout>
</template>

<script>
    import Layout from "../layouts/Layout";
    import  * as services from '../../services/users';
    export default {
        name: "Edit",
        components:{
            Layout,
        },
        data(){
            return {
                errors: [],
                success : false,
                id:null,
                user:{},
            }
        },
        mounted() {
            this.id=this.$route.params.id;
            services.get_one(this.id).then( response => {
                this.user=response.data.data;
                console.log("response.data.data",response.data.data)
            }).catch((error) => {
                console.log("error",error)
            });

        },methods:{

            update(user,id) {
                services.update(user,id).then( response => {
                    this.errors = [];
                    this.success = true;
                    this.$router.push({ 'name': 'users.index' });
                }).catch((error) => {
                    console.log(error)
                    this.errors = error.response.data.errors;
                    this.success = false;
                });

            }
        },


    }
</script>


