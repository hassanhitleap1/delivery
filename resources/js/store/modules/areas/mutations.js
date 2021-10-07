const  mutations={
    cerate:(state,user)=>{
        let list=state.users;
        list.unshift(user);
        state.users=list;
    },

};
export default mutations;
