<template>
    <div class="form-group">
        <label for="name">country </label>
        <Select2 :options="countries_serach"  @select="mySelectEvent($event)" />
    </div>
</template>

<script>
import Select2 from 'v-select2-component';
import {mapGetters} from 'vuex';
export default {
    name:'CountriesSelect2',
    components: {Select2},
    props: ['index'],
    mounted() {
      this.$store.dispatch('ContryModule/fetchcountries');
    }, computed: {
        ...mapGetters('ContryModule', ['countries']),
        countries_serach: function () {
            return this.countries.map( function(country) {
                return {id:country.id,text:country.name};
            });
        },
    },
    methods: {
        mySelectEvent({id, text}){
            var index=this.index;
            this.$emit('select_country', {id, text,index });
            
        }
    }
}
</script>


