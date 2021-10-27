import { site_url, api_url } from '../globals'
export  async  function get_driver() {
    const res = await axios.get(`${api_url}/user/drivers`).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });

}

export  async  function create(driver) {
    const response= axios.post('/api/user/drivers', driver);
    return  response;
}

export  async  function update_driver(driver,id) {
    const response= axios.put('/api/user/drivers/'+id, driver);
    return  response;
}





