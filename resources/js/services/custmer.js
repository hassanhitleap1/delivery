import { site_url, api_url } from '../globals'
export  async  function get_custmer() {
    const res = await axios.get(`${api_url}/user/custmers`).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });

}

export  async  function create_custmer(custmer) {
    const response= axios.post('/api/user/custmers', custmer);
    return  response;
}

export  async  function update_custmer(custmer,id) {
    const response= axios.put('/api/user/custmers/'+id, custmer);
    return  response;
}





