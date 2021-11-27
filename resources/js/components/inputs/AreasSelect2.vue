<template>
     <div class="form-group">
        <label for="name">areas </label>
        <Select2 :options="areas"  @select="mySelectEvent($event)" />
    </div>
</template>

<script>
import Select2 from 'v-select2-component';
import  * as services from '../../services/areas';
export default {
    name:'AreasSelect2',
    components: {Select2},
    props: ['index'],
    data(){
        return {
            areas:[],
 
        }
    },    mounted() {
       this.get_all();
    }, 
    methods: {
        mySelectEvent({id, text}){
            var index=this.index;
            this.$emit('select_area', {id, text,index });
            
        },
         get_all(){
            services.get_list().then(({data})=>{
                    this.areas=data.data.map( function(driver) {
                        return {id:area.id,text:area.name};
                    });
            }).catch(({response}) => {
                if(chkeckedAuthApi(response)){
                    return ;
                }
            });
        }
    }
}
</script>


