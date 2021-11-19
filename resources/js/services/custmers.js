import { site_url, api_url } from '../globals'
import {JSON_HEADERS} from "../common/jwt.service";

export  async  function get_all(page = 1,keywords=null)  {
    let options = {
        headers :JSON_HEADERS,
        params: { page: page , keywords:keywords}};
    const response = await axios.get(`${api_url}/user/custmers` ,options);
    return  response;
}

export  async  function create(custmer) {
     const response= axios.post('/api/user/custmers', custmer,{headers :JSON_HEADERS});
    return  response;
}

export  async  function update(custmer,id) {
    const response= axios.put('/api/user/custmers/'+id,custmer,{headers :JSON_HEADERS});
    return  response;
}

export  async  function get_one(id) {
    const response = await axios.get(`${api_url}/user/custmers/${id}`,{headers :JSON_HEADERS});
    return  response;
}

export  async  function _delete(id) {
    const response = await axios.delete(`${api_url}/user/custmers/${id}`,{headers :JSON_HEADERS});
    return  response;
}





