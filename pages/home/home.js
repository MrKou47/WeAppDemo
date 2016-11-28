//index.js
//获取应用实例
import { commonBaseGet as baseGet } from '../../utils/api.js';
var app = getApp();
console.log('success init home.js')
Page({
    data: {
        title: '',
        motto: 'Hello World',
        userInfo: {},
        initData: {},
        bannerData: {}
    },
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../cart/cart'
        })
    },
    onLoad: function(options) {
        var _this = this;
        console.log('main page has been onload');
        baseGet(
            '/api/banner/list?type=0', {}, {},
            (res) => {
                if (res && res.statusCode != 200) {
                    console.log('接口出错');
                    return;
                } else {
                    console.log(res.data);
                    _this.data.bannerData = res.data;
                }
            },
            () => {

            });
        baseGet(
            '/api/article/headline?method=list', {}, {},
            (res) => {
                if (res && res.statusCode != 200) {
                    console.log('接口出错');
                    return;
                } else {
                    console.log(res.data);
                    _this.data.initData = res.data;
                }
            },
            () => {

            });
    }
})