import { site_url, api_url } from '../globals'
export  async  function get_shipments() {
    const res = await axios.get(`${api_url}/shipments`);
    return  res;
}

export  async  function create(shipment) {
    const response= axios.post('/api/user/shipments', shipment);
    return  response;
}

export  async  function update_shipment(shipment,id) {
    const response= axios.put('/api/user/shipments/'+id, shipment);
    return  response;
}





