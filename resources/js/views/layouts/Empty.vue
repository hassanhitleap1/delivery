<template>
    <div>
        <Navbar />
        <Sidebar />
        <div class="content-wrapper">
            <Contentheader />
            <router-view></router-view>
        </div>
        <Footer />
    </div>
</template>


<script>
import  Navbar from "./components/Navbar";
import  Sidebar from "./components/Sidebar";
import  Footer from "./components/Footer";
import Contentheader from "./components/Contentheader";

export default {
    name: "App",
    components:{
        Contentheader,
        Navbar,Sidebar,Footer
    }

};
</script>

