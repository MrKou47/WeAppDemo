//index.js
//获取应用实例
import { baseAjax } from "../../utils/api.js";
var app = getApp();
Page({
    data: {
        bannerList: [],
        goodsList: [],
        page: '',
        no_more: false,
        load_more: true
    },
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onLoad: function() {
        let that = this;
        console.log(that)
        baseAjax({
            url: '/api/banner/list?type=1',
            successFn: (res) => {
                console.log(res.data.banners);
                that.setData({
                    bannerList: res.data.banners
                })
            }
        })
        baseAjax({
            url: '/api/goodsList/list',
            successFn: (res) => {
                console.log(res);
                if (!res.data.page.page) {
                    that.setData({
                        no_more: true
                    });
                }
                that.setData({
                    goodsList: res.data.goods_lists,
                    page: res.data.page.page
                });
                console.log(that.data);
            }
        })
    },
    loadMore: function(e) {
        var that = this,
            goodsList = that.data.goodsList;
        console.log('加载更多');
        that.setData({
            load_more: false
        })
        if (that.data.no_more) {
            return;
        } else {
            baseAjax({
                url: '/api/goodsList/list?page=' + that.data.page,
                success: (res) => {
                    if (!res.data.page.page) {
                        that.data.no_more = true;
                        return;
                    } else {
                        that.setData({
                            load_more: false,
                            page: res.data.page.page
                        })
                        console.log(res.data.goods_lists);
                        goodsList = goodsList.concat(res.data.goods_lists);
                        var i = JSON.stringify(goodsList);
                        console.log(i.length)
                        console.log(goodsList)
                        that.data.goodsList = goodsList;
                    }
                }
            })
        }
    }
})