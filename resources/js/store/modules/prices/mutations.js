const  mutations={
    cerate:(state,shipment)=>{
        let list=state.shipments;
        list.unshift(shipment);
        state.shipments=list;
    },

};
export default mutations;
