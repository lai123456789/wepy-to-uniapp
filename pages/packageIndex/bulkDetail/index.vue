<template>

  <view class="goods-detail-ctner">
    <import src="../../../common/wxParse/wxParse.wxml"></import>
      <view class="goods-con-outer">
          <view class="goods-banner">
          <swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" indicator-color="#999" indicator-active-color="#FFF" circular="true">
              <block v-for="(item, indx) in bannerArr" :key="indx">
                <swiper-item>
                  <image :src="item.bannerPath" class="slide-image" width="355" height="150"></image>
                </swiper-item>
              </block>
          </swiper>
        </view>

        <view class="goods-des-outer">

          <view class="tuan-price-outer">
            <text>￥ {{firstSpec.price}}</text>
            <text>单买价 ￥{{firstSpec.marketPrice}}</text>
            <text>已参团{{goodsDetailObj.sellQuantity}}件</text>
          </view>

          <view class="tuan-des-outer">
            <text>{{goodsDetailObj.goodsName || '--'}}</text>
            <text>活动截止日期 {{goodsDetailObj.endTime}}</text>
          </view>

          <view class="tuan-rule-outer">
            <view class="tule-tip" @tap="showDetailA">
              <view>拼团玩法</view>
              <view>详细规则</view>
              <image src="../../../images/unfold.png"></image>
            </view>
            
            <view class="rule-detail">
              <text class="rule-item" v-for="(item, index) in groupPurchaseRegulationsList" :key="index">满{{item.boundary}}{{goodsDetailObj.unit}} --  {{item.preferentialPrice}}</text>
              <!-- <text class="rule-item" wx:for="{{groupPurchaseRegulationsList}}" wx:key="index">满{{item.boundary}}{{goodsDetailObj.unit}} --  {{item.preferentialPrice}}</text> -->
              <!-- <text class="rule-item" wx:for="{{groupPurchaseRegulationsList}}" wx:key="index">满{{item.boundary}}{{goodsDetailObj.unit}} --  {{item.preferentialPrice}}</text> -->
            </view>
          </view>
          <!-- <view>3秒拥有水光肌</view> -->
        </view>
        <view class="G-line"></view>
        <!-- <view class="bulk-tips">图文详情</view> -->
        <view class="goods-detail">
          <template is="wxParse" :data="wxParseData:goodsDetail.nodes"></template>
        </view>
      </view>

      
      <view class="goods-bottom">
        <view class="gb-kf">
          <button class="icx-btn" open-type="contact">
            <image src="../../../images/service_light.png"></image>
            <view>客服</view>
          </button>
        </view>
        <!-- <view class="gb-cart">
          <button @tap='toCartA' class="icx-btn">
            <image src='../../../images/cart_light.png'></image>
            <view>购物车</view>
          </button>
        </view>
        <view @tap='addCartA' hover-class='icx-click-hover' class="gb-join">
          加入购物车
        </view>
        <view @tap='toTuanA' hover-class='icx-click-hover' class="gb-tuan">
          团购
        </view> -->
        <view @tap="buyNowA" hover-class="icx-click-hover" class="gb-buy">
          参团购买
        </view>
      </view>

      <view class="goods-spc-outer" v-if="showGoodsPop" @tap.stop="specPopA" @touchmove.stop="spcTouch">
          <view class="goods-spc-con" @tap.stop="specConStopA">
              <view class="goods-des">
                <view class="des-l">
                  <image :src="goodsDetailObj.goodsIco"></image>
                </view>
                <view class="des-r">
                    <view>￥{{goodsSpecificationVoList[specCurrentIndex].price}}</view>
                    <view>库存{{goodsDetailObj.leavingsQuantity}}件</view>
                    <view>{{goodsDetailObj.goodsName }}</view>
                </view>
              </view>
              <view class="goods-pop-same goods-gg">
                <view class="goods-pop-title">规格</view>
                <view class="goods-outer-same goods-gg-outer">
                  <view @tap="'specChoiceA(' + index + ', ' + item + ')'" v-for="(item, index) in goodsSpecificationVoList" :key="index" :class="'small ' + (specCurrentIndex == index ? 'active':'')">{{item.specification}}</view>
                </view>
              </view>
              <view class="goods-pop-same goods-color" v-if="goodsColorVoList.length > 0">
                <view class="goods-pop-title">颜色分类</view>
                <view class="goods-color-outer">
                    <view @tap="'colorChoiceA(' + index + ', ' + item + ')'" v-for="(item, index) in goodsColorVoList" :key="index" :class="'small ' + (colorCurrentIndex == index ? 'active':'')">{{item.colorName}}</view>
                </view>
              </view>
              <view class="goods-pop-same goods-buy-num">
                <view class="goods-pop-title">购买数量</view>
                <AddCom></AddCom>
              </view>
              <view class="goods-pop-same goods-buy-btn">
                <button @tap="goodsSureA" class="icx-btn-same-sure">确定</button>
              </view>
              
              
          
      

      <view class="rule-word-outer" v-if="showRuleTip">
        <view class="rule-inner">
          <view class="r-close" @tap="tipCloseA">X</view>
          <view class="r-a">参团流程</view>
          <view class="r-b">【参团流程】</view>
          <view class="r-c">
            <text>1. 原价提交订单</text>
            <text>2. 参团成功</text>
            <text>3. 等待发货</text>
            <text>4. 确认收货</text>
            <text>5. 退回差价</text>
          </view>
          <view class="r-d">【参团详细规则】</view>
          <view class="r-f"><text>1、参团人数：</text><text>最低1人成团。 </text></view>
          <view class="r-f"><text>2、参团价格：</text><text>参团人数越多，购买商品越多，价格越低。</text></view>
          <view class="r-f"><text>3、参团成功：</text><text>商品参团活动结束后，商家就会。 </text></view>
          <view class="r-f"><text>4、发货时间：</text><text>一个团的周期是7天，商家就会进入发货流程。 </text></view>
          <view class="r-f"><text>5、退回差价：</text><text>确认收货后，以实际优惠价格交易，系统开始计算返还金额=支付金额-最终售价</text></view>
        </view>
      
  
