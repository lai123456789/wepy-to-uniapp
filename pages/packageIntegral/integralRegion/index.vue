<template>

  <view class="integral-ctner">
      <view class="integral-top-title">积分使用</view>
      <view class="integral-top-outer">
        <view class="ot-same ot-a" v-for="(item, index) in heardContent" :key="index" @tap="'changeCurA(' + index + ')'">
          <text :class="(currentIndex == index ? 'active':'')">{{item.typeDesc}} </text>
          <text> | </text>
        </view>
      </view>
    <integralCom></integralCom>
      <view class="integral-top-con">
        <swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :duration="duration" :current="currentIndex" @change="intervalChange">
          <block v-for="(item, index) in heardContent" :key="index">
            <block v-for="(subTem, index2) in item.typeDesc" :key="index2">
              <swiper-item>
                <scroll-view scroll-y="true" style="height: 100%;" @scrolltolower="loadMore">
                  <view class="swiper-div-same"> <!-- wx:if="{{pageList.length > 0}}" -->
                    <repeat v-for="(item, index3) in pageList" :key="index3" key="subIndex" index="subIndex" item="subItem">
                      <view class="order-com" @tap="toOrderInfo">
<!--                        <integralCom></integralCom>-->

                      </view>
                    </repeat>
                  </view>
                  <NoTip></NoTip> <!--  wx:else -->
                </scroll-view>
              </swiper-item>
            </block>
          </block>
        </swiper>
      </view>
  </view>

</template>

<script>
import '../../../common/js/authProcess.js';
// import NoTip from '@/components/OrderNoDataTip/index';
// import integralCom from '@/components/integralCom/index';
import miniPro from '@/utils/wepy-pro.js';
import UrlNavigate from '../../../utils/wepyNavigate';
import { apiOrderFindPageF, apiCancelOrderF // 取消订单
, apiConfirmOrderF // 确认收货
, apiGetHearderF //头部标题以及订单提醒
, apiRemindDeliverGoodsF //提醒 商家发货
} from '../../../services/mine/index';

export default {
  data() {
    return {
      data: {
        currentIndex: 0,
        indicatorDots: false,
        autoplay: false,
        duration: 100,
        heardContent: [{
          typeDesc: "积分兑换"
        }, {
          typeDesc: "兑换有奖"
        }, {
          typeDesc: "商品积分"
        }, {
          typeDesc: "积分兑现"
        }, {
          typeDesc: "积分兑现"
        }, {
          typeDesc: "积分兑现"
        }, {
          typeDesc: "积分兑现"
        }, {
          typeDesc: "积分兑现"
        }, {
          typeDesc: "积分兑现"
        }, {
          typeDesc: "积分兑现"
        }],
        topArr: [],
        statusObj: [],
        // 状态（-1：全部订单 0：待支付 4：待收货 5：已完成 3：已取消）
        pageList: [],
        cancelOrderId: '',
        orderActionId: '',
        confirmOrderId: '',
        orderChildId: '',
        btnClickCurrenIndex: -1,
        pageParams: {
          page: 0,
          offset: 0,
          limit: 10,
          status: 0,
          hasMore: false
        },
        currentItem: ''
      }
    };
  },

  onLoad(option) {
    this.currentIndex = option.current || 0; // this.apiGetHearderFA(this.apiGetHearderFA.bind(this)) //表头内容标题和提醒
  },

  mixins: [],
  components: {
    NoTip: NoTip,
    integralCom: integralCom
  },
  props: {},
  methods: {
    toFilterA() {
      uni.navigateTo({
        url: '/pages/packageIndex/filter/index'
      });
    },

    intervalChange(e) {
      this.currentIndex = e.detail.current;
      this.pageParams.status = this.statusObj[e.detail.current];
      this.pageParams.page = 0;
      this.pageParams.offset = 0;
      this.pageParams.limit = 10;
      this.pageParams.hasMore = false;
      this.pageList = [];
      this.apiOrderFindPageFA(this.apiOrderFindPageFA.bind(this));
    },

    changeCurA(i) {
      this.currentIndex = i;
    },

    loadMore() {
      // 加载更多
      if (!this.pageParams.hasMore) return;
      let offset = this.pageParams.offset;

      if (offset == 0) {
        offset = this.pageParams.limit;
      } else {
        offset = offset + this.pageParams.limit;
      }

      this.pageParams.offset = offset;
      this.apiOrderFindPageFA(this.apiOrderFindPageFA.bind(this));
    },

    toOrderInfo(e) {
      uni.navigateTo({
        url: `/pages/packageMine/OrderInfo/index?orderMasterId=${e.orderMasterId}`
      });

      if (e.status == 3 || e.status == 2) {
        //判断是否是团购订单
        let groupPurchaseActivityId = e.groupPurchaseActivityId;

        if (groupPurchaseActivityId) {
          uni.navigateTo({
            url: `/pages/groupBuy/OrderInfo/index?orderChildId=${e.id}`
          });
        }
      }
    },

    apiGetHearderFA(fun) {
      //获取头部标题以及订单提醒
      let t = this;
      let newStatus = [];
      apiGetHearderF({}, fun).then(result => {
        // t.heardContent = result.data;
        let statusArr = result.data;

        for (let i in statusArr) {
          let arr = statusArr[i].status;
          newStatus.push(arr);
        }

        t.statusObj = newStatus; // t.pageParams.status = newStatus[0];//默认status状态取返回的数组第一个

        t.pageParams.status = this.statusObj[this.currentIndex];
        this.apiOrderFindPageFA(this.apiOrderFindPageFA.bind(this)); //订单商品列表
      }).catch(err => {});
    },

    apiOrderFindPageFA(fun) {
      apiOrderFindPageF({
        offset: this.pageParams.offset,
        limit: this.pageParams.limit,
        status: this.pageParams.status
      }, fun).then(result => {
        let {
          rows,
          last,
          pageNumber
        } = result;
        this.pageParams.page = pageNumber;
        this.pageParams.hasMore = !last;
        this.pageList = this.pageList.concat(rows);
      }).catch(err => {});
    },

    apiRemindDeliverGoodsFA(fun) {
      //提醒商家发货
      let orderChildId = this.orderChildId;
      let t = this;
      apiRemindDeliverGoodsF(orderChildId, fun).then(result => {
        miniPro.showToast('提醒商家发货成功');
        setTimeout(() => {
          t.pageList = [];
          this.apiGetHearderFA(this.apiGetHearderFA.bind(this));
        }, 1000);
      }).catch(err => {});
    },

    apiCancelOrderFA(fun) {
      apiCancelOrderF(this.cancelOrderId, fun).then(result => {}).catch(err => {});
    },

    apiConfirmOrderFA(fun) {
      //确认收货
      let t = this;
      apiConfirmOrderF(this.confirmOrderId, fun).then(result => {
        miniPro.showToast('确认收货成功');
        setTimeout(() => {
          t.pageParams.hasMore = false;
          t.pageList = [];
          this.apiGetHearderFA(this.apiGetHearderFA.bind(this)); // this.apiOrderFindPageFA(this.apiOrderFindPageFA.bind(this));
        }, 1000);
      }).catch(err => {});
    }

  },
  computed: {},
  watch: {}
};
</script>
<style lang="scss" scoped="scoped">

@import "./index";

</style>