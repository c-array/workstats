//index.js
const http = require('../../utils/htpp.js');
Page({
  data: {
    checked:false
  },
  rememberPwd:function(e){
    this.data.checked = !this.data.checked;
    this.setData({
      checked: this.data.checked
    })
  },
  login:function(e){
    http.post({
      url:"/login",
      data:{
        username: 'caoqimin' ,
        password: 'cao1234'
      },
      type:"json",
      success:function(data){
        console.log(data);
      },
      error: function(msg){
        console.log(msg);
      }
    })
  },
  onLoad: function () {
    
  }
})
