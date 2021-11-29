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
                                <h3 class="card-title float-left">add new price</h3>
                            </div>
                            <!-- /.card-header -->



                            <form role="form" @submit.prevent="update()" >
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
     import Layout from "../layouts/Layout";
     import RegionsSelect2 from  "../../components/inputs/RegionsSelect2.vue";
     import CustmersSelect2 from  "../../components/inputs/CustmersSelect2.vue";
    export default {
        name: "Edit",
        components:{
            Layout,
            RegionsSelect2,
            CustmersSelect2
        },
        data(){
                return {
                    errors: [],
                    success : false,
                    id:null,
                    price:{},
                }
            },
        mounted() {
            this.id=this.$route.params.id;
            services.get_one(this.id).then( response => {
                this.price=response.data.data;
            }).catch((error) => {
                console.log("error",error)
            });

        },methods:{
            set_region(data){
                this.price.region_id=data.id;
            }, set_customer(data){
                this.price.customer_id=data.id;
            },
            update() {
                services.update(this.price,this.id).then( response => {
                    this.errors = [];
                    this.success = true;
                    this.$router.push({ 'name': 'prices' });
                }).catch((error) => {
                    this.errors = error.response.data.errors;
                    this.success = false;
                });

            }
        },


    }
</script>


