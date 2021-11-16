import { site_url, api_url } from '../globals'
import {options} from "../common/jwt.service";
export  async  function get_all(page = 1,keywords=null) {
    const response = await axios.get(`${api_url}/status`,options );
    return  response;
}

export  async  function create(statu) {
    options.push({data:statu});
    const response= axios.post('/api/status', options);
    return  response;
}

export  async  function update(statu,id) {
    options.push({data:statu});
    const response= axios.patch('/api/status/'+id, options);
    return  response;
}

export  async  function get_statu(id) {
    const response = await axios.get(`${api_url}/status/${id}`,options);
    return  response;
}

export  async  function _delete(id) {
    const response = await axios.delete(`${api_url}/status/${id}`,options);
    return  response;
}





