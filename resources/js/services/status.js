import { site_url, api_url } from '../globals'
import {JSON_HEADERS} from "../common/jwt.service";

export  async  function get_all(page = 1,keywords=null) {
    const response = await axios.get(`${api_url}/status`,{headers :JSON_HEADERS} );
    return  response;
}

export  async  function create(statu) {
   
    const response= axios.post('/api/status', statu, {headers :JSON_HEADERS});
    return  response;
}

export  async  function update(statu,id) {
 
    const response= axios.patch('/api/status/'+id, statu, {headers :JSON_HEADERS});
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





