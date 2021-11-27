<template>
    <div>
        <Select2 :class="['form-control']"  :options="regions_serach"  @select="mySelectEvent($event)" />
    </div>
</template>

<script>
import Select2 from 'v-select2-component';
import {mapGetters} from 'vuex';
export default {
    name:'RegionsSelect2',
    components: {Select2},
    props: ['index'],
    mounted() {
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
        mySelectEvent({id, text}){
            var index=this.index;
            this.$emit('select_region', {id, text,index });
            
        }
    }
}
</script>





