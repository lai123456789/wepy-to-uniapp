<template>

  <view class="cat-item-ctner">

    <view class="order-status-order">
        <text>{{item.companyName}} > </text>
        <text style="font-weight: bold;font-size: 26rpx">{{item.statusDesc}}</text>
    </view>
    <block v-if="item.details.length == 1 ">
      <view class="goods-outer" v-for="(subItem, index) in item.details" :key="index">
        <view class="cat-m">
          <image :src="subItem.goodsIcon"></image>
        </view>
        <view class="cat-m-t">
          <view class="goods-name">
            <text>{{subItem.goodsName}}</text>
          </view>
          <view class="goods-des">
            <text class="colorY" style="line-height:30rpx"><text v-if="subItem.colorName">颜色：{{subItem.colorName}} </text>
              <text> {{subItem.specification}}</text>
            </text>
          </view>
        </view>
      </view>
    </block>
    <block v-else> <!--   如果多个商品就合并-->
      <view class="all-more" style="width: 100%;display: flex;flex-flow: row wrap;">
        <view class="goods-outer-more" v-for="(subItem, index) in item.details" :key="index" style="margin-bottom:80rpx">
          <view class="cat-m-more">
            <image :src="subItem.goodsIcon" style="width: 123rpx !important;height:123rpx !important; margin:10rpx;"></image>
          </view>
        </view>
      </view>
    </block>


    <view class="order-num-outer">
        <text>共 {{item.totalCount}} 件商品 付款金额:</text>
        <text>￥{{item.totalMoney}}</text>
    </view>

    <view style="float:left;" v-if="item.groupPurchaseActivityId">团购</view>
    <view class="order-button-outer">
        <view v-for="(btnItem, index) in item.operations" :key="index" @click.stop="orderBtnA(btnItem, {{item}},{{item.details[0].goodsId}})" :class="'order-btn ' + (btnItem.color == 'sure' ? 'order-btn-active' : (btnItem.color == 'order-cancel'?'order-cancel':''))">
          {{btnItem.value}}

        </view>
    </view>

  </view>

</template>

<script>

export default {
  data() {
    return {
      data: {}
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
    }
  },
  methods: {
    numAdd() {},

    numReduce() {},

    orderBtnA(btnItem, item, goodsId) {
      let param = { ...item,
        ...btnItem
      };
      this.$emit('statusId', btnItem, item, goodsId); //新改
    }

  },
  computed: {},
  watch: {
    item(newVal, oldVal) {}

  }
};
</script>
<style lang="scss" scoped="scoped">

// @import "./index.scss";
@import "../../common/css/rpx.scss";
@import "../../common/css/const.scss";
@import "../../common/css/mixin.scss";
.cat-item-ctner{
    position: relative;
    @include borderBottomOnePx;
    padding: rpx(30) rpx(20);
    background: #FFF;
    border-radius: rpx(10);
    .order-status-order {
        height: rpx(28);
        display: flex;
        align-items: center;
        font-size: rpx(16);
        margin-bottom: rpx(30);

        text:nth-of-type(2) {
            color: $color-word-alarm;
            flex: 1;
            text-align: right;
        }
        image {
            width: rpx(11);
            height: rpx(18);
            margin-left: rpx(10);
        }
    }
    .goods-outer {
        display: flex;
        align-items: center;
        padding: rpx(10) 0;
        position: relative;
        margin-bottom: rpx(70);
    }
    .cat-m{
        width: rpx(124);
        height: rpx(124);
        margin: 0 rpx(26) 0 rpx(16);
        image{
            width: 100%;
            height: 100%;
        }
    }
    .cat-m-t {
        flex: 1;
        .goods-name {
            font-size: rpx(32);
            color: $color-word-one;
        }
        .goods-des {
            font-size: rpx(20);
            height: rpx(20);
            line-height: rpx(20);
            color: $color-word-three;
            margin: rpx(16) 0 rpx(20) 0;
        }
        .goods-name,
        .goods-des {
            display: flex;
            justify-content: space-between;
        }
    }
    .order-num-outer {
        height: rpx(20);
        line-height: rpx(5);
        font-size: rpx(16);
        text-align: right;
        margin: rpx(-20) 0 rpx(10) 0;
        border-bottom: rpx(2) solid #F6F6F6;
        padding-bottom: rpx(30);
        text:nth-of-type(2) {
            color: $color-word-alarm
        }
    }
    .order-button-outer {
        display: flex;
        justify-content: flex-end;
        .order-btn {
            height: rpx(40);
            line-height: rpx(36);
            font-size: rpx(22);
            color: #FFFFFF;
            background: $color-word-alarm;
            border-radius: rpx(20);
            margin-right: rpx(17);
          width: rpx(150);
          display: flex;
          justify-content: center;
        }
        .order-btn.order-btn-active {
          font-size: rpx(22);
          color: #FFFFFF;
          border-color: $color-word-alarm;
        }
        .order-btn.order-cancel {
            opacity: 0.8;
        }
    }
}

</style>