import { site_url, api_url } from '../globals'
import {options} from "../common/jwt.service";
export  async  function get_all(page = 1,keywords=null) {
    const response = await axios.get(`${api_url}/countries` ,options);
    return  response;
}

export  async  function create(country) {
    options.push({data:country});
    const response=  await axios.post('/api/countries', options);
    return  response;
}

export  async  function update(country,id) {
    options.push({data:country});
    const response= axios.put('/api/countries/'+id, options);
    return  response;
}

export  async  function get_country(id) {
    const response = await axios.get(`${api_url}/countries/${id}`,options);
    return  response;
}

export  async  function _delete(id) {
    const response = await axios.delete(`${api_url}/countries/${id}`,options);
    return  response;
}





