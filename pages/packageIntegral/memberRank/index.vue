<template>

  <view class="recom-ctner container-same">
    <view class="recom-same-center"><!-- 多元运算符 -->
      <view :class="'center-around ' + (Info.userLevel === 0 ? 'css0' : Info.userLevel === 1 ? 'css1' : 'css2')">
        <view class="v-title">
          <text v-if="Info.userLevel === 0">普通会员</text>
          <text v-else-if="Info.userLevel === 1">月卡会员</text>
          <text v-else="Info.userLevel === 2">年卡会员</text>
        </view>
        <view class="v-index">
          <view class="v-left" v-if="Info.userLevel !== 0"><!-- 普通会员不展示有效期限 -->
            有效期至<text>{{Info.vipEndTime}}</text>
          </view>
<!--          <view class="v-right">-->
<!--            <text>下一等级</text>-->
<!--            <text>  {{Info.nextMemberRating}}</text>-->
<!--          </view>-->
        </view>
        <view class="index-line">
          <view :class="(Info.userLevel === 0 ? 'color-line0' : Info.userLevel === 1 ? 'color-line1' : 'color-line2')" style="width: 30%"></view>
        </view>
        <view class="bottom-view">
          <view class="grow-text">
            <text>当前成长值</text>
            <text> {{Info.growth}}</text>
          </view>
<!--          <view class="next-grow-text">-->
<!--            升级 <text>{{Info.nextGrowNum}}</text>-->
<!--          </view>-->
        </view>
      </view>
      <view class="center-1">
        <text>等级特权</text>
      </view>
      <view class="center-2" @tap="showText">
        <view class="picture-text-index-2">
          <view class="every-2">
            <view class="every-center-2">
              <image src="../../../images/baoyou.png"></image>
            </view>
            <view>全场包邮</view>
          </view>
          <view class="every-2">
            <view class="every-center-2">
              <image src="../../../images/member-1yuan.png"></image>
            </view>
            <view>会员1元购</view>
          </view>
          <view class="every-2">
            <view class="every-center-2">
              <image src="../../../images/zhekou.png"></image>
            </view>
            <view>专享折扣</view>
          </view>
          <view class="every-2">
            <view class="every-center-2">
              <image src="../../../images/mian2.png"></image>
            </view>
            <view>免费试用</view>
          </view>
          <view class="every-2">
            <view class="every-center-2">
              <image src="../../../images/xianxia.png"></image>
            </view>
            <view>线下品鉴</view>
          </view>
        </view>
        <view class="picture-text-index-2">
          <view class="every-2">
            <view class="every-center-2">
              <image src="../../../images/mian1.png"></image>
            </view>
            <view>
              <text>免费领取</text>
            </view>
          </view>
          <view class="every-2">
            <view class="every-center-2">
              <image src="../../../images/exchange-goods.png"></image>
            </view>
            <view>退换货特权</view>
          </view>
          <view class="every-2">
            <view class="every-center-2">
              <image src="../../../images/kefu.png"></image>
            </view>
            <view>专属客服</view>
          </view>
          <view class="every-2">
            <view class="every-center-2">
              <image src="../../../images/exchange.png"></image>
            </view>
            <view>积分兑换</view>
          </view>
          <view class="every-2">
            <view class="every-center-2">
              <image src="../../../images/all-tequan.png"></image>
            </view>
            <view>全部特权</view>
          </view>
        </view>

      </view>
    </view>
    <view class="recom-play-cheng">
      <view class="p1">获取成长值</view>
      <view class="content-index">
