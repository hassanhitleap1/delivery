import { site_url, api_url } from '../globals'
import {JSON_HEADERS} from "../common/jwt.service";

export  async  function get_all(page = 1,keywords=null)  {
    let options = {
        headers :JSON_HEADERS,
        params: { page: page , keywords:keywords}};
    const response = await axios.get(`${api_url}/user/users` ,options);
    return  response;
}

export  async  function create(user) {
 
    const response= axios.post('/api/user/users',user, {headers :JSON_HEADERS});
    return  response;
}

export  async  function update(user,id) {

    const response= axios.put('/api/user/users/'+id, user, {headers :JSON_HEADERS});
    return  response;
}

export  async  function get_one(id) {
    const response = await axios.get(`${api_url}/user/users/${id}`,{headers :JSON_HEADERS});
    return  response;
}

export  async  function delete_user(id) {
    const response = await axios.delete(`${api_url}/user/users/${id}`,{headers :JSON_HEADERS});
    return  response;
}





