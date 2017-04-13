import 'whatwg-fetch'
import 'es6-promise'
//import fetchJsonp from 'fetch-jsonp'

// 将对象拼接成 key1=val1&key2=val2&key3=val3 的字符串形式
function obj2params(obj) {
    let result = '';
    for (let item in obj) {
        result += '&' + item + '=' + encodeURIComponent(obj[item]);
    }
    if (result) {
        result = result.slice(1);
    }
    return result;
}

function paramsPrefilter(params) {
    // params = Object.assign(params, {display: 'json'})
    //params['display'] = 'json'
    return params;
}

export function post(url,params) {
    var result=fetch(url,{
        'method':'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'// 默认表单提交
        },
        body:obj2params(paramsPrefilter(params))
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
