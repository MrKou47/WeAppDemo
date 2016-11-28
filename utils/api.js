import config from './config.js';

// console.log(config);
console.log(config);

let commonBaseGet = (url = '', data = {}, header = {}, success = (res)=> {}, fail= () =>{}) => {
    return wx.request({
        url: config.dev.BASE_HOST + url,
        data: data,
        header: header,
        method: 'get',
        success: success,
        fail: fail
    })
} 



export { commonBaseGet };