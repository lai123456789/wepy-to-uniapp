<template>

  <view class="cat-item-ctner">
    <view class="order-status-order">
        <view class="A" v-if="swiperIndex == 0">
          <text style="margin-left: 20rpx;color: #333333;font-size: 22rpx;">{{item.companyName}} </text><!-- 商家名  例如成氏商城 -->
          <image src="../../images/right.png" style="width: 12rpx;height: 12rpx"></image>
        </view>
      <block v-if="swiperIndex !== 0"><!-- 如果是处理中  显示这个服务单号跟退货按钮  否则显示上面的 -->
        <view class="B">
          <text style="margin-left: 20rpx;color: #333333;font-size: 22rpx;">服务单号：{{item.id}} </text>
        </view>
        <view style="flex: 1;text-align: right">
          <image v-if="item.type == 1" src="../../images/tuimoney.png" style="width: 28rpx;height: 25rpx;margin-right: 7rpx"></image>
          <image v-if="item.type == 2" src="../../images/tui.png" style="width: 28rpx;height: 25rpx;margin-right: 7rpx"></image>
          <image v-if="item.type == 3" src="../../images/chang.png" style="width: 28rpx;height: 25rpx;margin-right: 7rpx"></image>
          <image v-if="item.type == 4" src="../../images/bu.png" style="width: 28rpx;height: 25rpx;margin-right: 7rpx"></image>
          <text style="font-weight: bold;">{{item.typeDesc}}</text>
        </view>
      </block>
    </view>
    <view class="goods-outer" v-for="(subItem, index) in item.orderDetailList" :key="index" v-if="swiperIndex == 0">
      <view class="goods-cat">
        <view class="cat-m">
          <image :src="subItem.goodsIco"></image>
        </view>
        <view class="cat-m-t">
          <view class="goods-name">
            <text>{{subItem.goodsName}}</text>

          </view>
          <view class="goods-des">
            <text><text v-if="subItem.colorName">颜色：{{subItem.colorName}}</text></text>
          </view>
          <view class="goods-des">
            <text style="color: #666666;font-size: 20rpx">数量： {{subItem.goodsNumber}}</text>
          </view>
        </view>
      </view>
      <view class="serve-text" v-if="swiperIndex !== 0"> <!-- 如果是处理中1 倒计时模块 -->
        <view>待审核</view>
        <view>您的服务单已申请成功，待售后审核中预计 <text>{{item.verifyTime}}</text></view>
      </view>
      <view class="order-button-outer">
        <view @tap="'afterSaleApply(' + subItem.id + ')'" class="order-btnJoinCart" v-if="swiperIndex == 0">申请售后</view> <!-- 当前页面只显示这个按钮 -->
      </view>
    </view>
    <view class="goods-outer" v-if="swiperIndex !== 0" @tap="'goServeInfo(' + item.id + ')'"> <!-- 处理中 -->
      <view class="goods-cat">
        <view class="cat-m">
          <image :src="item.goodsIco"></image>
        </view>
        <view class="cat-m-t">
          <view class="goods-name">
            <text>{{item.goodsName}}</text>

          </view>
          <view class="goods-des">
            <text><text v-if="item.colorName">颜色：{{item.colorName}}</text></text>
          </view>
          <view class="goods-des">
            <text style="color: #666666;font-size: 20rpx">数量： {{item.number}}</text>
          </view>
        </view>
      </view>
      <view class="serve-text"> <!-- 如果是处理中  -->
        <view>
          <text>{{item.typeStatusDesc}}</text>
          <text v-if="item.auditRemark">（{{item.auditRemark}}）</text>
        </view>
      </view>
      <view class="order-button-outer">
        <view v-for="(btnItem, index) in item.operation" :key="index" @click.stop="orderBtnA(btnItem, {{item}})" class="order-btnJoinCart" v-if="btnItem.client">
          {{btnItem.desc}}
        </view>
      </view>
    </view>
  </view>

</template>

<script>
// 待发货：提醒发货，查看物流
// 待收货：延长收货，查看物流，确认收货
// 待付款：退款，付款
// 状态（0：全部订单 1：待支付 2：待发货 4：待收货 5：待评论）
import { apicancelOrderApplyF } from '../../services/mine';
import miniPro from '@/utils/wepy-pro.js';
import UrlNavigate from '../../utils/wepyNavigate';

export default {
  data() {
    return {
      data: {
        id: "",
        btnObj: {
          '0': [{
            word: '退款',
            action: '1a'
          }, {
            word: '付款',
            action: '1b',
            color: 'sure'
          }],
          '1': [{
            word: '提醒发货',
            action: '2a'
          }, {
            word: '查看物流',
            action: '2b'
          }],
          '2': [{
            word: '延长收货',
            action: '4a'
          }, {
            word: '查看物流',
            action: '4b'
          }, {
            word: '确认收货',
            action: '4c',
            color: 'sure'
          }]
        }
      }
    };
  },

  onLoad() {},

  mixins: [],
  components: {},
  props: {
    item: {
      type: Object,
      default: {}
    },
    OrderComIndex: {
      type: [Number, String],
      default: 0
    },
    swiperIndex: {
      type: [Number, String],
      default: 0
    }
  },
  methods: {
    orderBtnA(btnItem, item) {
      let orderDetailId = item.orderDetailId;
      let afterSalesId = item.afterSalesId;
      let type = item.type;

      if (btnItem.key == 2) {
        //修改申请
        UrlNavigate('/pages/packageMine/afterSalesAction/index', {
          orderDetailId: orderDetailId,
          afterSalesId: item.id
        });
      } else if (btnItem.key == 3) {
        //买家发货 填写快递单号
        let id = item.id;
        let orderDetailId = item.orderDetailId;
        let type = item.type;
        UrlNavigate('/pages/packageMine/writeExpressNum/index', {
          id: id,
          orderDetailId: orderDetailId,
          type: type
        });
      } else if (btnItem.key == 8) {
        // 买家评价(点击跳转到售后评价)
        UrlNavigate('/pages/packageMine/afterSaleOrderComment/index', {
          id: item.id
        });
      } else if (btnItem.key == 12) {
        //取消申请
        this.id = item.id;
        let t = this;
        miniPro.showConfirm({
          title: '提示',
          content: '确定取消该申请吗？',

          callback(flag) {
            if (!flag) return;
            t.apicancelOrderApplyA(t.apicancelOrderApplyA.bind(t));
          }

        });
      }
    },

    afterSaleApply(id) {
      //申请售后
      wepy.navigateTo({
        url: `/pages/packageMine/afterSalesAction/index?orderDetailId=${id}`
      });
    },

    goServeInfo(serveId) {
      //商品详情
      wepy.navigateTo({
        url: `/pages/packageMine/serviceTickeInfo/index?serveId=${serveId}`
      });
    },

    apicancelOrderApplyA(fun) {
      let id = this.id;
      apicancelOrderApplyF(id, fun).then(result => {
        miniPro.showToast('取消申请成功！');
        setTimeout(() => {
          wepy.navigateTo({
            url: `/pages/packageMine/afterSales/index`
          });
        }, 700);
      }).catch(err => {});
    }

  },
  computed: {},
  watch: {}
};
</script>
<style lang="scss" scoped="scoped">

@import "./index.scss";
@import "../../common/css/rpx.scss";
@import "../../common/css/const.scss";
@import "../../common/css/mixin.scss";


</style>