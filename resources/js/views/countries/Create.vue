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
                            <h3 class="card-title float-left">create new country</h3>
                        </div>
                        <!-- /.card-header -->
                        <form role="form"   @submit.prevent="create(country)">
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="name">name</label>
                                    <input type="text" class="form-control" id="name" placeholder="Enter name" v-model="country.name">
                                </div>
                            </div>
                            <div class="card-footer">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
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
    name: "Create",
       components:{
            Layout,
        },
    data(){
        return {
            errors: null,
            success : false,
            country:{
                name:null,
            }
        }
    },
    methods:{
        create(country) {
            services.create({'name':country.name}).then( response => {
                console.log(response.data.data)
                this.$store.dispatch('ContryModule/createContry',response.data.data);
                this.errors = [];
                this.country.name = null;
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


