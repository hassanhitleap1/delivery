import {getTypeUser} from "./jwt.service";
import route from "../router";

export const ADMIN=1;
export const USER=2;
export const DRIVER=3;
export const CUSTOMER=4;
export const roules =[
    {
        action : "admins",
        roulesType:[ADMIN]
    },
    {
        action : "drivers",
        roulesType:[ADMIN,USER]
    },
    {
        action : "users",
        roulesType:[ADMIN,DRIVER]
    },
    {
        action : "customers",
        roulesType:[ADMIN]
    },
];


export function allowRules(action){
    const type=getTypeUser();
    var roule = roules.filter(function (el) {
        return  el.action == action;
    })[0];
    if(!roule.roulesType.includes(type)){
        route.push({ 'name': 'Nonauthorized' });
    }
}
export default {allowRules,roules,ADMIN,USER,DRIVER,CUSTOMER}
