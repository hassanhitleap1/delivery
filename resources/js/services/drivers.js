import { site_url, api_url } from '../globals'
import {options} from "../common/jwt.service";
export  async  function get_all(page = 1,keywords=null)  {
    const response = await axios.get(`${api_url}/user/drivers` ,
        { params: { page: page , keywords:keywords}
        },options);
    return  response;
}

export  async  function create(driver) {
    options.push({data:driver});
    const response= axios.post('/api/user/drivers', options);
    return  response;
}

export  async  function update(driver,id) {
    options.push({data:driver});
    const response= axios.put('/api/user/drivers/'+id, options);
    return  response;
}

export  async  function get_one(id) {
    const response = await axios.get(`${api_url}/user/drivers/${id}`,options);
    return  response;
}

export  async  function _delete(id) {
    const response = await axios.delete(`${api_url}/user/drivers/${id}`,options);
    return  response;
}








