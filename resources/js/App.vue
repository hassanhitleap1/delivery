<template>
    <div>
        <Navbar />
        <Sidebar />
        <router-view></router-view>
        <Footer />
    </div>
</template>

<script>
    import  Navbar from "./components/Navbar";
    import  Sidebar from "./components/Sidebar";
    import  Footer from "./components/Footer";

    export default {
        name: "App",
        components:{
            Navbar,Sidebar,Footer
        }

    };
</script>

