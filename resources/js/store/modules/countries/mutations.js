const  mutations={
    cerate:(state,country)=>{
        let list=state.countries;
        list.unshift(country);
        state.countries=list;
    },

};
export default mutations;
