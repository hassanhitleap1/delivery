import { site_url, api_url } from '../globals'
export  async  function get_all(page = 1,keywords=null)  {
    const response = await axios.get(`${api_url}/user/drivers` ,
        { params: { page: page , keywords:keywords}
        });
    return  response;
}

export  async  function create(driver) {
    const response= axios.post('/api/user/drivers', driver);
    return  response;
}

export  async  function update(driver,id) {
    const response= axios.put('/api/user/drivers/'+id, driver);
    return  response;
}

export  async  function get_one(id) {
    const response = await axios.get(`${api_url}/user/drivers/${id}`);
    return  response;
}

export  async  function _delete(id) {
    const response = await axios.delete(`${api_url}/user/drivers/${id}`);
    return  response;
}








