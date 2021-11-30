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



                        <form role="form"   @submit.prevent="create()">
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="name">price</label>
                                    <input type="text" class="form-control" id="name" placeholder="Enter name" v-model="price.price">
                                </div>

                                <RegionsSelect2 @select_region="set_region" :index="index" />

                                <CustmersSelect2 @select_customer="set_customer" :index="index" />

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
    import  * as services from '../../services/prices';
    import RegionsSelect2 from  "../../components/inputs/RegionsSelect2.vue";
    import CustmersSelect2 from  "../../components/inputs/CustmersSelect2.vue";
    import Layout from "../layouts/Layout";

    export default {
        name: "Create",
        components:{
            Layout,
            RegionsSelect2,
            CustmersSelect2
        },
        data(){
            return {
                errors: null,
                success : false,
                price:{
                    price:null,
                    custmer_id:null,
                    region_id:null,
                }
            }
        },


        methods:{
            set_region(data){
                this.price.region_id=data.id;
            }, set_customer(data){
                this.price.customer_id=data.id;
            },
           create() {
                services.create(this.price).then( response => {
                        this.errors = [];
                        this.$router.push({ name: 'prices' });
               }).catch((error) => {
                        this.errors = error.response.data.errors;
                        this.success = false;

               });

            }
        },

    }
</script>


