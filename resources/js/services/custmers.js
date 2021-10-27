import { site_url, api_url } from '../globals'
export  async  function get_all() {
    const response = await axios.get(`${api_url}/user/custmers`);
    return  response;
}

export  async  function create(custmer) {
    const response= axios.post('/api/user/custmers', custmer);
    return  response;
}

export  async  function update(custmer,id) {
    const response= axios.put('/api/user/custmers/'+id, custmer);
    return  response;
}

export  async  function get_one(id) {
    const response = await axios.get(`${api_url}/user/custmers/${id}`);
    return  response;
}

export  async  function delete_custmer(id) {
    const response = await axios.delete(`${api_url}/user/custmers/${id}`);
    return  response;
}





