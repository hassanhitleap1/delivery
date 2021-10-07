const  mutations={
    cerate:(state,custmer)=>{
        let list=state.custmers;
        list.unshift(custmer);
        state.custmers=list;
    },

};
export default mutations;
