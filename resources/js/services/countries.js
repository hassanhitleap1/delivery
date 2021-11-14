import { site_url, api_url } from '../globals'
export  async  function get_all(page = 1,keywords=null) {
    const response = await axios.get(`${api_url}/countries` );
    return  response;
}

export  async  function create(country) {
    const response=  await axios.post('/api/countries', country);
    return  response;
}

export  async  function update(country,id) {
    const response= axios.put('/api/countries/'+id, country);
    return  response;
}

export  async  function get_country(id) {
    const response = await axios.get(`${api_url}/countries/${id}`);
    return  response;
}

export  async  function _delete(id) {
    const response = await axios.delete(`${api_url}/countries/${id}`);
    return  response;
}





