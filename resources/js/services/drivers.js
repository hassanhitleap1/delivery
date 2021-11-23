import { site_url, api_url } from '../globals'
import {JSON_HEADERS} from "../common/jwt.service";

export  async  function get_all(page = 1,keywords=null)  {
    let options = {
        headers :JSON_HEADERS,
        params: { page: page , keywords:keywords}};
    const response = await axios.get(`${api_url}/user/drivers` ,options);
    return  response;
}

export  async  function create(driver) {
    const response= axios.post('/api/user/drivers', driver, {headers :JSON_HEADERS});
    return  response;
}

export  async  function update(driver,id) {
    const response= axios.put('/api/user/drivers/'+id, driver, {headers :JSON_HEADERS});
    return  response;
}

export  async  function get_one(id) {
    const response = await axios.get(`${api_url}/user/drivers/${id}`,{headers :JSON_HEADERS});
    return  response;
}

export  async  function _delete(id) {
    const response = await axios.delete(`${api_url}/user/drivers/${id}`,{headers :JSON_HEADERS});
    return  response;
}


export  async  function get_list()  {
    const response = await axios.get(`${api_url}/user/drivers/list-drivers`,{headers :JSON_HEADERS});
    return  response;
}






