import { site_url, api_url } from '../globals'
import {JSON_HEADERS, options} from "../common/jwt.service";
export  async  function get_all(page = 1,keywords=null) {
    const response = await axios.get(`${api_url}/regions` ,{headers :JSON_HEADERS});
    return  response;
}

export  async  function create(region) {
    let options = {
        headers :JSON_HEADERS,
        data: region
    };
    const response=  await axios.post('/api/regions',options);
    return  response;
}

export  async  function update(region,id) {
    let options = {
        headers :JSON_HEADERS,
        data: region
    };
    const response= axios.put('/api/regions/'+id,options);
    return  response;
}

export  async  function get_region(id) {
    const response = await axios.get(`${api_url}/regions/${id}`,{headers :JSON_HEADERS});
    return  response;
}

export  async  function _delete(id) {
    const response = await axios.delete(`${api_url}/regions/${id}`,{headers :JSON_HEADERS});
    return  response;
}





