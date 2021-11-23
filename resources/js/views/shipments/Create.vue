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
                                <h3 class="card-title float-left">create</h3>
                                <p  class="float-right">
                                    <button class="btn btn-success" @click.prevent="add_shipment"><span class="fas fa-plus"></span></button>
                                </p>
                            </div>
                            <form role="form"  @submit.prevent="create()">
                                <div  class="card-body">
                                    <div v-for="(shipment ,index) in shipments" class="row" :key="index">
                                        <button class="btn btn-success" @click.prevent="add_shipment"><span class="fas fa-plus"></span></button>
                                        <button class="btn btn-danger" v-show="index > 0" @click.prevent="remove_shipment(index)"><span class="fas fa-minus"></span></button>
                                        <div class="col-md-2">
                                            <div class="form-group">
                                                <label for="name">name</label>
                                                <input type="text" class="form-control" id="name" placeholder="Enter name" v-model="shipments[index].name">
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            <div class="form-group">
                                                <label for="name"> driver </label>
                                                <input type="text" class="form-control" id="driver_id" placeholder="Enter name" v-model="shipments[index].driver_id">
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            <div class="form-group">
                                                <label for="name">customer </label>
                                                <input type="text" class="form-control" id="customer_id" placeholder="Enter name" v-model="shipments[index].customer_id">
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            <div class="form-group">
                                                <label for="name">status </label>
                                                <input type="text" class="form-control" id="status_id" placeholder="Enter name" v-model="shipments[index].status_id">
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            <div class="form-group">
                                                <label for="name">country </label>
                                                <Select2 v-model="shipments[index].country_id" :options="countries_serach" />
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            <div class="form-group">
                                                <label for="name">region </label>
                                                <Select2 v-model="shipments[index].region_id" :options="regions_serach" />
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            <div class="form-group">
                                                <label for="name">areas </label>
                                                <Select2 v-model="shipments[index].areas_id" :options="areas" />
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            <div class="form-group">
                                                <label for="name">address</label>
                                                <Select2Component />
                                                <input type="text" class="form-control" id="address" placeholder="Enter name" v-model="shipments[index].address">
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            <div class="form-group">
                                                <label for="name">phone</label>
                                                <input type="text" class="form-control" id="phone" placeholder="Enter name" v-model="shipments[index].phone">
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            <div class="form-group">
                                                <label for="name">other_phone</label>
                                                <input type="text" class="form-control" id="other_phone" placeholder="Enter name" v-model="shipments[index].other_phone">
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            <div class="form-group">
                                                <label for="name">required amount</label>
                                                <input type="text" class="form-control" id="required_amount" placeholder="Enter name" v-model="shipments[index].required_amount">
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            <div class="form-group">
                                                <label for="name">delivery amount</label>
                                                <input type="text" class="form-control" id="delivery_amount" placeholder="Enter name" v-model="shipments[index].delivery_amount">
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            <div class="form-group">
                                                <label for="name">note</label>
                                                <input type="text" class="form-control" id="note" placeholder="Enter name" v-model="shipments[index].note">
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
    </layout>
</template>

<script>
import {mapGetters} from 'vuex';
import  * as services from '../../services/shipments';
import Layout from "../layouts/Layout";
import {get_list}   from "../../services/drivers";
import * as apiareas from "../../services/areas";
import Select2 from 'v-select2-component';
import Select2Component from '../../components/inputs/Select2Component';
export default {
    name: "Create",
    components:{
        Layout,
        Select2,Select2Component
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
    }, mounted() {
        this.get_drivers();
        this.$store.dispatch('StatusModule/fetchstatus');
        this.$store.dispatch('ContryModule/fetchcountries');
        this.$store.dispatch('RegionModule/fetchregions');
    }, computed: {
        ...mapGetters('StatusModule', ['status']),
        ...mapGetters('ContryModule', ['countries']),
        ...mapGetters('RegionModule', ['regions']),
        countries_serach: function () {
            return this.countries.map( function(country) {
                return {id:country.id,text:country.name};
            });
        },
        regions_serach: function () {
            return this.regions.map( function(region) {
                return {id:region.id,text:region.name};
            });
        },


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


        saprotarea(area){
            return {id: area.id,text :area.name}
        },
        saprotregion(region){
            return {id: region.id,text :region.name}
        },
        saprotdriver(driver){
            return {id: driver.id,text :driver.name}
        },
        myChangeEventArea(val){
            console.log(val);
        },
        myChangeEventRegion(val){
            console.log(val);
        },
        myChangeEventDriver(val){
            console.log(val);
        },
        mySelectEventDriver({id, text}){
            this.driver_id =id;
        },
        mySelectEventRegion({id, text}){
            this.get_areas(region_id);
            this.region_id =id;
        },
        mySelectEventArea({id, text}){
            this.area_id =id;
        },


        get_drivers(){
            get_list().then(({data}) => {
                this.drivers=data.data.map( function(driver) {
                    return {id:driver.id,text:driver.name};
                });
            }).catch(err => {
                console.log(err)
            });

        },


        get_areas(region_id){
            apiareas.get_areas_region(region_id).then(res => {
                this.areas=res.data.data.map( function(region) {
                    return {id:area.id,text:area.name};
                });
            }).catch(err => {
                console.log(err)
            })
        },
        create() {
            services.create(this.shipments).then( response => {
                this.errors = [];
                this.shipments.forEach((index,shipment) => {
                    this.shipments[index].driver_id = null;
                    this.shipments[index].customer_id = null;
                    this.shipments[index].status_id = null;
                    this.shipments[index].country_id = null;
                    this.shipments[index].region_id = null;
                    this.shipments[index].areas_id = null;
                    this.shipments[index].address = null;
                    this.shipments[index].delivery_amount = null;
                    this.shipments[index].required_amount = null;
                    this.shipments[index].phone = null;
                    this.shipments[index].other_phone = null;

                });

                this.success = true;
                this.$router.push({ name: 'admins' });
            }).catch((error) => {
                this.errors = error.response.data.errors;
                this.success = false;

            });

        }
    },

}
</script>


