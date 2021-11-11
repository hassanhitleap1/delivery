import { site_url, api_url } from '../globals'
export  async  function get_all(page = 1,keywords=null) {
    const response = await axios.get(`${api_url}/regions` );
    return  response;
}

export  async  function create(region) {
    const response=  await axios.post('/api/regions', region);
    return  response;
}

export  async  function update(region,id) {
    const response= axios.put('/api/regions/'+id, region);
    return  response;
}

export  async  function get_region(id) {
    const response = await axios.get(`${api_url}/regions/${id}`);
    return  response;
}

export  async  function _delete(id) {
    const response = await axios.delete(`${api_url}/regions/${id}`);
    return  response;
}





