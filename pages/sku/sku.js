import { baseAjax } from '../../utils/api.js';
var app = getApp();
Page({
    data: {

    },
    onLoad: function(options) {
        let that = this;
        console.log(options);
        if (!options && options.sku_id) {
            wx.showToast({
                title: '无效的商品ID',
                icon: 'loading',
                duration: 2000
            })
        } else {
            baseAjax({
                url: '/api/sku?method=info&sku_id=' + options.sku_id,
                successFn: (res) => {
                    console.log(res);
                }
            })
        }
    }
})