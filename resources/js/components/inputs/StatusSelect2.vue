<template>
     <div class="form-group">
        <label for="name">status </label>
        <Select2  :options="status_serach"  @select="mySelectEvent($event)" />
    </div>
</template>

<script>
import Select2 from 'v-select2-component';
import {mapGetters} from 'vuex';
export default {
    name:'StatusSelect2',
    components: {Select2},
    props: ['index'],
    mounted() {
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
        mySelectEvent({id, text}){
            var index=this.index;
            this.$emit('select_status', {id, text,index });
            
        }
    }
}
</script>


