<template>

  <view class="order-no-data-ctner">
      <view>
          <image src="../../images/order_none_icon.png"></image>
          <view class="t-a">暂无相关订单</view>
          <view class="t-b">好东西手慢无</view>
      </view>
  </view>

</template>

<script>

export default {
  data() {
    return {
      data: {
        show: false
      }
    };
  },

  onLoad() {// setTimeout(() => {
    //   this.show = true;
    // },30);
  },

  mixins: [],
  components: {},
  props: {},
  methods: {},
  computed: {},
  watch: {}
};
</script>
<style lang="scss" scoped="scoped">

// @import "./index.scss";
@import "../../common/css/rpx.scss";
@import "../../common/css/const.scss";
@import "../../common/css/mixin.scss";
.order-no-data-ctner{
    padding-top: rpx(60);
    border-radius: rpx(8);
    text-align: center;
    letter-spacing: rpx(4);
    image {
        width: rpx(117);
        height: rpx(117);
    }
    .t-a {
        font-size: rpx(24);
        line-height: rpx(28);
        color: #333;
        margin: rpx(34) 0 rpx(14) 0;
    }
    .t-b {
        font-size: rpx(20);
        color: #666
    }
}


</style>