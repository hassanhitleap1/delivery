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
                                <h3 class="card-title float-left">create</h3>
                                <div  class="float-right">
                                    <button class="btn btn-success" @click.prevent="add_shipment"><span class="fas fa-plus"></span></button>
                                </div>
                            </div>
                            <form role="form"  @submit.prevent="create()">
                                <div  class="card-body">
                                    <div v-for="(shipment ,index) in shipments" class="row" :key="index">
                                        <div class="col-md-12">
                                            <button class="btn btn-success float-right" @click.prevent="add_shipment"><span class="fas fa-plus"></span></button>
                                            <button class="btn btn-danger float-right" v-show="index > 0" @click.prevent="remove_shipment(index)"><span class="fas fa-minus"></span></button>
                                        </div>
                                        <div class="shipment row animate__animated animate__backInRight">
                                            <div class="col-md-2">
                                                <div class="form-group">
                                                    <label for="name">name</label>
                                                    <input type="text" class="form-control" id="name" placeholder="Enter name" v-model="shipments[index].name">
                                                </div>
                                            </div>
                                            <div class="col-md-2">
                                               <DriversSelect2 @select_driver="set_driver" :index="index" /> 
                                            </div>
                                            <div class="col-md-2">
                                                <CustmersSelect2 @select_customer="set_customer" :index="index" />
                                            </div>
                                            <div class="col-md-2">
                                               <StatusSelect2 @select_status="set_status" :index="index" />     
                                            </div>
                                            <div class="col-md-2">
                                                <CountriesSelect2 @select_country="set_country" :index="index" />
                                            </div>
                                            <div class="col-md-2">
                                                <RegionsSelect2 @select_region="set_region" :index="index" />
                                            </div>
                                            <div class="col-md-2">
                                               <AreasSelect2 @select_area="set_area" :index="index" />
                                               
                                            </div>
                                            <div class="col-md-2">
                                                <div class="form-group">
                                                    <label for="name">address</label>
                                                    <input type="text" class="form-control" id="address" placeholder="address" v-model="shipments[index].address">
                                                </div>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="form-group">
                                                    <label for="name">phone</label>
                                                    <input type="text" class="form-control" id="phone" placeholder="phone" v-model="shipments[index].phone">
                                                </div>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="form-group">
                                                    <label for="name">other phone</label>
                                                    <input type="text" class="form-control" id="other_phone" placeholder="other phone" v-model="shipments[index].other_phone">
                                                </div>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="form-group">
                                                    <label for="name">required amount</label>
                                                    <input type="text" class="form-control" id="required_amount" placeholder="required amount" v-model="shipments[index].required_amount">
                                                </div>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="form-group">
                                                    <label for="name">delivery amount</label>
                                                    <input type="text" class="form-control" id="delivery_amount" placeholder="delivery amount" v-model="shipments[index].delivery_amount">
                                                </div>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="form-group">
                                                    <label for="name">note</label>
                                                    <input type="text" class="form-control" id="note" placeholder="note" v-model="shipments[index].note">
                                                </div>
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
import Select2 from 'v-select2-component';
import StatusSelect2 from "../../components/inputs/StatusSelect2.vue";
import CountriesSelect2 from  "../../components/inputs/CountriesSelect2.vue";
import RegionsSelect2 from  "../../components/inputs/RegionsSelect2.vue";
import DriversSelect2 from  "../../components/inputs/DriversSelect2.vue";
import AreasSelect2 from  "../../components/inputs/AreasSelect2.vue";
import CustmersSelect2 from  "../../components/inputs/CustmersSelect2.vue";

export default {
    name: "Create",
    components:{
        Layout,
        Select2,
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
            shipments:[{
                name:null,
                driver_id:null,
                customer_id:null,
                status_id:null,
                country_id:null,
                region_id:null,
                areas_id:null,
                address:null,
                phone:null,
                other_phone:null,
                required_amount:null,
                delivery_amount:null,
                note:null,
            }],
            divers:[],
            areas:[],
        }
    }, methods:{
        add_shipment(){
              this.shipments.push({
                 policy_number:null,
                 name:null,
                 driver_id:null,
                 customer_id:null,
                 status_id:null,
                 country_id:null,
                 region_id:null,
                 areas_id:null,
                 address:null,
                 phone:null,
                 other_phone:null,
                 required_amount:null,
                 delivery_amount:null,
                 note:null,
             }) ;
        },
        remove_shipment(index){
            this.shipments.splice(index, 1);
        },

        set_status(data){
            this.shipments[data.index].status_id=data.id;
        },
         set_country(data){
            this.shipments[data.index].country_id=data.id;
        },
        set_region(data){
            this.shipments[data.index].region_id=data.id;
        },
        set_driver(data){
            this.shipments[data.index].driver_id=data.id;
        },
        set_area(data){
            this.shipments[data.index].areas_id=data.id;
        },
        set_customer(data){
            this.shipments[data.index].customer_id=data.id;
        },
        
        create() {
            services.create(this.shipments).then( response => {
                console.log('sss');
                this.errors = [];
                // this.shipments.forEach((index,shipment) => {
                //     this.shipments[index].driver_id = null;
                //     this.shipments[index].customer_id = null;
                //     this.shipments[index].status_id = null;
                //     this.shipments[index].country_id = null;
                //     this.shipments[index].region_id = null;
                //     this.shipments[index].areas_id = null;
                //     this.shipments[index].address = null;
                //     this.shipments[index].delivery_amount = null;
                //     this.shipments[index].required_amount = null;
                //     this.shipments[index].phone = null;
                //     this.shipments[index].other_phone = null;

                // });

                this.success = true;
                this.$router.push({ name: 'shipments' });
            }).catch((error) => {
                this.errors = error.response.data.errors;
                this.success = false;

            });

        }
    },

}
</script>

<style scoped>
    .shipment {
        border: solid black 1px; 
        border-radius:20px; 
        margin: 4px;;  
    }
</style>
