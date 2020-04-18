<template>
<view>

  <view class="authorized-container" v-if="showAuth">
  <view class="auth-inner">
    <image class="img-top" src="./img/dunpai.png"></image>
    <view class="auth-tip">
      <image class="tip-img" src="./img/logo_small.png"></image>
      <view class="tip-con">
        <view class="tip-con-1">觅我申请获得以下权限</view>
        <view class="tip-con-2">获得你的公开信息（头像、昵称等）</view>
      </view>
    </view>
    <button class="auth-btn icx-clear-after-border" open-type="getUserInfo" lang="zh_CN" @getuserinfo="onGotUserInfo">获取用户信息</button>
    <view class="auth-cancel-btn" @tap="authCancel">取消</view>
  </view>
</view>

</view>
</template>

<script>

export default {
  data() {
    return {
      data: {
        showAuth: false
      }
    };
  },

  mixins: [],
  components: {},
  props: {
    callBack: {
      type: Object,
      value: {},

      observer(newVal, oldVal) {}

    }
  },
  methods: {
    onGotUserInfo: function (e) {
      let {
        userInfo
      } = e.detail;
      this.hide();

      if (userInfo) {
        this.$root.$parent.globalData.userInfo = userInfo;
        this.$wxpage.initSet && this.$wxpage.initSet();
      } // let pages = this.getCurrentPages();

    },

    authCancel() {
      let pages = this.getCurrentPages();
      this.hide();
    },

    show() {
      this.showAuth = true;
    },

    hide() {
      this.showAuth = false;
    }

  },
  computed: {},
  watch: {}
};
</script>
<style lang="scss" scoped="scoped">

@import "./index.scss";

</style>