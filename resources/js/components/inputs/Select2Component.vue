<template>
    <div>
        <Select2 v-model="myValue" :options="myOptions" :settings="{ settingOption: value, settingOption: value }" @change="myChangeEvent($event)" @select="mySelectEvent($event)" />
        <h4>Value: {{ myValue }}</h4>
    </div>
</template>
<script>
import Select2 from 'v-select2-component';
export default {
    name:'Select2Component',
    components: {Select2},
    data() {
        return {
            myValue: 1,
            value:1,
            myOptions: ['op1', 'op2', 'op3'] // or [{id: key, text: value}, {id: key, text: value}]
        }
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
