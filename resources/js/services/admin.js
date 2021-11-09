import { site_url, api_url } from '../globals'
export  async  function get_admins(page = 1,keywords=null) {
    const response = await axios.get(`${api_url}/user/admins` ,
        { params: { page: page , keywords:keywords}
        });
    return  response;
}

export  async  function create_admin(admin) {
    const response= axios.post('/api/user/admins', admin);
    return  response;
}

export  async  function update_admin(admin,id) {
    const response= axios.put('/api/user/admins/'+id, admin);
    console.log("response",response)
    return  response;
}

export  async  function get_admin(id) {
    const response = await axios.get(`${api_url}/user/admins/${id}`);
    return  response;
}

export  async  function delete_admin(id) {
    const response = await axios.delete(`${api_url}/user/admins/${id}`);
    return  response;
}





