const  mutations={
    cerate:(state,price)=>{
        let list=state.prices;
        list.unshift(price);
        state.prices=list;
    },

};
export default mutations;
