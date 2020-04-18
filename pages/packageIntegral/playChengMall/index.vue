<template>

  <view class="play-ctner">
    <view class="recom-same-center">
      <view class="recom-play-cheng">
        <view class="p1">玩转成氏商城</view>
        <view class="p2">
          <video src="https://csmall-1259120104.cos.ap-guangzhou.myqcloud.com/videos/video.mp4"></video>
        </view>
      </view>
    </view>
    <view class="line"></view>

    <view class="recom-same-center">
      <view class="recom-play-cheng">
        <view class="p1">玩转成氏商城</view>
        <view class="p2">
          <video src></video>
        </view>
      </view>
    </view>
    <view class="line"></view>
  </view>

</template>

<script>

export default {
  data() {
    return {
      data: {
        hasMore: false,
        pageParams: {
          page: 0
        }
      }
    };
  },

  async onLoad() {},

  mixins: [],
  components: {},
  props: {},
  methods: {},
  computed: {},
  watch: {}
};
</script>
<style lang="scss">

  @import 'index';

</style>