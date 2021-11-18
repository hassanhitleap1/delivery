const ID_API_TOKEN = 'token';
import axios from 'axios';
import $ from 'jquery'
export const JSON_HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'Authorization': `Bearer ${getToken()}`,
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
};
export function getToken(){
     return   localStorage.getItem(ID_API_TOKEN) ;
}
export const setToken = token => {
    localStorage.setItem(ID_API_TOKEN, token);
};
export async function   refreshToken (){
    let data = { _method: "POST" ,_token:$('meta[name="csrf-token"]').attr('content') };
   const response = await  axios.post('/api/auth/refresh',{headers :JSON_HEADERS,data:data }).then(({data}) => {
      
       localStorage.setItem('token', data.access_token)
       localStorage.setItem('token_type', data.token_type)
       localStorage.setItem('expires_in', data.expires_in)
   })
}
export const unsetToken = () => {
    localStorage.removeItem(ID_API_TOKEN);
};

export default {getToken, setToken, unsetToken ,JSON_HEADERS };
