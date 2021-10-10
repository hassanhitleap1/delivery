const  mutations={
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
