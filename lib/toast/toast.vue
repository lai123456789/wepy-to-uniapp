<template>
<view class="wx-toast-box" :animation="animationData">
  <view class="wx-toast-content">
    <view class="wx-toast-toast">{{ content }}</view>
  </view>
</view>
</template>
<script>

export default {
  data() {
    return {
      // 弹窗显示控制 
      animationData: {},
      content: '提示内容'
    };
  },

  components: {},
  props: {},
  methods: {
    options: {
      multipleSlots: true // 在组件定义时的选项中启用多slot支持 

    },

    /** 
     * 显示toast，定义动画
     */
    showToast(val) {
      var animation = wx.createAnimation({
        duration: 300,
        timingFunction: 'ease'
      });
      this.animation = animation;
      animation.opacity(1).step();
      this.setData({
        animationData: animation.export(),
        content: val
      });
      /**
       * 延时消失
       */

      setTimeout(function () {
        animation.opacity(0).step();
        this.setData({
          animationData: animation.export()
        });
      }.bind(this), 1500);
    },

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
.wx-toast-box{
  display: flex;
  width: 100%;
  justify-content: center;
  position: fixed;
  z-index: 999;
  bottom:80rpx;
  opacity: 0;
}
.wx-toast-content{
  max-width: 80%;
  border-radius:15rpx;
  padding: 15rpx 30rpx;
  background: rgba(0, 0, 0, 0.6);
}
.wx-toast-toast{
  height: 100%;
  width: 100%;
  color: #fff;
  font-size: 24rpx;
  text-align: center;
}

</style>