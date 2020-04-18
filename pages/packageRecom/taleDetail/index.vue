<template>

  <view class="tale-detail-ctner">
      <import src="../../../common/wxParse/wxParse.wxml"></import>
      <view class="tale-wxParse">
		<rich-text :nodes="rich"></rich-text>
      </view>
      <view class="tale-btn">
        <view class="tale-btn-left" @tap="toCollectA">
          <image v-if="isCollect" src="../../../images/start_on.png"></image>
          <image v-else src="../../../images/favor.png"></image>
          <view>收藏</view>
        </view>
        <button @tap="toGoodsDetailA" class="icx-btn-same-sure" hover-class="icx-click-hover">点击购买</button>
      </view>
  </view>

</template>

<script>
import { apiTaleFindDetailsF, apiTaleUnpatronizeF, apiTalePatronizeF } from '../../../services/classify';
import miniPro from '../../../utils/wepy-pro';
import WxParse from '../../../common/wxParse/wxParse.js';

export default {
  data() {
    return {
        taleId: '',
        taleObj: {},
        isCollect: false,
		rich:""
    };
  },

  onLoad(option) {
    this.taleId = option.taleId;
    this.apiTaleFindDetailsFA(this.apiTaleFindDetailsFA.bind(this));
  },

  onShareAppMessage(res) {
    let _taleId = this.taleId;

    if (res.from === 'button') {// 来自页面内转发按钮
    }

    return {
      title: '成氏商城',
      path: `/pages/packageRecom/taleDetail/index?taleId=${_taleId}`
    };
  },

  mixins: [],
  components: {},
  props: {},
  methods: {
    toGoodsDetailA() {
      let _goodsId = this.taleObj.goodsId;
      let _groupPurchase = this.taleObj.groupPurchase;

      if (_goodsId) {
        miniPro.toGoodsDetail(_goodsId, _groupPurchase);
      }
    },

    toCollectA() {
      if (this.isCollect) {
        this.apiTaleUnpatronizeFA(this.apiTaleUnpatronizeFA.bind(this));
      } else {
        this.apiTalePatronizeFA(this.apiTalePatronizeFA.bind(this));
      }
    },

    apiTaleFindDetailsFA(fun) {
      let _self = this;

      apiTaleFindDetailsF(this.taleId, fun).then(result => {
        this.taleObj = result;
        this.isCollect = result.patronize;
		let body = result.taleContent.replace(/\<img/gi, '<img style="display:-webkit-box;width:100% !important;" '); //富文本里面的img设置为宽度100%
        this.rich = body
      }).catch(() => {});
    },

    apiTalePatronizeFA(fun) {
      apiTalePatronizeF({
        id: this.taleObj.id
      }, fun).then(msg => {
        miniPro.showToast('收藏成功');
        setTimeout(() => {
          this.isCollect = true;
        }, 1000);
      }).catch(() => {
        miniPro.showToast('收藏失败');
      });
    },

    apiTaleUnpatronizeFA(fun) {
      // 取消收藏
      apiTaleUnpatronizeF({
        id: this.taleObj.id
      }, fun).then(msg => {
        miniPro.showToast('取消收藏成功');
        setTimeout(() => {
          this.isCollect = false;
        }, 1000);
      }).catch(() => {
        miniPro.showToast('取消收藏失败');
      });
    }

  },
  computed: {},
  watch: {}
};
</script>
<style lang="scss" scoped="scoped">

@import "./index";

</style>