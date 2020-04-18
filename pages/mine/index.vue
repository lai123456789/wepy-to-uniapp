<template>
  <view class="mine-ctner">
      <view class="m-logo">
        <image class="m-log-bg" src="../../images/mine_bg1.png"></image>
        <view class="m-logo-con">
          <view><open-data type="userAvatarUrl"></open-data></view>
          <view>
            <open-data type="userNickName"></open-data>
          </view>
        </view>
      </view>
      <view class="m-hy">
        <view class="hy-inner">
          <image src="../../images/discount_bg1.png"></image>
          <!-- <text v-if="membersText">{{membersText}} | 海量商品，多种优惠</text> -->
          <!-- <view v-if="isVipMonthCard" class="hy-btn-member">升级为年卡会员 》</view>
          <view v-if="isMembers" class="hy-word">立即加入，立享折扣</view>
          <view v-else class="hy-word">海量商品，多种优惠</view>
          <view v-if="!isMembers" class="hy-btn">立即加入</view>
          <view v-else class="hy-btn">查看会员特权</view> -->
        </view>
      </view>
      <view class="m-partner">
        <view class="m-partner-inner">
          <image src="../../images/partner_icon.png"></image>
          <!-- <text>{{partnerText}}</text> -->
        </view>
      
  <!--     <button@click='scanA'>扫一扫</button>-->
  <!--     <button@click='jumpH5A'>跳转H5页面</button>-->
      <view class="m-order-outer">
        <view class="m-order-innder">
          <view class="m-order-title m-order-title-order" @tap="toOrderTapA">
            <text>我的订单</text>
            <text>查看全部订单</text>
            <image src="../../images/unfold.png"></image>
          </view>
          <view class="m-order-item">
            <view class="order_a">
              <image src="../../images/pay.png"></image>
              <!-- <view class="A" v-if="pageData.withoutPayOrderCount > 0">{{pageData.withoutPayOrderCount}}</view> -->
              <view>待付款</view>
            </view>
            <view class="order_b">
              <image src="../../images/send.png"></image>
              <!-- <view class="A" v-if="pageData.withoutShippingOrderCount > 0">{{pageData.withoutShippingOrderCount}}</view> -->
              <view>待发货</view>
            </view>
  
            <view class="order_c">
              <image src="../../images/deliver.png"></image>
              <!-- <view class="A" v-if="pageData.withoutReceiveOrderCount > 0">{{pageData.withoutReceiveOrderCount}}</view> -->
              <view>待收货</view>
            </view>
  
            <view class="order_d">
              <image src="../../images/evaluation.png"></image>
              <!-- <view class="A" v-if="pageData.withoutEvaluateOrderCount > 0">{{pageData.withoutEvaluateOrderCount}}</view> -->
              <view>待评价</view>
            </view>
            <view class="order_e">
              <image src="../../images/refund.png"></image>
              <view>售后</view>
            </view>
          </view>
        </view>
      </view>
      <view class="m-service-outer">
        <view class="m-service-title">我的服务</view>
        <view class="m-service-item">
          <!-- <view class="service-a"@click="toBulkOrderA">
              <image src='../../images/abulk.png'></image>
              <view>团购订单</view>
          </view> -->
  
          <view class="service-e">
              <image src="../../images/similar.png"></image>
              <view>了解更多</view>
          </view>
  
          <view class="service-b">
              <image src="../../images/location.png"></image>
              <view>我的地址</view>
          </view>
  
          <view class="service-c">
              <image src="../../images/favor.png"></image>
              <view>我的收藏</view>
          </view>
  
          <view class="service-d">
              <image src="../../images/footprint.png"></image>
              <view>我的足迹</view>
          </view>
        </view>
        <!-- <view class="m-service-item">
          <view class="service-e"@click="toMoreA">
              <image src='../../images/similar.png'></image>
              <view>了解更多</view>
          </view>
        </view> -->
      </view>
    
  </view></view>
</template>

<script>
export default{
  data () {
	  return{
		  showModal:false
	  }
  },
  methods: {
	 toOrderTapA(){
		 console.log("哈维和符合瓦河")
	}
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
