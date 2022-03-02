import {  api_url } from '../globals';


import {JSON_HEADERS, refreshToken} from "../common/jwt.service";

export  async  function get_dara_dashboard() {
    let  response = await axios.get(`${api_url}/dashboard`,{headers :JSON_HEADERS});
    if(response.code == 602){
        vm.$router.push({name: "login"});
    }
    return response
}


