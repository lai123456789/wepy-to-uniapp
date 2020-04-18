<template>

  <view class="modal" :hidden="show">
    <view class="modal-mask" @tap="hideModal" v-if="showModal">
    </view>
    <block v-if="showModal">
<!--     <slot name="exchang"   @tap.user="we"> <!&ndash; slot插槽&ndash;&gt;-->
        <view class="modal-content">
          <view class="content-exchang">
            <view class="btn-content">
              <view :class="'m-item  ' + (Active == '1' ? 'activeQ' : '')" @tap="we">
                <view>积分换购</view>
                <view>
                  <image src="../../../images/clection_icon.png"></image>
                </view>
              </view>
              <view :class="'m-item ' + (Active == '2' ? 'activeQ' : '')">
                <view>现金购买</view>
                <view>
                  <image src="../../../images/m_icon_10.png"></image>
                </view>
              </view>
            </view>
            <view><button class="icx-btn-same-sure">确定</button></view>
          </view>
        </view>
<!--      </slot>-->
    </block>
  </view>


</template>

<script>

export default {
  data() {
    return {
      data: {
        Active: '1',
        showModal: false,
        //优先
        show: true
      }
    };
  },

  onLoad() {
    console.log("a2");
  },

  mixins: [],
  components: {},
  props: {},
  methods: {
    we() {
      console.log("awefawfawefaw");
    },

    hideModal() {
      this.show = false;
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