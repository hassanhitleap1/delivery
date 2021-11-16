const ID_API_TOKEN = 'token';

export  const options = {
    headers: {'Authorization': `Bearer  ${getToken}`}
};

export const getToken = () => {
    return window.localStorage.getItem(ID_API_TOKEN)
};

export const setToken = token => {
    window.localStorage.setItem(ID_API_TOKEN, token);
};

export const unsetToken = () => {
    window.localStorage.removeItem(ID_API_TOKEN);
};

export default {getToken, setToken, unsetToken ,options}
