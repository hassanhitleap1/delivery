import { site_url, api_url } from '../globals'
export  async  function get_shipments() {

    const res = await axios.get(`${api_url}/shipments`).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
}

export  async  function create_shipment(data) {
    const res = await axios.post(`${api_url}/shipments/create`,data).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
}


export  async  function update_shipment(id,data) {
    const res = await axios.put(`${api_url}/shipments/${id}/update`,data).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
}

export  async  function delete_shipment(id) {
    const res = await axios.delete(`${api_url}/shipments/${id}`).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
}

