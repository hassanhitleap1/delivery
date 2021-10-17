<template>

</template>
<script>


    export default {
        components: {
            ValidationObserver,
            ValidationProvider
        },
        data() {
            return {
                form: {
                    identity: '',
                    password: ''
                }
            }
        },
        computed: {
            ...mapGetters("auth", {
                loginErrors: "getLoginErrors"
            })
        },
        methods: {
            signIn() {

                this.$store
                    .dispatch("auth/login", {
                        login: this.form.identity,
                        password: this.form.password
                    })
                    .then(() => this.$router.push({name: "home"}));
            }
        }
    }
</script>
<style>

</style>
