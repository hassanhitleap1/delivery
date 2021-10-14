<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <!-- left column -->
                <div class="col-md-12">
                    <!-- general form elements -->
                    <div class="card card-primary">
                        <div class="card-header">
                            <h3 class="card-title float-left">create new admin</h3>
                        </div>
                        <!-- /.card-header -->
                        <!-- form start -->

                        <div>
                            <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
                                <label class="form__label">Name</label>
                                <input class="form__input" v-model.trim="$v.name.$model"/>
                            </div>
                            <div class="error" v-if="!$v.name.required">Field is required</div>
                            <div class="error" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
                            <tree-view :data="$v.name" :options="{rootObjectKey: '$v.name', maxDepth: 2}"></tree-view>
                            <div class="form-group" :class="{ 'form-group--error': $v.age.$error }">
                                <label class="form__label">Age</label>
                                <input class="form__input" v-model.trim.lazy="$v.age.$model"/>
                            </div>
                            <div class="error" v-if="!$v.age.between">Must be between {{$v.age.$params.between.min}} and {{$v.age.$params.between.max}}</div><span tabindex="0">Blur to see changes</span>
                            <tree-view :data="$v.age" :options="{rootObjectKey: '$v.age', maxDepth: 2}"></tree-view>
                        </div>

                        <form role="form" action=""  @submit="create_admin(admin)">
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="name">name</label>
                                    <input type="text" class="form-control" id="name" placeholder="Enter name">
                                </div>
                                <div class="form-group">
                                    <label for="email">email</label>
                                    <input type="text" class="form-control" id="email" placeholder="Enter email">
                                </div>
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" class="form-control" id="password" placeholder="password">
                                </div>

                                <div class="form-group">
                                    <label for="password_confirm">password confirm</label>
                                    <input type="password" class="form-control" id="password_confirm" placeholder="password confirm">
                                </div>

                                <div class="form-group">
                                    <label for="name">address</label>
                                    <input type="text" class="form-control" id="address" placeholder="Enter address">
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
    import { required, minLength, between } from 'vuelidate/lib/validators'

    export default {
        name: "Create",
          data(){
              return {
                  name: '',
                  age: 0,
                  form:{
                      name:null,
                      phone:null,
                      address:null,
                      password:null
                  }
              }
          },
        validations: {
            name: {
                required,
                minLength: minLength(4)
            },
            age: {
                between: between(20, 30)
            }
        },

    }
</script>

<style scoped>

</style>
