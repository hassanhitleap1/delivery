const  mutations={
    cerate:(state,region)=>{
        let list=state.regions;
        list.unshift(region);
        state.regions=list;
    },

};
export default mutations;
