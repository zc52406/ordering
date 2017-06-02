// pages/index/index.js
var indexUrl = require('../../config').indexUrl;
var saveMemberUrl = require('../../config').saveMemberUrl;
var App = new getApp();

Page({
  data: {
    motto:"欢迎进去订货会系统",
    count: 60,
    font: "../../images/login/font.png",
    logo: "../../images/login/logo.png",
    iphono: "../../images/login/iphono.png",
    password: "../../images/login/password.png",
    iphono5: "../../images/login/iphono5.png",
    iphono4: "../../images/login/iphono4.png",
    iphono3: "../../images/login/iphono3.png",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // 获取手机号码
  savePhoneNumber: function (e) {
    console.log(e.detail.value)
    this.setData({
      phoneNumber: e.detail.value
    });
  },
  // 获取密码
  savePassword: function (e) {
    console.log(e.detail.value)
    this.setData({
      savePassword: e.detail.value
    });
  },
  // 获取验证码
  getValidCode: function () {
    if (this.data.phoneNumber && this.data.count == 60) {
      this.tick()
    } else if (!this.data.phoneNumber) {
      wx.showToast({
        title: '请填写电话号码',
        icon: 'loading',
        duration: 1000
      })
    }
  },
  tick: function () {
    var vm = this
    if (vm.data.count > 0) {
      vm.setData({
        count: vm.data.count - 1
      });
      setTimeout(function () {
        return vm.tick()
      }, 1000)
    } else {
      vm.setData({
        count: 60
      });
    }
  },
  // 填写验证码
  identCode:function(e){
    console.log(e.detail.value)
    this.setData({
      identCode: e.detail.value
    });
  },
  // 获取验证码结束
  // 获取邀请码
  saveInviteNumber: function (e) {
    console.log(e.detail.value)
    this.setData({
      saveInviteNumber: e.detail.value
    });
  },
  formSubmit: function (e) {
    console.log(e.detail.value);
    const self = this;
    wx.request({
      url: saveMemberUrl,
      data:e.detail.value,
      method:'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success:function(res){
        //console.log("添加个人注册信息",res)
        app.showSucMsg("注册成功",1000);
        wx.redirectTo({
          url: 'list',
        })
      },
      fail:function(err){
        app.showErrMsg(err);
        console.log(err);
      }
    })
  },
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})