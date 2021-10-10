const  mutations={
    CREATE_State(state, statu) {
        state.status.unshift(statu)
    },
    FETCH_status(state, status) {
        return state.status = status
    },
    DELETE_State(state, statu) {
        let index = state.status.findIndex(item => item.id === statu.id)
        state.status.splice(index, 1)
    },

    cerate:(state,statu)=>{
        let list=state.status;
        list.unshift(statu);
        state.status=list;
    },
    delete:(state,statu)=>{
        let list=state.status;
        this.axios
            .delete(`${api_url}/status/${id}`)
            .then(response => {
                let i = list.map(data => data.id).indexOf(id);
                list.splice(i, 1);
                state.status=list;
            });
    },



};
export default mutations;
