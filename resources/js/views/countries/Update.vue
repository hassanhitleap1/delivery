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
                            <h3 class="card-title float-left">create new admin</h3>
                        </div>
                        <!-- /.card-header -->
                        <form role="form" @submit.prevent="update(country,id)" >
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="name">name</label>
                                    <input type="text" class="form-control" id="name" placeholder="Enter name" v-model="country.name">
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

import  * as services from '../../services/countries';
import Layout from "../layouts/Layout";
export default {
    name: "Update",
     components: {Layout },
    data(){
        return {
            errors: [],
            success : false,
            id:null,
            country:{},
        }
    },
    mounted() {
        this.id=this.$route.params.id;
        services.get_country(this.id).then( response => {
            this.country=response.data.data;
        }).catch((error) => {
            console.log("error",error)
        });
    },methods:{
        update(country,id) {
            services.update(country,id).then( response => {

                this.$store.dispatch('ContryModule/updateContry',response.data.data);
                this.errors = [];
                this.success = true;
                this.$router.push({ 'name': 'countries' });
            }).catch((error) => {
                this.errors = error.response.data.errors;
                this.success = false;
            });

        }
    },


}
</script>


