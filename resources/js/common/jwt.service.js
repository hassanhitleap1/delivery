const ID_API_TOKEN = 'token';
import axios from 'axios';
export const JSON_HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'Authorization': `Bearer ${getToken()}`,
};
export function getToken(){
     return   localStorage.getItem(ID_API_TOKEN) ;
}
export const setToken = token => {
    localStorage.setItem(ID_API_TOKEN, token);
};
export async function   refreshToken (){
   const response = await  axios.post('api/auth/refresh',{headers :JSON_HEADERS}).then(({data}) => {
       console.log(response);
       localStorage.setItem('token', data.access_token)
       localStorage.setItem('token_type', data.token_type)
       localStorage.setItem('expires_in', data.expires_in)
   })
}
export const unsetToken = () => {
    localStorage.removeItem(ID_API_TOKEN);
};

export default {getToken, setToken, unsetToken ,JSON_HEADERS };
