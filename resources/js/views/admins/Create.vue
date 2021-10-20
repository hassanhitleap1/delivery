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
                            <h3 class="card-title float-left">create new admin</h3>
                        </div>
                        <!-- /.card-header -->



                        <form role="form" action=""  @submit.prevent="create_admin(admin)">
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="name">name</label>
                                    <input type="text" class="form-control" id="name" placeholder="Enter name" v-model="admin.name">
                                </div>
                                <div class="form-group">
                                    <label for="email">email</label>
                                    <input type="text" class="form-control" id="email" placeholder="Enter email" v-model="admin.email">
                                </div>
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" class="form-control" id="password" placeholder="password" v-model="admin.password">
                                </div>

                                <div class="form-group">
                                    <label for="password_confirm">password confirm</label>
                                    <input type="password" class="form-control" id="password_confirm" placeholder="password confirm" v-model="admin.password_confirm" >
                                </div>

                                <div class="form-group">
                                    <label for="name">address</label>
                                    <input type="text" class="form-control" id="address" placeholder="Enter address" v-model="admin.address">
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
</template>

<script>

    export default {
        name: "Create",
        data(){
            return {
                errors: null,
                success : false,
                admin:{
                    name:null,
                    phone:null,
                    address:null,
                    password:null
                }
            }
        },


        methods:{
            create_admin(admin) {
                // dataform = new FormData();
                // dataform.append('name', this.admin.name);
                // dataform.append('email', this.admin.email);
                console.log("sss");
                axios.post('/api/user/admins', admin).then( response => {
                    console.log(response);
                    this.errors = [];
                    this.admin.name = null;
                    this.admin.email = null;
                    this.success = true;
                } ).catch((error) => {
                    this.errors = error.response.data.errors;
                    this.success = false;
                });



                // const res = axios.post('/api/user/admins', admin).catch(err => {
                //     console.log(err);
                // });
                // console.log(JSON.stringify(response.data))

                // console.log( this.$store.dispatch('AdminModule/create_admin', admin) );


            }
        },
        // computed: {
        //     isValid() {
        //         return this.admin.name !== '' && this.admin.email !== '' && this.admin.password !== '' && this.admin.address !== ''  && this.admin.address !== ''
        //             && this.admin.password_confirm !== ''
        //     }
        // }


    }
</script>


