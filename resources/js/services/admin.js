import { site_url, api_url } from '../globals'
import {JSON_HEADERS} from "../common/jwt.service";

export  async  function get_admins(page = 1,keywords=null) {
    let options = {
        headers :JSON_HEADERS,
        params: { page: page , keywords:keywords}};
    let  response = await axios.get(`${api_url}/user/admins` ,options);
    return response;
}

export  async  function create_admin(admin) {
    const response= axios.post('/api/user/admins', admin ,{headers :JSON_HEADERS});
    return  response;
}

export  async  function update_admin(admin,id) {
    const response= axios.put('/api/user/admins/'+id, admin, {headers :JSON_HEADERS});
    return  response;
}

export  async  function get_admin(id) {
    const response = await axios.get(`${api_url}/user/admins/${id}`,{headers :JSON_HEADERS});
    return  response;
}

export  async  function delete_admin(id) {
    const response = await axios.delete(`${api_url}/user/admins/${id}`,{headers :JSON_HEADERS});
    return  response;
}





