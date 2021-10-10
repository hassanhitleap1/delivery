import { site_url, api_url } from '../globals';

export  async  function get_status() {
    const res = await axios.get(`${api_url}/status`).then(function (response) {
    }).catch(function (error) {
        console.log(error);
    });
}

export  async  function create_status(data) {
    const res = await axios.post(`${api_url}/status/create`,data).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
}


export  async  function update_status(id,data) {
    const res = await axios.put(`${api_url}/status/${id}/update`,data).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
}

export  async  function delete_custmer(id) {
    const res = await axios.delete(`${api_url}/status/${id}`).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
}

