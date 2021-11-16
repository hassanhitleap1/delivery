<template>
    <layout name="LayoutDefault">
        <!-- Main content -->
        <section class="content">
            <div class="container-fluid">
                <!-- Small boxes (Stat box) -->
                <div class="row">
                    <div v-for="(index ,data) in usersDate" class="col-lg-3 col-6" :key="index">
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
    </layout>
</template>

<script>
import Layout from '../views/layouts/Layout';
import {get_dara_dashboard} from "../services/home";
import AWN from "awesome-notifications";
export default {
    name: `Home`,
    data(){
        return {
            usersDate:{},
            classBux:["bg-info","bg-success","bg-warning","bg-danger"],
            iconBox:["ion-bag","ion-stats-bars","ion-person-add","ion-pie-graph"]
        }
    },
    components: {
        Layout,
    },mounted() {
        get_dara_dashboard().then(({data}) => {
            this.usersDate= data;
        }).catch((errors) => {
            new AWN().warning('sumthing error', {durations: {warning: 0}})
        })
    }
};
</script>
