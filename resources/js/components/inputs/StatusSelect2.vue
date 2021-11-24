<template>
    <div>
        <Select2 v-model="myValue" :options="status_serach" :settings="{ settingOption: value, settingOption: value }" @change="myChangeEvent($event)" @select="mySelectEvent($event)" />
        <h4>Value: {{ myValue }}</h4>
    </div>
</template>

<script>
import Select2 from 'v-select2-component';
import {mapGetters} from 'vuex';
export default {
    name:'StatusSelect2',
    components: {Select2},
    data() {
        return {
            myValue: 1,
            value:1,
        }
    }, mounted() {
        this.$store.dispatch('StatusModule/fetchstatus');
    }, computed: {
        ...mapGetters('StatusModule', ['status']),
        status_serach: function () {
            return this.status.map( function(statu) {
                return {id:statu.id,text:statu.name};
            });
        },
    },
    methods: {
        myChangeEvent(val){
            console.log(val);
        },
        mySelectEvent({id, text}){
            console.log({id, text})
        }
    }
}
</script>


