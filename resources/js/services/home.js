import { site_url, api_url } from '../globals';


import {JSON_HEADERS, refreshToken} from "../common/jwt.service";

export  async  function get_dara_dashboard() {
    let  response = await axios.get(`${api_url}/dashboard`,{headers :JSON_HEADERS});
    console.log(response)
    return response
}


