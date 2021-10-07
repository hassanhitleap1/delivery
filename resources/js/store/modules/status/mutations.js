const  mutations={
    cerate:(state,statu)=>{
        let list=state.status;
        list.unshift(statu);
        state.status=list;
    },

};
export default mutations;
