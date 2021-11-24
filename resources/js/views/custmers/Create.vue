<template>
<Layout name="LayoutDefault">
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
                            <h3 class="card-title float-left">create new custmer</h3>
                        </div>
                        <!-- /.card-header -->



                        <form role="form"   @submit.prevent="create(custmer)">
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="name">name</label>
                                    <input type="text" class="form-control" id="name" placeholder="Enter name" v-model="custmer.name">
                                </div>
                                <div class="form-group">
                                    <label for="phone">phone</label>
                                    <input type="text" class="form-control" id="phone" placeholder="Enter phone" v-model="custmer.phone">
                                </div>
                                <!--                                <div class="form-group">-->
                                <!--                                    <label for="email">email</label>-->
                                <!--                                    <input type="text" class="form-control" id="email" placeholder="Enter email" v-model="user.email">-->
                                <!--                                </div>-->
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" class="form-control" id="password" placeholder="password" v-model="custmer.password">
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
</Layout>
</template>

<script>
import  * as services from '../../services/custmers';
import Layout from "../layouts/Layout";
export default {
    name: "Create",
     components: {Layout },
    data(){
        return {
            errors: null,
            success : false,
            custmer:{
                name:null,
                phone:null,
                address:null,
                password:null
            }
        }
    },
    methods:{
        create(custmer) {
            
            services.create(custmer).then( response => {
                this.errors = [];
                this.custmer.name = null;
                this.custmer.email = null;
                this.custmer.phone = null;
                this.success = true;
                this.$router.push({ name: 'custmers' });
            }).catch((error) => {
                this.errors = error.response.data.errors;
                this.success = false;

            });

        }
    },

}
</script>


