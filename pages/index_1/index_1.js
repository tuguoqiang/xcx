// pages/index_1/index_1.js

  /**
   * 页面的初始数据
   */
Page({
  data: {
    value:"",
    page:1,
   arry:
     [{ "name": "周星驰", "urlfrom": "全网资源", "id": "137", "title": "周星驰给林允罗志祥讲戏.", "type": "jpg", "url": "http://www.hinews.cn/pic/003/002/613/00300261359_6793b76b.jpg", "pn": "61" }, { "name": "周星驰", "urlfrom": "全网资源", "id": "138", "title": "周星驰绿叶大全(16)", "type": "jpg", "url": "http://image2.sina.com.cn/dy/o/2006-09-22/02cbb555aad8d8e0126eed5cb4d6579a.jpg", "pn": "77" }, { "name": "周星驰", "urlfrom": "全网资源", "id": "139", "title": "电影新世界-没有吴孟达的周星驰电影,离开吴孟达周星驰是依然搞笑", "type": "jpg", "url": "http://www.lovehhy.net/lib/img/6777592/986529_2131523929.jpg", "pn": "67" }, { "name": "周星驰", "urlfrom": "全网资源", "id": "140", "title": "周星驰正面回应恶行一说:别借我抬高自己", "type": "jpg", "url": "http://img.ifeng.com/hres/200903/20/08/b7d6387c10b5171b54bbd75058ad4698.jpg", "pn": "70" }, { "name": "周星驰", "urlfrom": "全网资源", "id": "141", "title": "原来有7位导演都曾客串过周星驰的电影,其中不少都是神来一笔!", "type": "jpeg", "url": "http://02imgmini.eastday.com/mobile/20180909/295310155cb9da6ffd705b95e692bd2e_wmk.jpeg", "pn": "95" }, { "name": "周星驰", "urlfrom": "全网资源", "id": "142", "title": "周星驰vs李修贤", "type": "jpg", "url": "http://upload.sj998.com/archives/allimg/140724/102560-140H4101011217.jpg", "pn": "97" }, { "name": "周星驰", "urlfrom": "全网资源", "id": "143", "title": "周星驰《美人鱼》年内开拍海选女主要求够漂亮", "type": "jpg", "url": "http://www.dzwww.com/yule/yulezhuanti/mtcbg/201407/W020140723853298936960.jpg", "pn": "90" }, { "name": "周星驰", "urlfrom": "全网资源", "id": "144", "title": "周星驰,刘德华,张国荣都穿过背带裤.", "type": "jpg", "url": "http://img1.cache.netease.com/catchpic/7/76/766263641B60D74CB0864B36A7D3394C.jpg", "pn": "43" }, { "name": "周星驰", "urlfrom": "全网资源", "id": "145", "title": "周星驰九品芝麻官删减片段剪辑,你一定没看过", "type": "jpg", "url": "http://vpic.video.qq.com/25966436/r0337rwms8d_ori_3.jpg", "pn": "65" }, { "name": "周星驰", "urlfrom": "全网资源", "id": "146", "title": "《大话西游》周星驰在银川骑自行车今天终于找到了那", "type": "jpg", "url": "http://dingyue.nosdn.127.net/MN0g8J0Kl7J=PlpqJGXL8itUa8vu7oMB5X0CRrOc5ywFh1526613715354.jpg", "pn": "52" }]
  },
  searchmove:function(){
    this.setData({
      value:""
    })
  },
  search:function(){
    var that = this;
    console.log("参数：" + that.data.value);
    //上拉加载
    wx.showLoading({
      title: '正在加载',
    })
    wx.request({
      url: 'https://tyjjm.kcway.net/wx/xcx',
      data: {
        ss:that.data.value
      },
      success: function (res) {
        that.setData({
          arry:res.data
        })
        wx.hideLoading();
      }
    })
  },
  bindinput:function(e){
    this.setData({
    value: e.detail.value
    }) 
    console.log('bindInput'+this.data.value)  
  },
  /**
   * 生命周期函数--监听页面加载
   */
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
    //加载次数加一
    this.setData({
      page: this.data.page + 1
    }) 
//显示顶部刷新图标
   wx.showNavigationBarLoading();
   var that=this;
    wx.request({
      url: 'https://tyjjm.kcway.net/wx/xcx',
      data: {
        p: that.data.page,
        l: 10,
        ss: that.data.value
      },
      success: function (res) {
        that.setData({
          arry: res.data
        });
        // 设置数组元素
        that.setData({
          arry: that.data.arry
        });
        console.log(that.data.arry);
        // 隐藏导航栏加载框
        wx.hideNavigationBarLoading();
        // 停止下拉动作
        wx.stopPullDownRefresh();
      }
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    //上拉加载
    wx.showLoading({
      title: '正在加载',
    })
    var that = this
    //加载次数加一
    this.setData({
      page: this.data.page + 1
    }) 
        wx.request({
          url: 'https://tyjjm.kcway.net/wx/xcx',
          data:{
            p: that.data.page,
            l:10,
            ss: that.data.value
          },
          success: function (res) {
            // 回调函数
            var arry_list = that.data.arry;
            for (var i = 0; i < res.data.length; i++) {
              arry_list.push(res.data[i]);
            }
            //输出数据到控制台
            console.log(res);
            //设置数据
            that.setData({
              arry: that.data.arry
            })
            wx.hideLoading();
          }
        
        })

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})