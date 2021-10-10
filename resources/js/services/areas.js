import { site_url, api_url } from '../globals'
export  async  function get_dara_custmer() {

    const res = await axios.get(`${api_url}/areas`).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
}

export  async  function create_custmer(data) {
    const res = await axios.post(`${api_url}/areas/create`,data).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
}


export  async  function update_custmer(id,data) {
    const res = await axios.put(`${api_url}/areas/${id}/update`,data).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
}

export  async  function delete_custmer(id) {
    const res = await axios.delete(`${api_url}/areas/${id}`).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
}

