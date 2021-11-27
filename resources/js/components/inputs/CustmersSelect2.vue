<template>
    <div class="form-group">
        <label for="name">customer </label>
        <Select2   :options="custmers"  @select="mySelectEvent($event)" />
    </div>
</template>

<script>
import Select2 from 'v-select2-component';
import  * as services from '../../services/custmers';
export default {
    name:'CustmersSelect2',
    components: {Select2},
    props: ['index'],
    data(){
        return {
            custmers:[],
 
        }
    },    mounted() {
       this.get_all();
    }, 
    methods: {
        mySelectEvent({id, text}){
            var index=this.index;
            this.$emit('select_custmer', {id, text,index });
            
        },
         get_all(){
            services.get_list().then(({data})=>{
                console.log(data)
                    this.custmers=data.data.map( function(custmer) {
                        return {id:custmer.id,text:custmer.name};
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


