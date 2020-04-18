<template>

  <view class="exchange-ctner">
      <view class="code-con">
      <view class="code-title1">请输入兑换码</view>
      <input @input="bindInput" class="code-input" type="text" maxlength="6" placeholder="请输入兑换码(最多6位)"></input>
      <view class="code-btn" @tap="duiA">立即兑换</view>
      <view class="code-title2">每张卡片可兑一次大奖</view>
    </view>
  </view>

</template>

<script>
import '../../../common/js/authProcess.js';
import { apiVipExchangeF } from '../../../services/index';
import miniPro from '../../../utils/wepy-pro';

export default {
  data() {
    return {
      data: {
        vipCode: '',
        vipCode: '',
        inputCon: ''
      }
    };
  },

  mixins: [],
  components: {},
  props: {},
  methods: {
    bindInput(e) {
      this.inputCon = e.detail.value;
    },

    duiA() {
      let _code = this.inputCon;
      this.apiVipExchangeFA(this.apiVipExchangeFA.bind(this));
    },

    apiVipExchangeFA(fun) {
      apiVipExchangeF({
        code: this.inputCon
      }, fun).then(result => {
        miniPro.showToast('兑换成功');
        setTimeout(() => {
          wx.switchTab({
            url: '/pages/mine/index'
          });
        }, 1500);
      }).catch(() => {});
    }

  },
  computed: {},
  watch: {}
};
</script>
<style lang="scss" scoped="scoped">

@import "./index";

</style>