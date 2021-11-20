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
                            <h3 class="card-title float-left">update area</h3>
                        </div>
                        <!-- /.card-header -->
                        <form role="form" @submit.prevent="update(area,id)" >
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="name">name</label>
                                    <input type="text" class="form-control" id="name" placeholder="Enter name" v-model="area.name">
                                </div>
                            </div>
<!--                            <div class="form-group">-->
<!--                                <label for="name">price</label>-->
<!--                                <input type="text" class="form-control" id="price" placeholder="Enter name" v-model="area.price">-->
<!--                            </div>-->

                            <div class="form-group">
                                <label for="name">name</label>
                                <Select2 v-model="area.region_id" :options="regions" :settings="{ settingOption: regions.id , settingOption:  regions.name}" @change="myChangeEvent($event)" @select="mySelectEvent($event)" />
                            </div>

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
import  * as services from '../../services/areas';
import  * as apiregions from '../../services/regions';
import Select2 from 'v-select2-component';
import Layout from "../layouts/Layout";

export default {
    name: "Edit",
    components: {Select2,Layout},
    data(){
        return {
            errors: null,
            success : false,
            regions:[],
            area:{},
        }
    },
    mounted() {
        this.get_regions(),
            this.id=this.$route.params.id;
        services.get_area(this.id).then( response => {
            this.area=response.data.data;
        }).catch((error) => {
            console.log("error",error)
        });

    },
    methods:{
        get_regions(){
            apiregions.get_all().then(res => {
                console.log(res.data.data)
                this.regions=res.data.data.map( function(region) {
                    return {id:region.id,text:region.name};
                });
            }).catch(err => {
                console.log(err)
            })
        },
        saprot(region){
            return {id: region.id,text :region.name}
        },
        myChangeEvent(val){
            console.log(val);
        },
        mySelectEvent({id, text}){
            this.region_id =id;
            console.log({id, text})
        },
        update(area,id) {
            services.update({name:area.name,region_id:area.region_id},id).then( response => {
                this.$store.dispatch('AreaModule/updateArea',area);
                this.errors = [];
                this.success = true;
                this.$router.push({ name: 'areas' });
            }).catch((error) => {
                console.log("error.response.data.errors",error.response.data.errors)
                this.errors = error.response.data.errors;
                this.success = false;
            });
        },
    },

}
</script>





