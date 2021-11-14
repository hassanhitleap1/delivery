import { site_url, api_url } from '../globals'
export  async  function get_all(page = 1,keywords=null) {
    const response = await axios.get(`${api_url}/status` );
    return  response;
}

export  async  function create(statu) {
    const response= axios.post('/api/status', statu);
    return  response;
}

export  async  function update(statu,id) {
    const response= axios.patch('/api/status/'+id, statu);
    return  response;
}

export  async  function get_statu(id) {
    const response = await axios.get(`${api_url}/status/${id}`);
    return  response;
}

export  async  function _delete(id) {
    const response = await axios.delete(`${api_url}/status/${id}`);
    return  response;
}





