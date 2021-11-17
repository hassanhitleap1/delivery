import { site_url, api_url } from '../globals'
import {JSON_HEADERS} from "../common/jwt.service";

export  async  function get_all(page = 1,keywords=null) {
    const response = await axios.get(`${api_url}/status`,{headers :JSON_HEADERS} );
    return  response;
}

export  async  function create(statu) {
    let options = {
        headers :JSON_HEADERS,
        data: statu
    };
    const response= axios.post('/api/status', options);
    return  response;
}

export  async  function update(statu,id) {
    let options = {
        headers :JSON_HEADERS,
        data: statu
    };
    const response= axios.patch('/api/status/'+id, options);
    return  response;
}

export  async  function get_statu(id) {
    const response = await axios.get(`${api_url}/status/${id}`,{headers :JSON_HEADERS});
    return  response;
}

export  async  function _delete(id) {
    const response = await axios.delete(`${api_url}/status/${id}`,{headers :JSON_HEADERS});
    return  response;
}





