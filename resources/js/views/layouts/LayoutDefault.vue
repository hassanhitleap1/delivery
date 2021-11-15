<template>
    <div class="LayoutDefault">
        <Navbar />
        <Sidebar />
        <div class="content-wrapper">
            <Contentheader />
            <slot/>
        </div>
        <Footer />
    </div>
</template>

<script>
import Contentheader from "../../components/Contentheader";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

export default {
    name: `LayoutDefault`,
    components:{
        Contentheader,
        Navbar,Sidebar,Footer
    }

};
</script>
