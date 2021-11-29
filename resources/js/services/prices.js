import { api_url } from '../globals'
import {JSON_HEADERS} from "../common/jwt.service";

export  async  function get_all(page = 1,keywords=null) {
    let options = {
        headers :JSON_HEADERS,
        params: { page: page , keywords:keywords}};
    let  response = await axios.get(`${api_url}/prices` ,options);
    return response;
}

export  async  function create(price) {
    const response= axios.post(`${api_url}/prices`, price ,{headers :JSON_HEADERS});
    return  response;
}

export  async  function update(price,id) {
    const response= axios.put(`${api_url}/prices/${id}`, price, {headers :JSON_HEADERS});
    return  response;
}

export  async  function get_one(id) {
    const response = await axios.get(`${api_url}/prices/${id}`,{headers :JSON_HEADERS});
    return  response;
}

export  async  function _delete(id) {
    const response = await axios.delete(`${api_url}/prices/${id}`,{headers :JSON_HEADERS});
    return  response;
}





