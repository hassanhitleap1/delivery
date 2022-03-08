import { site_url, api_url } from '../globals'
import {JSON_HEADERS} from "../common/jwt.service";

export  async  function get_wallets(page = 1,keywords=null) {
    let options = {
        headers :JSON_HEADERS,
        params: { page: page , keywords:keywords}};
    let  response = await axios.get(`${api_url}/wallets` ,options);
    return response;
}

export  async  function create_wallet(admin) {
    const response= axios.post(`${api_url}/wallets`, admin ,{headers :JSON_HEADERS});
    return  response;
}

export  async  function update_wallet(wallet,id) {
    const response= axios.put(`${api_url}/wallets/${id}`, wallet, {headers :JSON_HEADERS});
    return  response;
}

export  async  function get_wallet(id) {
    const response = await axios.get(`${api_url}/wallets/${id}`,{headers :JSON_HEADERS});
    return  response;
}







