import { site_url, api_url } from '../globals';
import {options} from "../common/jwt.service";

export  async  function get_all(page = 1,keywords=null) {
    const response = await axios.get(`${api_url}/areas`,options );
    return  response;
}

export  async  function create(area) {
    options.push({data:area});
    const response= axios.post('/api/areas', area);
    return  response;
}

export  async  function update(area,id) {
    options.push({data:area});
    const response= axios.put('/api/areas/'+id, options);
    return  response;
}

export  async  function get_area(id) {
    options.push({data:area});
    const response = await axios.get(`${api_url}/areas/${id}`,options);
    return  response;
}

export  async  function _delete(id) {
    options.push({data:area});
    const response = await axios.delete(`${api_url}/areas/${id}`,options);
    return  response;
}


export  async  function get_areas_region(region_id) {
    const response = await axios.get(`${api_url}/areas`,options );
    return  response;
}





