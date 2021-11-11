<template>
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
                            <h3 class="card-title float-left">create new regions</h3>
                        </div>
                        <!-- /.card-header -->
                        <form role="form"   @submit.prevent="update(region)">
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="name">name</label>
                                    <input type="text" class="form-control" id="name" placeholder="Enter name" v-model="region.name">
                                </div>
                                <div class="form-group">
                                    <label for="name">price</label>
                                    <input type="text" class="form-control" id="price" placeholder="Enter name" v-model="region.price">
                                </div>

                                <div class="form-group">
                                    <label for="name">name</label>
                                    <Select2 v-model="region.country_id" :options="countries" :settings="{ settingOption: countries.id , settingOption:  countries.name}" @change="myChangeEvent($event)" @select="mySelectEvent($event)" />
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
</template>

<script>
import  * as services from '../../services/regions';
import  * as apicountries from '../../services/countries';
import Select2 from 'v-select2-component';

export default {
    name: "Update",
    components: {Select2},
    data(){
        return {
            errors: null,
            success : false,
            countries:["amman"],
            region:{},
        }
    },
    mounted() {
            this.get_contrires(),
            this.id=this.$route.params.id;
            services.get_region(this.id).then( response => {
                this.region=response.data.data;
            }).catch((error) => {
                console.log("error",error)
            });

    },
    methods:{
        get_contrires(){
            apicountries.get_all().then(res => {
                console.log(res.data.data)
                this.countries=res.data.data.map( function(country) {
                    return {id:country.id,text:country.name};
                });
            }).catch(err => {
                console.log(err)
            })
        },
        saprot(contry){
            return {id: contry.id,text :contry.name}
        },
        myChangeEvent(val){
            console.log(val);
        },
        mySelectEvent({id, text}){
            this.country_id =id;
            console.log({id, text})
        },
        update(region) {
            services.update({name:region.name,country_id:region.country_id,price:region.price}).then( response => {
                this.$store.dispatch('RegionModule/updateRegion',region);
                this.errors = [];
                this.region.name = null;
                this.region.country_id = null;
                this.region.price = null;
                this.success = true;
                this.$router.push({ name: 'regions' });
            }).catch((error) => {
                console.log("error.response.data.errors",error.response.data.errors)
                this.errors = error.response.data.errors;
                this.success = false;
            });
        },
    },

}
</script>





