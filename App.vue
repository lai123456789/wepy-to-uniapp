<script>

export default {
  data() {
    return {};
  },

  globalData: {
    userInfo: null,
    encryptedData: null,
    iv: null
  },
  onLaunch: function () {
    // 展示本地存储能力
    var logs = uni.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    uni.setStorageSync('logs', logs); // 登录

    uni.login({
      success: res => {// 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    }); // 获取用户信息

    // uni.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       uni.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.$options.globalData.userInfo = res.userInfo; // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况

    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res);
    //           }
    //         }
    //       });
    //     }
    //   }
    // });
  },
  methods: {
    setData: function (obj) {
      let that = this;
      let keys = [];
      let val, data;
      Object.keys(obj).forEach(function (key) {
        keys = key.split('.');
        val = obj[key];
        data = that.$data;
        keys.forEach(function (key2, index) {
          if (index + 1 == keys.length) {
            that.$set(data, key2, val);
          } else {
            if (!data[key2]) {
              that.$set(data, key2, {});
            }
          }

          data = data[key2];
        });
      });
    }
  }
};
</script>
<style>
/**app.css**/
.container {
  box-sizing: border-box;
  background-color: #ffffff;
  font-family: PingFangSC-Light, helvetica, 'Heiti SC';
}

view, image, text, navigator {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

view, text {
  font-family: PingFangSC-Light, helvetica, 'Heiti SC';
  font-size: 29rpx;
  color: #333;
}


/*隐藏滚动条*/
::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
}

</style>