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
                        <form role="form"   @submit.prevent="create(region)">
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="name">name</label>
                                    <input type="text" class="form-control" id="name" placeholder="Enter name" v-model="region.name">
                                </div>

                                <div class="form-horizontal">
                                    <div class="form-group">
                                        <label for="select1" class="col-sm-3 control-label">
                                            A simple select:
                                        </label>
                                        <div class="col-sm-5">
                                            <select2  name="select1" :options="options1" :value="result1">
                                            </select2>


                                        </div>
                                        <div class="col-sm-4">
                                            <p class="form-control-static">
                                                Selected Result: <span class="vue-result1">{{result1}}</span>
                                            </p>
                                        </div>
                                    </div>
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
import  select2  from '../../components/inputs/select2';

export default {
    name: "Create",
    components: {
        select2 :select2
    },
    data(){
        return {
            errors: null,
            success : false,

            region:{
                name:null,
            },
            options1: [
                "value1",
                "value2",
                "value3"
            ],
            result1: "",


        }
    },
    mounted() {
        console.log("select2")
        console.log(select2)
    },
    methods:{
        create(region) {
            services.create({'name':region.name}).then( response => {
                this.$store.dispatch('StatusModule/createStatu',region);
                this.errors = [];
                this.statu.name = null;
                this.success = true;
                this.$router.push({ name: 'status' });
            }).catch((error) => {
                console.log("error.response.data.errors",error.response.data.errors)
                this.errors = error.response.data.errors;
                this.success = false;
            });
        },
    },

}
</script>


