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
                            <h3 class="card-title float-left">login</h3>
                        </div>
                        <!-- /.card-header -->



                        <form role="form"   @submit.prevent="login()">
                            <div class="card-body">

                                <div class="form-group">
                                    <label for="phone">phone</label>
                                    <input type="text" class="form-control" id="phone" placeholder="Enter phone" v-model="phone"   autocomplete="off" >
                                </div>

                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" class="form-control" id="password" placeholder="password" v-model="password" autocomplete="off">
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
    name: "Login",
    data(){
        return {
            phone: null,
            password: null,
            errors: []
        }
    },
    methods: {
        login() {
            // get the redirect object
            var redirect = this.$auth.redirect()
            var app = this
            this.$auth.login({
                params: {
                    phone: app.phone,
                    password: app.password
                },
                success: function() {
                    // handle redirection
                    console.log(this.$auth.user());
                    // const redirectTo = redirect ? redirect.from.name : this.$auth.user().type === 2 ? 'admin' : 'admin'
                    // this.$router.push({name: redirectTo})
                },
                error: function() {
                    app.has_error = true
                },
                rememberMe: true,
                fetchUser: true
            })
        }
    }

}
</script>







