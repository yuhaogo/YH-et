define('client/assets/modules/fetch/request.jsx', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  exports.post = post;
  exports.get = get;
  
  require('node_modules/whatwg-fetch/fetch');
  
  require('node_modules/es6-promise/dist/es6-promise');
  
  //import fetchJsonp from 'fetch-jsonp'
  
  function post(url, params) {
      var result = fetch(url, {
          'method': 'POST',
          credentials: 'include',
          headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/x-www-form-urlencoded' // 默认表单提交
          },
          body: params
      });
      return result;
  }
  
  function get(url, params) {
      var result = fetch(url, {
          credentials: 'include', // 请求默认带 cookie
          headers: {
              'Accept': 'application/json, text/plain, */*'
          },
          mode: 'no-cors'
      });
  
      return result;
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
  //# sourceMappingURL=/modules/fetch/request.js.map
  

});
