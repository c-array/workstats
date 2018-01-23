const root = "https://www.warray.cn/work"
const apiAxios = ((method, url, type, data, success, failure) => {
    let headers = '';
    if(type == 'json'){
        headers = {
            'Content-type':'application/json'
        }
    }else{
        headers = {
            'Content-type':'application/x-www-form-urlencoded'
        }
    }
    wx.request({
        method: method,
        url: root + url, //仅为示例，并非真实的接口地址
        data: data,
        header: headers,
        success: function(res) {
            if (res.data) {
                if (parseInt(res.data.status) === 0 && success) {
                    success(res.data.result);
                }else{
                    failure(res.data.message,null);
                }
            } else {
                failure('失败！',null);
                console.log(res.data);
            }
        },
        fail:function(err){
            if (err) {
                console.log(err);
                failure('失败！',err);
                return;
            }
        }
    })
});

// 返回在vue模板中的调用接口
module.exports = {
    get: function (config) {
        return apiAxios('GET', config.url, config.type, config.data, config.success, config.error)
    },
    post: function (config) {
        return apiAxios('POST', config.url, config.type, config.data, config.success, config.error)
    },
    put: function (config) {
        return apiAxios('PUT', config.url, config.type, config.data, config.success, config.error)
    },
    delete: function (config) {
        return apiAxios('DELETE', config.url, config.type, config.data, config.success, config.error)
    }
};