</view></view></view></view>
</template>

<script>
import miniPro from '../../../utils/wepy-pro';
import { apiGetGoodsDetailsF } from '../../../services/index';
import { apiCartSaveF } from '../../../services/cart';
import { apiCreateOrderF } from '../../../services/mine';
import WxParse from '../../../common/wxParse/wxParse.js';
import AddCom from '@/components/AddCom/index';

export default {
  data() {
    return {
      data: {
        isWhichFlag: '',
        // 1:加入购物车 2：立即购买
        showGoodsPop: false,
        goodsId: '',
        buyNum: 1,
        goodsDetailObj: {},
        bannerArr: [],
        goodsSpecificationVoList: [],
        // 规格
        specCurrentIndex: 0,
        colorCurrentIndex: 0,
        goodsColorVoList: [],
        // 颜色规格
        groupPurchaseRegulationsList: [],
        firstSpec: {
          id: '--',
          marketPrice: '--',
          price: '--',
          specification: '--'
        },
        goodsName: '',
        indicatorDots: true,
        showRuleTip: false,
        autoplay: true,
        interval: 5000,
        duration: 1000,
        createData: {
          channelId: '0',
          groupPurchaseActivityId: '',
          orderDetailBoList: []
        },
        wxData: "<p style='font-size: 32rpx; padding: 30rpx 0; text-align: center;'>此处可以在html2wxml.wpy中自行选择删除</p>"
      }
    };
  },

  async onLoad(option) {
    this.goodsId = option.goodsId;
    this.apiGetGoodsDetailsA(this.apiGetGoodsDetailsA.bind(this));
  },

  onShareAppMessage(res) {
    let _goodsId = this.goodsId;

    if (res.from === 'button') {// 来自页面内转发按钮
    }

    return {
      title: '成氏商城',
      path: `/pages/packageIndex/bulkDetail/index?goodsId=${_goodsId}`
    };
  },

  mixins: [],
  components: {
    AddCom: AddCom
  },
  props: {},
  methods: {
    spcTouch() {},

    specConStopA() {},

    specPopA() {
      this.showGoodsPop = false;
    },

    toCartA() {
      uni.switchTab({
        url: '/pages/cart/index'
      });
    },

    specChoiceA(index, item) {
      this.specCurrentIndex = index;
    },

    colorChoiceA(index, item) {
      this.colorCurrentIndex = index;
    },

    goodsSureA() {
      if (this.isWhichFlag == 1) {
        this.apiCartSaveA(this.apiCartSaveA.bind(this));
      } else if (this.isWhichFlag == 2) {
        let _data = {
          cartId: '',
          goodsId: this.goodsId,
          specificationId: this.goodsSpecificationVoList[this.specCurrentIndex].id,
          goodsNumber: this.buyNum
        };

        if (this.goodsColorVoList.length > 0) {
          _data.colorId = this.goodsColorVoList[this.colorCurrentIndex].id;
        }

        this.createData.orderDetailBoList.push(_data);
        setTimeout(() => {
          this.apiCreateOrderA(this.apiCreateOrderA.bind(this));
        }, 10);
      }
    },

    addCartA() {
      this.isWhichFlag = 1;
      this.showGoodsPop = true;
    },

    buyNowA() {
      this.isWhichFlag = 2;
      this.showGoodsPop = true;
    },

    showDetailA() {
      this.showRuleTip = true;
    },

    tipCloseA() {
      this.showRuleTip = false;
    },

    apiCartSaveA(fun) {
      // 添加购物车
      apiCartSaveF({
        goodsId: this.goodsId,
        specificationId: this.goodsSpecificationVoList[this.specCurrentIndex].id,
        colorId: this.goodsColorVoList[this.colorCurrentIndex].id,
        quantity: this.buyNum
      }, fun).then(msg => {
        setTimeout(() => {
          this.showGoodsPop = false;
        }, 1500);
        miniPro.showToast('添加成功');
      }).catch(() => {});
    },

    apiCreateOrderA(fun) {
      apiCreateOrderF(this.createData, fun).then(msg => {
        let _id = msg.id;
        uni.navigateTo({
          url: `/pages/packageMine/sureOrder/index?orderId=${_id}`
        });
      }).catch(() => {});
    },

    apiGetGoodsDetailsA(fun) {
      var _self = this;

      apiGetGoodsDetailsF(_self.goodsId, fun).then(msg => {
        let {
          goodsDetail,
          goodsBannerVoList,
          goodsSpecificationVoList,
          goodsColorVoList
        } = msg;
        this.bannerArr = goodsBannerVoList;
        this.goodsSpecificationVoList = goodsSpecificationVoList;
        this.goodsColorVoList = goodsColorVoList;
        let _first = goodsSpecificationVoList[0];
        this.groupPurchaseRegulationsList = msg.groupPurchaseRegulationsList;
        this.goodsDetailObj = msg;
        this.createData.groupPurchaseActivityId = msg.groupPurchaseActivityId;

        if (_first) {
          this.firstSpec = {
            id: _first.id || '--',
            marketPrice: _first.marketPrice || '--',
            price: _first.price || '--',
            specification: _first.specification || '--'
          };
        }

        WxParse.wxParse('goodsDetail', 'html', goodsDetail, _self, 5);
      }).catch(() => {});
    }

  },
  computed: {},
  watch: {}
};
</script>
<style lang="scss" scoped="scoped">

@import "../../../common/wxParse/wxParse.css";
@import "./index";

</style>