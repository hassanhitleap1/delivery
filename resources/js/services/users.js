import { site_url, api_url } from '../globals'
export  async  function get_all() {
    const response = await axios.get(`${api_url}/user/users`);
    return  response;
}

export  async  function create(user) {
    const response= axios.post('/api/user/users', user);
    return  response;
}

export  async  function update(user,id) {
    const response= axios.put('/api/user/users/'+id, user);
    return  response;
}

export  async  function get_one(id) {
    const response = await axios.get(`${api_url}/user/users/${id}`);
    return  response;
}

export  async  function delete_user(id) {
    const response = await axios.delete(`${api_url}/user/users/${id}`);
    return  response;
}





