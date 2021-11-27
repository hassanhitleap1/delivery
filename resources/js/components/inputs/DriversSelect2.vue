<template>
    <div>
        <Select2 :class="['form-control']"  :options="drivers"  @select="mySelectEvent($event)" />
    </div>
</template>

<script>
import Select2 from 'v-select2-component';
import  * as services from '../../services/drivers';
export default {
    name:'DriversSelect2',
    components: {Select2},
    props: ['index'],
    data(){
        return {
            drivers:[],
 
        }
    },    mounted() {
       this.get_all();
    }, 
    methods: {
        mySelectEvent({id, text}){
            var index=this.index;
            this.$emit('select_driver', {id, text,index });
            
        },
         get_all(){
            services.get_list().then(({data})=>{
                console.log(data)
                    this.drivers=data.data.map( function(driver) {
                        return {id:driver.id,text:driver.name};
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


