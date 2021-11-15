<template>
    <layout name="LayoutEmpty">
        <div class="login-box">
            <div class="login-logo">
                <a href="../../index2.html"><b>Admin</b>LTE</a>
            </div>
            <!-- /.login-logo -->
            <div class="card">
                <div class="card-body login-card-body">
                    <div v-if="errors">
                        <div v-for="(v, k) in errors" :key="k">
                            <p v-for="error in v" :key="error" class="alert alert-danger" role="alert">
                                {{ error }}
                            </p>
                        </div>
                    </div>
                    <p class="login-box-msg">Sign in to start your session</p>

                    <form  @submit.prevent="login()">


                       <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="name"  v-model="name"   autocomplete="off" >
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-envelope"></span>
                                </div>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="phone"  v-model="phone"   autocomplete="off" >
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-envelope"></span>
                                </div>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <input type="password" class="form-control" placeholder="Password"  v-model="password"   autocomplete="off" >
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <input type="password" class="form-control" placeholder="confram password"  v-model="confram_password"   autocomplete="off" >
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-8">
                                <div class="icheck-primary">
                                    <input type="checkbox" id="remember">
                                    <label for="remember">
                                        Remember Me
                                    </label>
                                </div>
                            </div>
                            <!-- /.col -->
                            <div class="col-4">
                                <button type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>
                            </div>
                            <!-- /.col -->
                        </div>
                    </form>

                    <div class="social-auth-links text-center mb-3">
                        <p>- OR -</p>
                        <a href="#" class="btn btn-block btn-primary">
                            <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
                        </a>
                        <a href="#" class="btn btn-block btn-danger">
                            <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
                        </a>
                    </div>
                    <!-- /.social-auth-links -->

                    <p class="mb-1">
                        <a href="#">I forgot my password</a>
                    </p>
                    <p class="mb-0">
                     <router-link class="nav-link " :to="{name:'login'}" exact>
                           login
                     </router-link>
                   
                    </p>
                </div>
                <!-- /.login-card-body -->
            </div>
        </div>

    </layout>

</template>

<script>

import Layout from '../views/layouts/Layout';

export default {
    name: "Register",
    components: {
        Layout,
    },
    data(){
        return {
            password:null,
            phone:null,
            name:null,
            confram_password:null,
            errors:[]
        }
    },
    methods: {
        login() {
            axios.post('api/auth/register', {phone:this.phone,password:this.password,name:this.name}).then((response) => {
      
                this.$router.push('/');
            }).catch((errors) => {
                this.errors = errors.response.data.errors
            })
        }
    }

}
</script>







