import config from './config.js';

// console.log(config);
console.log(config);

let commonBaseGet = (url = '', data = {}, header = {}, success = (res) => {}, fail = () => {}) => {
    return wx.request({
        url: config.dev.BASE_HOST + url,
        data: data,
        header: header,
        method: 'get',
        success: success,
        fail: fail
    })
}

let successFn = (res, callback) => {
    if (res || res.statusCode != 200) {
        alert(res.statuscode);
        return;
    } else if (res.error_tip) {
        alert(res.error_tip);
        return;
    } else {
        callback();
    }

}

let baseAjax = (options) => {
    return wx.request({
        url: config.dev.BASE_HOST + options.url,
        data: options.data || {},
        header: options.header || {},
        method: options.method || 'get',
        success: (res) => {
            console.log('调用baseAjax')
            if (res.statusCode != 200) {
                wx.showToast({
                    title: '网络错误',
                    icon: 'loading',
                    duration: 2000
                })
            }
            if (res) {
                options.successFn(res);
            }
        },
        fail: (err) => {
            console.log(err);
            return;
        }
    })
}


export { commonBaseGet, baseAjax };