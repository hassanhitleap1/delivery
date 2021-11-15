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
                    <p class="login-box-msg">forget password</p>

                    <form  @submit.prevent="login()">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="phone"  v-model="phone"   autocomplete="off" >
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-envelope"></span>
                                </div>
                            </div>
                        </div>
                   
                        
                    </form>

                
                    <p class="mb-0">
                     <router-link class="nav-link " :to="{name:'register'}" exact>
                            Register a new membership
                     </router-link>
                   
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
    name: "Forgot_password",
    components: {
        Layout,
    },
    data(){
        return {
            password:null,
            phone:null,
            errors:[]
        }
    },
    methods: {
        login() {
            axios.post('api/auth/login', {phone:this.phone,password:this.password}).then((response) => {
                console.log(response);
                localStorage.setItem('token', response.data.access_token)
                localStorage.setItem('token_type', response.data.token_type)
                localStorage.setItem('expires_in', response.data.expires_in)
                this.$router.push('/');
            }).catch((errors) => {
                this.errors = errors.response.data.errors
            })
        }
    }

}
</script>







