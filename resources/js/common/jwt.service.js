import AWN from "awesome-notifications";
import axios from 'axios';
import $ from 'jquery'
import route from "../router";
const ID_API_TOKEN = 'token';

export const JSON_HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'Authorization': `Bearer ${getToken()}`,
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
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
       return true;
   }).then(res=> {
       return false;
   })
}
export const unsetToken = () => {
    localStorage.removeItem(ID_API_TOKEN);
};

export async function   chkeckedAuthApi(response){
    if(response.data.code==601){
        if(refreshToken()){
            return true;
        };
        route.push({ 'name': 'login' });
    }else if(response.data.code==602 || response.data.code==600 ){
        route.push({ 'name': 'login' });
    }else {
        new AWN().warning('sumthing error', {durations: {warning: 0}})
        return false;
    }
}
export default {getToken, setToken, unsetToken ,JSON_HEADERS ,chkeckedAuthApi};
