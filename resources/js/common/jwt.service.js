const ID_API_TOKEN = 'token';

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



export const unsetToken = () => {
    localStorage.removeItem(ID_API_TOKEN);
};

export default {getToken, setToken, unsetToken ,JSON_HEADERS };
