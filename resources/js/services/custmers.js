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
    let options = {
        headers :JSON_HEADERS,
        data: custmer
    };
    const response= axios.post('/api/user/custmers', options);
    return  response;
}

export  async  function update(custmer,id) {
    let options = {
        headers :JSON_HEADERS,
        data: custmer
    };
    const response= axios.put('/api/user/custmers/'+id,options);
    return  response;
}

export  async  function get_one(id) {
    const response = await axios.get(`${api_url}/user/custmers/${id}`,options);
    return  response;
}

export  async  function _delete(id) {
    const response = await axios.delete(`${api_url}/user/custmers/${id}`,options);
    return  response;
}





