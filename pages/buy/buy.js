//index.js
//获取应用实例
import test from '../../utils/api.js';
import { baseAjax } from "../../utils/api.js";
var app = getApp();
console.log("test");
console.log(test);
Page({
  data: {
  	bannerList: []
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
  	let that = this;
  	baseAjax({
  		url: '/api/banner/list?type=1',
  		success: function (res) {
  			console.log(res.data.banners);
  			that.setData({
  				bannerList: res.data.banners
  			})
  		},
  	})
  }
})
