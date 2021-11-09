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
</template>

<script>
import  * as services from '../../services/countries';
export default {
    name: "Create",
    data(){
        return {
            errors: null,
            success : false,
            statu:{
                name:null,
            }
        },methods:{
           create_contery(contery){
              this.$store.dispatch('ContryModule/createContry',contery);
              this.$router.push({ name: 'countries' });
           } 
        }
    },
    methods:{
        create(country) {
            services.create({'name':country.name}).then( response => {
                this.$store.dispatch('CountryModule/createStatu',country);
                this.errors = [];
                this.statu.name = null;
                this.success = true;
                this.$router.push({ name: 'countries' });
            }).catch((error) => {
                console.log("error.response.data.errors",error.response.data.errors)
                this.errors = error.response.data.errors;
                this.success = false;
            });
        }
    },

}
</script>