<!--        <view class="content-1" @tap="goBuyMember">-->
<!--          <view class="content-left">-->
<!--            <view class="img"><image src="../../../images/buyMember.png"></image></view>-->
<!--            <view class="left-text">-->
<!--              <view>购买会员消费</view>-->
<!--              <view>消费100元/10成长值</view>-->
<!--            </view>-->
<!--          </view>-->
<!--          <view class="content-right">-->
<!--            <button class="icx-btn-same-sure">立即获取</button>-->
<!--          </view>-->
<!--        </view>-->
        <view class="content-1">
          <view class="content-left">
            <view class="img"><image src="../../../images/buyGoods.png"></image></view>
            <view class="left-text">
              <view>购买商品消费</view>
              <view>消费100元/100成长值</view>
            </view>
          </view>
          <view class="content-right" @tap="goLink">
            <button class="icx-btn-same-sure">立即获取</button>
          </view>
        </view>
        <view class="content-1">
          <view class="content-left">
            <view class="img"><image src="../../../images/share-goods.png"></image></view>
            <view class="left-text">
              <view>分享商品链接</view>
              <view>每次分享获12成长值</view>
            </view>
          </view>
          <view class="content-right" @tap="goLink">
            <button class="icx-btn-same-sure">立即获取</button>
          </view>
        </view>
<!--        <view class="content-1">-->
<!--          <view class="content-left">-->
<!--            <view class="img"><image src="../../../images/share-memberCenter.png"></image></view>-->
<!--            <view class="left-text">-->
<!--              <view>分享会员中心链接</view>-->
<!--              <view>消费100元/10成长值</view>-->
<!--            </view>-->
<!--          </view>-->
<!--          <view class="content-right">-->
<!--            <button class="icx-btn-same-sure">立即获取</button>-->
<!--          </view>-->
<!--        </view>-->
        <view class="content-1">
          <view class="content-left">
            <view class="img"><image src="../../../images/qian-green.png"></image></view>
            <view class="left-text">
              <view>签到</view>
              <view>签到获取10~40成长值</view>
            </view>
          </view>
          <view class="content-right" @tap="goSingIn">
            <button class="icx-btn-same-sure">立即获取</button>
          </view>
        </view>
        <view class="content-1">
          <view class="content-left">
            <view class="img"><image src="../../../images/shop.png"></image></view>
            <view class="left-text">
              <view>逛商城</view>
              <view>消费100元/100成长值</view>
            </view>
          </view>
          <view class="content-right" @tap="goIndexLink">
            <button class="icx-btn-same-sure">立即获取</button>
          </view>
        </view>
      </view>

    </view>
  </view>

</template>

<script>
import Auth from '../../../common/js/authProcess.js';
import { apiTaleFindPageF } from '../../../services/classify';
import { apiGetUserInfoF } from '../../../services/memberIntegral';
import miniPro from '@/utils/wepy-pro.js';

export default {
  data() {
    return {
        active: '',
        Info: {},
        taleArr: [],
        hasMore: false,
        pageParams: {
          page: 0
        }
    };
  },

  async onLoad() {
    this.GetUserInfoF(this.GetUserInfoF.bind(this));
  },

  mixins: [],
  components: {},
  props: {},
  methods: {
    toTaleDetailA(taleId) {
      uni.navigateTo({
        url: `/pages/packageRecom/taleDetail/index?taleId=${taleId}`
      });
    },

    loadMore() {
      // 加载更多
      if (!this.hasMore) return;
      this.pageParams.page += 1;
      this.apiTaleFindPageFA(this.apiTaleFindPageFA.bind(this));
    },

    showText() {
      uni.navigateTo({
        url: `/pages/packageMine/memberDocument/index`
      });
    },

    goLink() {
      //跳转到商品分类页
      uni.switchTab({
        url: `/pages/classify/index`
      });
    },

    goSingIn() {
      uni.navigateTo({
        url: `/pages/packageIntegral/memberIntegralSignIn/index`
      });
    },

    goIndexLink() {
      uni.switchTab({
        url: `/pages/index/index`
      });
    },

    apiTaleFindPageFA(fun) {
      apiTaleFindPageF({
        page: this.pageParams.page,
        limit: 100
      }, fun).then(result => {
        let {
          rows,
          last
        } = result;
        this.hasMore = !last;
        this.taleArr = this.taleArr.concat(rows);
      }).catch(() => {});
    },

    GetUserInfoF() {
      //获取用户会员等级积分信息
      apiGetUserInfoF().then(msg => {
        console.log(msg);
        this.Info = msg;
      }).catch(() => {});
    }

  },
  computed: {},
  watch: {}
};
</script>
<style lang="scss">

@import 'index';

</style>