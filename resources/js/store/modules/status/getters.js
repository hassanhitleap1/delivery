const getters={
    status: state => {
        return state.status
    },
    all_status:(state)=>{
        axios.get(`${api_url}/status`)
            .then(response => {
                return response.data;
            });
    }
}
export  default getters;
