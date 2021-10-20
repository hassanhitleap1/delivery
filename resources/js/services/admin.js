import { site_url, api_url } from '../globals'
export  async  function get_users() {

    const res = await axios.get(`${api_url}/users`).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
}

export  async  function create_user(data) {
    const res = await axios.post(`${api_url}/users/create`,data).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
}


export  async  function update_user(id,data) {
    const res = await axios.put(`${api_url}/users/${id}/update`,data).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
}

export  async  function delete_user(id) {
    const res = await axios.delete(`${api_url}/users/${id}`).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
}

