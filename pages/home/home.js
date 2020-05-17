//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    danmulist: ""
      },

  
    send() {
      console.log(this.data.danmulist)
      this.videoContext = wx.createVideoContext('myvideo')
      this.videoContext.sendDanmu({
        text: this.data.danmulist,
        color: '#000000'
      });
    },
  danmu:function(e){
    this.setData({
      danmulist:e.detail.value
    })
  }
  
   
  
   
})
