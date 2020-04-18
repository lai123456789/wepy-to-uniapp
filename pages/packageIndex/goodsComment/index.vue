<template>

  <view class="goods-ctner">
    <view class="goods-des-comment">
      <view class="commentIndex">
        <view class="g1">
          <view>商品评价（{{total}}）</view>
          <view>
            <text>总评价</text>
            <image src="../../../images/starred.png"></image>
            <image src="../../../images/starred.png"></image>
            <image src="../../../images/starred.png"></image>
            <image src="../../../images/starred.png"></image>
            <image src="../../../images/starred.png"></image>
          </view>
        </view>
      </view>
      <scroll-view scroll-y="true" lower-threshold="200" :style="'height:' + height+700 + 'rpx;position: relative;'" @scrolltolower="loadMore" scroll-with-animation="true">
        <view class="g-content" v-for="(item, commentIndex) in pageList" :key="commentIndex">
          <view class="g-c1">
            <image :src="item.headImg"></image>
            <view>
              <view class="gc1">{{item.nickName}}</view>
              <view class="gc2">
                <block v-if="item.evaluation == 5">
                  <image src="../../../images/starred.png"></image>
                  <image src="../../../images/starred.png"></image>
                  <image src="../../../images/starred.png"></image>
                  <image src="../../../images/starred.png"></image>
                  <image src="../../../images/starred.png"></image>
                </block>
                <block v-if="item.evaluation == 4">
                  <image src="../../../images/starred.png"></image>
                  <image src="../../../images/starred.png"></image>
                  <image src="../../../images/starred.png"></image>
                  <image src="../../../images/starred.png"></image>
                </block>
                <block v-if="item.evaluation == 3">
                  <image src="../../../images/starred.png"></image>
                  <image src="../../../images/starred.png"></image>
                  <image src="../../../images/starred.png"></image>
                </block>
                <block v-if="item.evaluation == 2">
                <image src="../../../images/starred.png"></image>
                <image src="../../../images/starred.png"></image>
              </block>
                <block v-if="item.evaluation == 1">
                  <image src="../../../images/starred.png"></image>
                </block>
                <block v-if="item.evaluation == 0">
                </block>
              </view>
            </view>
          </view>
          <view class="g-c2">
            {{item.comment}}
          </view>
          <view class="g-c4">
          <view v-for="(subItem, son) in item.commentImgList" :key="son">
            <image :src="subItem" mode="aspectFill" @tap="previewImg" :data-index="index" :data-item="item"></image>
          </view>
          </view>
          <view class="g-c3">
            <view v-if="item.createTime">{{item.createTime}}</view>
            <text style="margin: 0 8rpx"> | </text>
            <view v-if="item.colorName" class="n" style="margin-right:8rpx">颜色：{{item.colorName}}</view>
            <view v-if="item.specification" class="n">规格：{{item.specification}}</view>
          </view>
          <view class="g-c5" v-if="item.commentsReply">
            <view class="gc-reply1">
              <text>商家回复</text>
              <image src="../../../images/reply.png"></image>
            </view>
            <view class="gc-reply2">
              {{item.commentsReply}}
            </view>
          </view>
        </view>

      </scroll-view>

    </view>
  </view>


</template>

<script>
import { apiCommentListF } from '../../../services/cart';
import miniPro from '../../../utils/wepy-pro';

export default {
  data() {
    return {
      data: {
        limit: 6,
        offset: 0,
        hasMore: false,
        pageList: [],
        total: "",
        height: wx.getSystemInfoSync().screenHeight
      }
    };
  },

  onLoad(option) {
    this.goodsId = option.goodsId;
    setTimeout(() => {
      this.apiCommentListFA(this.apiCommentListFA.bind(this)); //获取商品评价内容列表
    }, 50);
  },

  mixins: [],
  components: {},
  props: {},
  methods: {
    loadMore() {
      //
      if (!this.hasMore) return; //这里要return 否则会一直加载无限重复数据

      let offset = this.offset;

      if (offset == 0) {
        offset = this.limit;
      } else {
        offset = offset + this.limit;
      }

      this.offset = offset;
      this.apiCommentListFA(this.apiCommentListFA.bind(this));
    },

    apiCommentListFA(fun) {
      let t = this;
      let param = {
        limit: t.limit,
        offset: t.offset
      };
      let goodsId = t.goodsId;
      apiCommentListF(param, goodsId, fun).then(msg => {
        console.log(msg);
        let {
          rows,
          total,
          last
        } = msg;
        t.total = total;
        t.hasMore = !last;
        t.pageList = t.pageList.concat(rows);
      }).catch(() => {});
    },

    previewImg(e) {
      let index = e.currentTarget.dataset.index;
      const contentImg = e.currentTarget.dataset.item.commentImgList[index];
      wx.previewImage({
        current: contentImg,
        //当前图片地址
        urls: [contentImg],
        //所有要预览的图片的地址集合 数组形式
        success: function (res) {},
        fail: function (res) {},
        complete: function (res) {}
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