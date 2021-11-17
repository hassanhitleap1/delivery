import { site_url, api_url } from '../globals'
import {JSON_HEADERS} from "../common/jwt.service";

export  async  function get_dara_dashboard() {
    const res = await axios.get(`${api_url}/dashboard`,{headers :JSON_HEADERS});
    return res
}


