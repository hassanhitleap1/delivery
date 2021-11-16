import { site_url, api_url } from '../globals'
import {options} from "../common/jwt.service";
export  async  function get_admins(page = 1,keywords=null) {
    const response = await axios.get(`${api_url}/user/admins` ,
        { params: { page: page , keywords:keywords}
        },options);
    return  response;
}

export  async  function create_admin(admin) {
    options.push({data:admin});
    const response= axios.post('/api/user/admins', options);
    return  response;
}

export  async  function update_admin(admin,id) {
    options.push({data:admin});
    const response= axios.put('/api/user/admins/'+id, options);
    return  response;
}

export  async  function get_admin(id) {
    const response = await axios.get(`${api_url}/user/admins/${id}`,options);
    return  response;
}

export  async  function delete_admin(id) {
    const response = await axios.delete(`${api_url}/user/admins/${id}`,options);
    return  response;
}





