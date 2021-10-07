const  mutations={
    cerate:(state,area)=>{
        let list=state.areas;
        list.unshift(area);
        state.areas=list;
    },

};
export default mutations;
