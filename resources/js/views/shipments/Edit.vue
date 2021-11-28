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
                                <h3 class="card-title float-left">update</h3>
                               
                            </div>
                            <form role="form"  @submit.prevent="update()">
                                <div  class="card-body">
                               
                                        <div class="shipment row animate__animated animate__backInRight">
                                            <div class="col-md-2">
                                                <div class="form-group">
                                                    <label for="name">name</label>
                                                    <input type="text" class="form-control" id="name" placeholder="Enter name" v-model="shipment.name">
                                                </div>
                                            </div>
                                            <div class="col-md-2">
                                               <DriversSelect2 @select_driver="set_driver" :index="0" /> 
                                            </div>
                                            <div class="col-md-2">
                                                <CustmersSelect2 @select_customer="set_customer" :index="0" />
                                            </div>
                                            <div class="col-md-2">
                                               <StatusSelect2 @select_status="set_status" :index="0" />     
                                            </div>
                                            <div class="col-md-2">
                                                <CountriesSelect2 @select_country="set_country" :index="0" />
                                            </div>
                                            <div class="col-md-2">
                                                <RegionsSelect2 @select_region="set_region" :index="0" />
                                            </div>
                                            <div class="col-md-2">
                                               <AreasSelect2 @select_area="set_area" :index="0" />
                                               
                                            </div>
                                            <div class="col-md-2">
                                                <div class="form-group">
                                                    <label for="name">address</label>
                                                    <input type="text" class="form-control" id="address" placeholder="address" v-model="shipment.address">
                                                </div>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="form-group">
                                                    <label for="name">phone</label>
                                                    <input type="text" class="form-control" id="phone" placeholder="phone" v-model="shipment.phone">
                                                </div>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="form-group">
                                                    <label for="name">other phone</label>
                                                    <input type="text" class="form-control" id="other_phone" placeholder="other phone" v-model="shipment.other_phone">
                                                </div>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="form-group">
                                                    <label for="name">required amount</label>
                                                    <input type="text" class="form-control" id="required_amount" placeholder="required amount" v-model="shipment.required_amount">
                                                </div>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="form-group">
                                                    <label for="name">delivery amount</label>
                                                    <input type="text" class="form-control" id="delivery_amount" placeholder="delivery amount" v-model="shipment.delivery_amount">
                                                </div>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="form-group">
                                                    <label for="name">note</label>
                                                    <input type="text" class="form-control" id="note" placeholder="note" v-model="shipment.note">
                                                </div>
                                            </div>
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
import  * as services from '../../services/shipments';
import Layout from "../layouts/Layout";
import StatusSelect2 from "../../components/inputs/StatusSelect2.vue";
import CountriesSelect2 from  "../../components/inputs/CountriesSelect2.vue";
import RegionsSelect2 from  "../../components/inputs/RegionsSelect2.vue";
import DriversSelect2 from  "../../components/inputs/DriversSelect2.vue";
import AreasSelect2 from  "../../components/inputs/AreasSelect2.vue";
import CustmersSelect2 from  "../../components/inputs/CustmersSelect2.vue";

export default {
    name: "Edit",
    components:{
        Layout,
        StatusSelect2,
        CountriesSelect2,
        RegionsSelect2,
        DriversSelect2,
        AreasSelect2,
        CustmersSelect2
  
    },
    data(){
        return {
            errors: null,
            success : false,
            id:null,
            shipment:{},
        }
    },mounted(){
      this.id=this.$route.params.id;
            services.get_one(this.id).then( response => {
                this.shipment=response.data.data;
                console.log("response.data.data",response.data.data)
            }).catch((error) => {
                console.log("error",error)
            });

    }, methods:{
    
       

        set_status(data){
            this.shipment.status_id=data.id;
        },
         set_country(data){
            this.shipment.country_id=data.id;
        },
        set_region(data){
            this.shipment.region_id=data.id;
        },
        set_driver(data){
            this.shipment.driver_id=data.id;
        },
        set_area(data){
            this.shipment.areas_id=data.id;
        },
        set_customer(data){
            this.shipment.customer_id=data.id;
        },

          update() {
                services.update(this.shipment,this.id).then( response => {
                    this.errors = [];
                    this.success = true;
                    this.$router.push({ 'name': 'shipments' });
                }).catch((error) => {
                    this.errors = error.response.data.errors;
                    this.success = false;
                });

            }
        
     
        }
    

}
</script>

<style scoped>
    .shipment {
        border: solid black 1px; 
        border-radius:20px; 
        margin: 4px;;  
    }
</style>
