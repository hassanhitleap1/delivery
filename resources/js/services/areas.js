import { site_url, api_url } from '../globals';
import {JSON_HEADERS} from "../common/jwt.service";


export  async  function get_all(page = 1,keywords=null) {
    let options = {
        headers :JSON_HEADERS,
        params: { page: page , keywords:keywords}};
    const response = await axios.get(`${api_url}/areas`,options );
    return  response;
}

export  async  function create(area) {

    const response= axios.post('/api/areas',area, {headers :JSON_HEADERS});
    return  response;
}

export  async  function update(area,id) {
    const response= axios.put('/api/areas/'+id, area, {headers :JSON_HEADERS});
    return  response;
}

export  async  function get_area(id) {
    const response = await axios.get(`${api_url}/areas/${id}`,{ headers :JSON_HEADERS});
    return  response;
}

export  async  function _delete(id) {
    const response = await axios.delete(`${api_url}/areas/${id}`,{headers :JSON_HEADERS});
    return  response;
}


export  async  function get_areas_region(region_id) {
    const response = await axios.get(`${api_url}/areas`,{headers :JSON_HEADERS} );
    return  response;
}

export  async  function get_list()  {
    const response = await axios.get(`${api_url}/areas/list-areas`,{headers :JSON_HEADERS});
    return  response;
}





