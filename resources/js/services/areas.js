import { site_url, api_url } from '../globals'
export  async  function get_all(page = 1,keywords=null) {
    const response = await axios.get(`${api_url}/areas` );
    return  response;
}

export  async  function create(area) {
    const response= axios.post('/api/areas', area);
    return  response;
}

export  async  function update(area,id) {
    const response= axios.put('/api/areas/'+id, area);
    return  response;
}

export  async  function get_area(id) {
    const response = await axios.get(`${api_url}/areas/${id}`);
    return  response;
}

export  async  function _delete(id) {
    const response = await axios.delete(`${api_url}/areas/${id}`);
    return  response;
}





