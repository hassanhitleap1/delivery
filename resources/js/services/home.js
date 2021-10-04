import { site_url, api_url } from '../globals'
export  async  function get_dara_dashboard() {

    const res = await axios.get(`${api_url}/dashboard`).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
}


