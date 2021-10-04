export  async  function get_dara_dashboard() {
    console.log(Vue.$api_url);
    const res = await axios.get(`${Vue.$api_url}/dashboard`).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
}


