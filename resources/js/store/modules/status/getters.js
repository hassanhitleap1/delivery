const getters={
    all_status:(state)=>{
        axios.get(`${api_url}/status`)
            .then(response => {
                return response.data;
            });
    }
}
export  default getters;
