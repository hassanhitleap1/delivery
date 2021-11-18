<template>
    <layout name="LayoutDefault">
        <section class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="container">
                        <div class="centered">
                          <h1>  Nonauthorized</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </layout>
</template>

<script>
import Layout from "../layouts/Layout";
export default {
    name: "Nonauthorized",
    components:{
        Layout,
    },
}
</script>

<style scoped>
.centered {
    display: table-cell;
    height: 400px;
    width: 800px;
    text-align: center;
    vertical-align: middle;
}
</style>
