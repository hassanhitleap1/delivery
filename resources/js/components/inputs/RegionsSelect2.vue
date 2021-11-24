<template>
    <div>
        <Select2 v-model="myValue" :options="regions_serach" :settings="{ settingOption: value, settingOption: value }" @change="myChangeEvent($event)" @select="mySelectEvent($event)" />
        <h4>Value: {{ myValue }}</h4>
    </div>
</template>

<script>
import Select2 from 'v-select2-component';
import {mapGetters} from 'vuex';
export default {
    name:'RegionsSelect2',
    components: {Select2},
    data() {
        return {
            myValue: 1,
            value:1,
        }
    }, mounted() {
        this.$store.dispatch('RegionModule/fetchregions');
    }, computed: {
        ...mapGetters('RegionModule', ['regions']),
        regions_serach: function () {
            return this.regions.map( function(region) {
                return {id:region.id,text:region.name};
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


