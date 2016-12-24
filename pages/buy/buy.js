//index.js
//获取应用实例
import test from '../../utils/api.js';
import { baseAjax } from "../../utils/api.js";
var app = getApp();
console.log("test");
console.log(test);
Page({
    data: {
        bannerList: [],
        goodsList: []
    },
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onLoad: function() {
        let that = this;

        baseAjax({
            url: '/api/banner/list?type=1',
            success: function(res) {
                console.log(res.data.banners);
                that.setData({
                    bannerList: res.data.banners
                })
            }
        })

        baseAjax({
            url: '/api/goodsList/list?page=0',
            success: (res) => {
                console.log(res);
                that.setData({
                    goodsList: res.data.goods_lists
                });
                console.log(that.data);
            }
        })
    }
})