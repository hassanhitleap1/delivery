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


    export default {
        name: "Create",
          data(){
              return {

                  form:{
                      name:null,
                      phone:null,
                      address:null,
                      password:null
                  }
              }
          },


    }
</script>

<style scoped>

</style>
