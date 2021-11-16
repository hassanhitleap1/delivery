import { site_url, api_url } from '../globals'
import {options} from "../common/jwt.service";
export  async  function get_all(page = 1,keywords=null)  {
    const response = await axios.get(`${api_url}/user/users` ,
        { params: { page: page , keywords:keywords}
        },options);
    return  response;
}

export  async  function create(user) {
    options.push({data:user});
    const response= axios.post('/api/user/users', options);
    return  response;
}

export  async  function update(user,id) {
    options.push({data:user});
    const response= axios.put('/api/user/users/'+id, options);
    return  response;
}

export  async  function get_one(id) {
    const response = await axios.get(`${api_url}/user/users/${id}`,options);
    return  response;
}

export  async  function delete_user(id) {
    const response = await axios.delete(`${api_url}/user/users/${id}`,options);
    return  response;
}





