import 'whatwg-fetch'
import 'es6-promise'
//import fetchJsonp from 'fetch-jsonp'

export function post(url,params) {
    var result=fetch(url,{
        'method':'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'// 默认表单提交
        },
        body:params
    })
    return result
}
export function get(url,params) {
    var result=fetch(url, {
        credentials: 'include',// 请求默认带 cookie
        headers: {
            'Accept': 'application/json, text/plain, */*'
        },
        mode: 'no-cors'
    })

    return result
}
/*
export function getJsonp (url, data) {
     //data = obj2params(data);
     /!*if (data) {
         url += (url.indexOf('?') === -1 ? '?' : '&') + data;
     }*!/
     let result = fetchJsonp(url, {
         // jsonpCallback: 'jsoncallback',
         timeout: 3000
     });
     return result;
 }
*/
