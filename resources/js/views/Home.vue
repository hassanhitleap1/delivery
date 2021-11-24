<template>
    <Layout name="LayoutDefault">
        <!-- Main content -->
        <section class="content">
            <div class="container-fluid">
                <!-- Small boxes (Stat box) -->
                <div class="row">
                    <div v-for="(data ,index ) in usersDate" class="col-lg-3 col-6" :key="index">
                        <!-- small box -->
                        <div :class="['small-box',classBux[index]]">
                            <div class="inner">
                                <h3>{{ data.count_user }}</h3>

                                <p>{{ data.type_name }}</p>
                            </div>
                            <div class="icon">
                                <i  :class="['ion',iconBox[index]]"></i>
                            </div>
                            <router-link :to="{name:data.type_name}">
                                More info <i class="fas fa-arrow-circle-right"></i>
                            </router-link>
                        </div>
                    </div>
                </div>
                <!-- /.row -->
            </div><!-- /.container-fluid -->
        </section>
        <!-- /.content -->
    </Layout>
</template>

<script>
import Layout from '../views/layouts/Layout';
import {get_dara_dashboard} from "../services/home";
import {chkeckedAuthApi} from "../common/jwt.service";
import {allowRules} from "../common/roules";

export default {
    name: "home",
    data(){
        return {
            usersDate:{},
            classBux:["bg-info","bg-success","bg-warning","bg-danger"],
            iconBox:["ion-bag","ion-stats-bars","ion-person-add","ion-pie-graph"]
        }
    },
    components: {
        Layout,
    },
    created(){
        allowRules('admins');
    },
    mounted() {
        get_dara_dashboard()
            .then(({data}) => {
                 this.usersDate= data.data;
            }).catch(({response}) => {
                if(chkeckedAuthApi(response)){
                     this.get_dara_dashboard();
                    return ;
                }
            })
    }
};
</script>
