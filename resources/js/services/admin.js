import { site_url, api_url } from '../globals'
export  async  function get_admin() {
    const res = await axios.get(`${api_url}/user/admins`).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });

}

export  async  function create_admin(admin) {
    const response= axios.post('/api/user/admins', admin);
    return  response;
}

export  async  function update_admin(admin,id) {
    const response= axios.put('/api/user/admins/'+id, admin);
    console.log("response",response)
    return  response;
}





