const request_host = "http://localhost:29680";        //启用模拟服务器数据
const request = require('request');
//get http headers

function getRequest(options) {
    var req = options.request;
    var _param = req.body || {};//post
    /*if(!_param.body){
     _param.body = {};
     }*/
    var _header = {
        'Content-Type': 'application/x-www-form-urlencoded'
    };
    var opts = {
        method:"post",
        baseUrl:config.host,
        uri: req.originalUrl,
        headers: _header,
        body:JSON.stringify(_param),
        //agent: false,
        json:false
    };
    request(opts, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            if(body != "") {
                body = JSON.parse(body);
                options.callback(body);
            }else{
                var _header = response.headers;
                var errMsg = _header["tm-header-errmsg"];
                var status = _header["tm-header-status"];
                req.res.status(501).send({status:status,errMsg:errMsg});
                /*options.callback({
                 code:status,
                 message:errMsg
                 });*/
                //response.sendStatus(response.statusCode);
            }

        }else {
            console.log(error);
        }
    })
}
function getCallback(req, res, next) {
    getRequest({
        request:req,
        callback:function (result) {
            res.json(result);
        }
    })
}

const config = {
    host:request_host,
    request:getRequest,
    callback:getCallback,
    message:"配置全局方法..."
};

module.exports = config;