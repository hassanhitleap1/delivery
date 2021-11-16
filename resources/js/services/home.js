import { site_url, api_url } from '../globals'
import {options} from "../common/jwt.service";
export  async  function get_dara_dashboard() {
    const res = await axios.get(`${api_url}/dashboard`,options);
    return res
}


