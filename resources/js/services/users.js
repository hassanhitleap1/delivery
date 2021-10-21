import { site_url, api_url } from '../globals'
export  async  function get_user() {
    const res = await axios.get(`${api_url}/user/users`).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });

}

export  async  function create_user(user) {
    const response= axios.post('/api/user/users', user);
    return  response;
}

export  async  function update_user(user,id) {
    const response= axios.put('/api/user/users/'+id, user);
    return  response;
}





